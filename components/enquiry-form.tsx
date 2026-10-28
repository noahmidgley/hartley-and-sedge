"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONTACT_BUDGETS } from "@/lib/content";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) nextErrors.email = "Please add an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "That doesn't look like a valid email.";
    if (!message) nextErrors.message = "Tell us a little about the garden.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="grain relative border border-ink/15 bg-paper p-7 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="flex min-h-[380px] flex-col justify-center"
          >
            <span className="font-display text-2xl font-semibold text-accent">
              No. 5 — Received
            </span>
            <p className="mt-4 max-w-sm font-body text-lg text-ink">
              Thank you — that&apos;s landed with the studio. Eleanor reads every
              enquiry herself and will reply within two working days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            noValidate
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} required />
              <Field label="Email" name="email" type="email" error={errors.email} required />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Phone (optional)" name="phone" type="tel" />
              <Field label="Property location" name="location" placeholder="Village, county" />
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-label text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                Approximate budget
              </span>
              <select
                name="budget"
                defaultValue={CONTACT_BUDGETS[CONTACT_BUDGETS.length - 1]}
                className="border-0 border-b border-ink/25 bg-transparent py-2 font-body text-base text-ink outline-none transition-colors focus:border-accent"
              >
                {CONTACT_BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <Field
              label="Tell us about your garden"
              name="message"
              as="textarea"
              rows={4}
              error={errors.message}
              required
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex w-fit items-center gap-2.5 bg-accent px-6 py-3.5 font-label text-[11px] font-semibold tracking-[0.14em] text-ink-on-cover uppercase transition-[transform,background-color] duration-[160ms] ease-out hover:bg-accent-deep active:scale-[0.97] disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Request a conversation"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  rows,
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  const baseClass =
    "border-0 border-b border-ink/25 bg-transparent py-2 font-body text-base text-ink outline-none transition-colors focus:border-accent placeholder:text-ink-soft/50";

  return (
    <label className="flex flex-col gap-2">
      <span className="font-label text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={baseClass}
        />
      )}
      {error && <span className="font-body text-sm text-accent">{error}</span>}
      {!error && required && (
        <span className="sr-only">This field is required.</span>
      )}
    </label>
  );
}
