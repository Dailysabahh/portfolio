"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const intent = String(data.get("intent") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = [
      `Hello Olakunle, I'm ${name}.`,
      organization ? `Organization: ${organization}.` : "",
      `This is about: ${intent}.`,
      message,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      `${profile.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="grid gap-2 text-sm">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          className="border border-line bg-transparent px-3 py-3 outline-none"
        />
      </label>
      <label className="grid gap-2 text-sm">
        Organization
        <input
          name="organization"
          autoComplete="organization"
          className="border border-line bg-transparent px-3 py-3 outline-none"
        />
      </label>
      <label className="grid gap-2 text-sm">
        I want to talk about
        <select
          name="intent"
          required
          defaultValue="A remote role"
          className="border border-line bg-background px-3 py-3 outline-none"
        >
          <option>A remote role</option>
          <option>A client project</option>
          <option>A collaboration</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="border border-line bg-transparent px-3 py-3 outline-none"
        />
      </label>
      <button type="submit" className="justify-self-start bg-foreground px-5 py-3 text-sm text-background">
        Continue on WhatsApp
      </button>
      {sent ? (
        <p className="text-sm text-muted">
          WhatsApp should have opened with your note. If a browser blocked the tab, use the direct link beside this form.
        </p>
      ) : null}
    </form>
  );
}
