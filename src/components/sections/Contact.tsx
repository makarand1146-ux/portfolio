"use client";

import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Fill in every field before sending.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("That email address doesn't look right.");
      return;
    }

    setError(null);

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Hiring for an analyst or ops role? Let's talk."
              description="I respond fastest by email. For anything time-sensitive, LinkedIn works too."
              className="mb-0 max-w-md"
            />
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-signal hover:underline underline-offset-4"
            >
              <Mail size={16} strokeWidth={1.75} />
              {profile.email}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-widest2 text-ink-text-muted dark:text-paper-text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-2 w-full rounded-md border border-line-light bg-paper-raised px-4 py-3 text-sm text-ink-text outline-none transition-colors focus:border-signal dark:border-line-dark dark:bg-ink-raised dark:text-paper-text"
              />
            </div>

            {error ? (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-ink-text px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink-text/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal dark:bg-paper-text dark:text-ink dark:hover:bg-paper-text/85"
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-xs uppercase tracking-widest2 text-ink-text-muted dark:text-paper-text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-line-light bg-paper-raised px-4 py-2.5 text-sm text-ink-text outline-none transition-colors focus:border-signal dark:border-line-dark dark:bg-ink-raised dark:text-paper-text"
      />
    </div>
  );
}
