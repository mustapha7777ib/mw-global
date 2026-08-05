#!/usr/bin/env python3
"""
Regenerates the raster brand assets from the SVG sources.

    python3 scripts/generate-brand-assets.py

Sources of truth (edit these, then re-run):
    public/logo.svg   full mark, including the GSL bar
    app/icon.svg      simplified mark used for tab / search-result icons

Produces:
    app/favicon.ico         16 + 32 + 48px, for crawlers and older browsers
    app/apple-icon.png      180px, iOS home screen
    public/logo.png         512px raster of the full mark, referenced by the
                            Organization JSON-LD (Google wants a raster logo)
    app/opengraph-image.jpg 1200x630 link-preview card
    app/twitter-image.jpg   same card, served to X/Twitter

Requires `rsvg-convert` (brew install librsvg), Pillow and fontTools. This is
optional tooling — the generated files are committed, so a normal build and
deploy never runs it.
"""

import glob
import os
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "app"
PUBLIC = ROOT / "public"

# Pulled from app/globals.css so the assets and the site cannot drift apart.
BRAND_700 = "#15653e"
BRAND_950 = "#062316"
BRAND_200 = "#b0d3bd"
CRIMSON_600 = "#a81b3f"

OG_W, OG_H = 1200, 630
PAD = 80


def svg_to_png(svg: Path, out: Path, width: int, height: int | None = None) -> Path:
    """Rasterise an SVG with librsvg, preserving the alpha channel."""
    cmd = ["rsvg-convert", "-w", str(width)]
    if height:
        cmd += ["-h", str(height)]
    cmd += ["-o", str(out), str(svg)]
    subprocess.run(cmd, check=True)
    return out


def find_fonts() -> dict[str, Path]:
    """
    Locate the site's real webfonts in the next/font build cache and unpack them
    to TrueType so Pillow can use them.

    next/font rewrites the name table, so every file claims to be "Regular" and
    weight 400. The subsets that carry basic latin are the ones next/font marks
    with `-s.p.`; the rest are latin-ext and are missing A-Z entirely.
    """
    from fontTools.ttLib import TTFont

    cache = ROOT / ".next" / "static" / "media"
    work = ROOT / ".next" / "cache" / "brand-assets"
    work.mkdir(parents=True, exist_ok=True)

    found: dict[str, Path] = {}
    for path in sorted(glob.glob(str(cache / "*-s.p.*.woff2"))):
        font = TTFont(path)
        family = font["name"].getDebugName(1)
        if font["post"].italicAngle:
            continue
        ttf = work / (family.replace(" ", "-") + ".ttf")
        font.flavor = None
        font.save(ttf)
        found[family] = ttf

    missing = {"IBM Plex Sans", "Source Serif 4"} - found.keys()
    if missing:
        sys.exit(
            f"Could not find {', '.join(sorted(missing))} in {cache}.\n"
            "Run `npm run build` once so next/font populates its cache, then retry."
        )
    return found


def text(draw, xy, string, font, fill, bold=0, spacing=0):
    """Draw text, optionally letterspaced and optionally faux-bolded.

    Only the 400 weight of each family survives in the next/font cache, so
    heavier weights are approximated with an outline stroke in the fill colour.
    """
    x, y = xy
    if not spacing:
        draw.text((x, y), string, font=font, fill=fill, stroke_width=bold, stroke_fill=fill)
        return
    for char in string:
        draw.text((x, y), char, font=font, fill=fill, stroke_width=bold, stroke_fill=fill)
        x += draw.textlength(char, font=font) + spacing


def cover(image: Image.Image, width: int, height: int) -> Image.Image:
    """Scale and centre-crop, the way CSS `object-fit: cover` would."""
    scale = max(width / image.width, height / image.height)
    resized = image.resize(
        (round(image.width * scale), round(image.height * scale)), Image.LANCZOS
    )
    left = (resized.width - width) // 2
    top = (resized.height - height) // 2
    return resized.crop((left, top, left + width, top + height))


def build_icons(work: Path) -> None:
    # favicon.ico — Pillow writes every requested size into the one container.
    # The explicit RGBA conversion is load-bearing: Next's ICO decoder rejects
    # PNG-in-ICO payloads in any other mode with "The PNG is not in RGBA format".
    ico_src = svg_to_png(APP / "icon.svg", work / "icon-512.png", 512)
    Image.open(ico_src).convert("RGBA").save(
        APP / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)]
    )

    # apple-icon.png — iOS composites onto an opaque tile and rounds the corners
    # itself, so this is full-bleed brand green with the mark inset to survive
    # the corner radius.
    inset = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="-16 -16 132 132">
      <rect x="-16" y="-16" width="132" height="132" fill="%s"/>
      <path d="M36 22 63 50 36 78 9 50Z" stroke="#fff" stroke-width="7" fill="none"/>
      <path d="M64 22 91 50 64 78 37 50Z" stroke="#fff" stroke-width="7" fill="none"/>
    </svg>""" % BRAND_700
    tile = work / "apple.svg"
    tile.write_text(inset)
    svg_to_png(tile, APP / "apple-icon.png", 180, 180)

    # Raster logo for the Organization JSON-LD.
    svg_to_png(PUBLIC / "logo.svg", PUBLIC / "logo.png", 512)


def build_og_card(work: Path, fonts: dict[str, Path]) -> None:
    serif = str(fonts["Source Serif 4"])
    sans = str(fonts["IBM Plex Sans"])

    # Mirror the homepage hero: photo at 40% over solid brand-950, then a
    # left-to-right scrim so the type always lands on the dark side.
    card = Image.new("RGB", (OG_W, OG_H), BRAND_950)
    photo = cover(Image.open(PUBLIC / "images" / "hero-port.jpg").convert("RGB"), OG_W, OG_H)
    card = Image.blend(card, photo, 0.40)

    scrim = Image.new("L", (OG_W, 1))
    for x in range(OG_W):
        t = x / (OG_W - 1)
        alpha = 255 - int(255 * min(1.0, max(0.0, (t - 0.10) / 0.85)) ** 1.25)
        scrim.putpixel((x, 0), max(alpha, 38))
    card = Image.composite(
        Image.new("RGB", (OG_W, OG_H), BRAND_950), card, scrim.resize((OG_W, OG_H))
    )

    draw = ImageDraw.Draw(card)

    # ── Header: mark + stacked wordmark, matching the navbar lockup ──────────
    mark = Image.open(svg_to_png(APP / "icon.svg", work / "mark-152.png", 152)).convert("RGBA")
    mark = mark.resize((76, 76), Image.LANCZOS)
    card.paste(mark, (PAD, PAD), mark)

    wx = PAD + 76 + 22
    text(draw, (wx, PAD + 8), "M/W Global", ImageFont.truetype(sans, 31), "#ffffff", bold=1)
    text(draw, (wx, PAD + 47), "Services Limited", ImageFont.truetype(sans, 20), BRAND_200, bold=1)

    # ── Eyebrow: crimson rule + letterspaced label, the site's section marker ─
    eyebrow_y = 268
    draw.rectangle([PAD, eyebrow_y + 7, PAD + 46, eyebrow_y + 10], fill=CRIMSON_600)
    text(
        draw,
        (PAD + 66, eyebrow_y),
        "IMPORT · EXPORT · LOGISTICS",
        ImageFont.truetype(sans, 20),
        BRAND_200,
        bold=1,
        spacing=2.4,
    )

    # ── Headline, in the site's display face ────────────────────────────────
    headline = ImageFont.truetype(serif, 68)
    for i, line in enumerate(["We move African goods", "to world markets."]):
        text(draw, (PAD - 3, 322 + i * 76), line, headline, "#ffffff", bold=1)

    # ── Footer strapline ────────────────────────────────────────────────────
    text(
        draw,
        (PAD, OG_H - PAD - 26),
        "Agricultural commodities  ·  Solid minerals  ·  Freight & customs clearing",
        ImageFont.truetype(sans, 23),
        "#cddccf",
    )

    # JPEG, not PNG: the card is photographic, and several scrapers (WhatsApp
    # in particular) skip preview images that run to a megabyte.
    card.save(APP / "opengraph-image.jpg", quality=88, optimize=True, progressive=True)
    card.save(APP / "twitter-image.jpg", quality=88, optimize=True, progressive=True)


def main() -> None:
    if not shutil_which("rsvg-convert"):
        sys.exit("rsvg-convert not found — install it with `brew install librsvg`.")
    work = ROOT / ".next" / "cache" / "brand-assets"
    work.mkdir(parents=True, exist_ok=True)

    build_icons(work)
    build_og_card(work, find_fonts())

    for path in [
        APP / "favicon.ico",
        APP / "apple-icon.png",
        APP / "opengraph-image.jpg",
        APP / "twitter-image.jpg",
        PUBLIC / "logo.png",
    ]:
        print(f"  {path.relative_to(ROOT)}  {path.stat().st_size / 1024:,.0f} KB")


def shutil_which(cmd: str) -> str | None:
    import shutil

    return shutil.which(cmd)


if __name__ == "__main__":
    main()
