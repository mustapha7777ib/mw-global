"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/ui";
import { site } from "@/lib/site";
import { type Dictionary } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full border border-ink-900/20 bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand-700 focus:outline-none";

const labelClass = "mb-2 block text-[0.82rem] font-medium text-ink-600";

/**
 * A Client Component: its copy arrives as a prop rather than through the
 * dictionary directly, so only the form's own strings cross into the browser
 * bundle instead of every page's copy in both languages.
 */
export function QuoteForm({
  copy,
  serviceOptions,
}: {
  copy: Dictionary["form"];
  /** `label` is what the visitor reads; `value` is what the trade desk receives. */
  serviceOptions: { value: string; label: string }[];
}) {
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
        throw new Error(body.error ?? copy.genericError);
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : copy.unexpectedError);
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
          {copy.successHeading}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-[1.7] text-ink-600">
          {copy.successLead} {copy.successUrgent}{" "}
          <span dir="ltr">{site.phone}</span>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-[0.9rem] font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
        >
          {copy.successAgain}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-ink-900/12 bg-white p-8 sm:p-10"
    >
      <h2 className="display text-[1.6rem] text-ink-900">{copy.heading}</h2>
      <p className="mt-2.5 text-[0.95rem] leading-[1.7] text-ink-600">
        {copy.intro}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            {copy.name} <span className="text-crimson-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder={copy.namePlaceholder}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            {copy.company}
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={inputClass}
            placeholder={copy.companyPlaceholder}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            {copy.email} <span className="text-crimson-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder={copy.emailPlaceholder}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            {copy.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder={copy.phonePlaceholder}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="service">
            {copy.service}
          </label>
          <select
            id="service"
            name="service"
            className={inputClass}
            defaultValue=""
          >
            <option value="">{copy.servicePlaceholder}</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            <option value="Other">{copy.serviceOther}</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="destination">
            {copy.destination}
          </label>
          <input
            id="destination"
            name="destination"
            className={inputClass}
            placeholder={copy.destinationPlaceholder}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            {copy.message} <span className="text-crimson-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-y`}
            placeholder={copy.messagePlaceholder}
          />
        </div>
      </div>

      {/* Honeypot — bots fill this, humans never see it. */}
      <div className="absolute start-[-9999px]" aria-hidden="true">
        <label htmlFor="website">{copy.honeypot}</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 border-s-2 border-crimson-600 bg-crimson-50 px-4 py-3 text-[0.9rem] text-crimson-800"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-brand-700 px-8 py-4 text-[0.92rem] font-semibold text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? copy.sending : copy.submit}
        {status === "sending" ? null : <ArrowRight />}
      </button>

      <p className="mt-5 text-[0.82rem] leading-[1.6] text-ink-400">
        {copy.privacy}
      </p>
    </form>
  );
}
