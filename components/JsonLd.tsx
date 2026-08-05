/**
 * Renders a structured-data block.
 *
 * A plain <script> is deliberate: JSON-LD is data, not executable code, so it
 * must be in the markup when a crawler parses the page. next/script exists to
 * defer and orchestrate real JavaScript, which is the opposite of what is
 * wanted here.
 *
 * `<` is escaped because JSON.stringify does not sanitise strings for HTML
 * embedding — without it, any `</script>` reaching site.ts or content.ts would
 * close the tag early and inject markup into the page.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
