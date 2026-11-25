import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Olakunle Oduntan about remote AI engineering work or a scoped build.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-[1120px] gap-14 px-6 py-16 md:grid-cols-[0.8fr_1.1fr]">
      <div>
        <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Contact</p>
        <h1 className="serif mt-4 text-5xl leading-tight">Tell me the problem.</h1>
        <p className="mt-6 text-muted">
          Roles, collaborations, and scoped builds. A useful note says who it is for and what the first version needs to do.
        </p>
        <ul className="mt-8 grid gap-3 text-sm">
          <li>
            <a href={profile.whatsapp} className="nav-link">
              WhatsApp
            </a>
          </li>
          <li>
            <a href={profile.closer} className="nav-link">
              Closer Tech
            </a>
          </li>
          <li>
            <a href={profile.github} className="nav-link">
              GitHub
            </a>
          </li>
          <li className="text-muted">LinkedIn is not linked yet.</li>
          <li className="text-muted">A professional email can be wired in when you have the address to publish.</li>
        </ul>
      </div>
      <ContactForm />
    </main>
  );
}
