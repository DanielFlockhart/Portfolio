"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { ok?: boolean; saved?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage(
        result.saved
          ? "Message saved. I will get back to you soon."
          : "Message validated, but Firebase is not configured yet. Add Firebase environment variables before relying on this form.",
      );
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border-2 border-black bg-white p-6 shadow-[10px_10px_0_#050505]">
      <div>
        <label htmlFor="name" className="text-sm font-black uppercase text-black">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          required
          autoComplete="name"
          className="field-input mt-2 w-full border-2 border-black px-4 py-3 font-medium text-black outline-none transition placeholder:text-neutral-500 focus:shadow-[5px_5px_0_#050505]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-black uppercase text-black">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          required
          autoComplete="email"
          className="field-input mt-2 w-full border-2 border-black px-4 py-3 font-medium text-black outline-none transition placeholder:text-neutral-500 focus:shadow-[5px_5px_0_#050505]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-black uppercase text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          required
          rows={6}
          className="field-input mt-2 w-full resize-none border-2 border-black px-4 py-3 font-medium text-black outline-none transition placeholder:text-neutral-500 focus:shadow-[5px_5px_0_#050505]"
          placeholder="Tell me what you are hiring for, building, or trying to solve."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="kinetic-button inline-flex w-full items-center justify-center border-2 border-black bg-black px-5 py-3 text-sm font-black uppercase text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {message ? (
        <p
          className="border-l-8 border-black bg-white py-2 pl-3 text-sm font-bold text-black"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
