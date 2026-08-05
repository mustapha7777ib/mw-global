"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/ui";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full border border-ink-900/20 bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand-700 focus:outline-none";

const labelClass = "mb-2 block text-[0.82rem] font-medium text-ink-600";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-ink-900/12 bg-white p-10 text-center sm:p-14">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="display mt-6 text-[1.5rem] text-ink-900">
          Enquiry received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-[1.7] text-ink-600">
          Thank you. Our trade desk will review your requirement and respond
          within one business day. For anything urgent, call {site.phone}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-[0.9rem] font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-ink-900/12 bg-white p-8 sm:p-10"
    >
      <h2 className="display text-[1.6rem] text-ink-900">Request a quote</h2>
      <p className="mt-2.5 text-[0.95rem] leading-[1.7] text-ink-600">
        The more specific you are about grade, volume and destination, the
        faster we can price it.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full name <span className="text-crimson-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={inputClass}
            placeholder="Acme Trading Ltd"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email <span className="text-crimson-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+00 000 000 0000"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="service">
            Service required
          </label>
          <select
            id="service"
            name="service"
            className={inputClass}
            defaultValue=""
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other / not sure</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="destination">
            Destination port / country
          </label>
          <input
            id="destination"
            name="destination"
            className={inputClass}
            placeholder="e.g. Nhava Sheva, India"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Commodity, grade and volume{" "}
            <span className="text-crimson-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-y`}
            placeholder="e.g. 2 x 40ft FCL hulled sesame seeds, 99.5% purity, 6% max moisture, CIF Nhava Sheva, shipping September."
          />
        </div>
      </div>

      {/* Honeypot — bots fill this, humans never see it. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 border-l-2 border-crimson-600 bg-crimson-50 px-4 py-3 text-[0.9rem] text-crimson-800"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-brand-700 px-8 py-4 text-[0.92rem] font-semibold text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
        {status === "sending" ? null : <ArrowRight />}
      </button>

      <p className="mt-5 text-[0.82rem] leading-[1.6] text-ink-400">
        We use your details only to respond to this enquiry. Fields marked{" "}
        <span className="text-crimson-600">*</span> are required.
      </p>
    </form>
  );
}
