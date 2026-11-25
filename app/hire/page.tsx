import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire",
  description: "Engagement types for remote AI engineering work and scoped product builds.",
};

const engagements = [
  {
    title: "Remote engineering",
    text: "AI engineer, machine learning engineer, or agent-developer roles. International, remote.",
  },
  {
    title: "A scoped product",
    text: "An assistant, a voice receptionist, or an automation with a named workflow and a way to run it.",
  },
  {
    title: "A prototype with a boundary",
    text: "A short build that proves one path, with implemented and unfinished work labeled separately.",
  },
];

const services = [
  {
    title: "Voice receptionist",
    text: "A spoken agent with a business's greeting, facts, and a defined job such as answering or booking.",
  },
  {
    title: "Business assistant",
    text: "A chat or WhatsApp agent trained on that company's services, tone, and handoff rules.",
  },
  {
    title: "Knowledge-grounded answers",
    text: "Answers tied to documents or structured facts, with the source visible where it matters.",
  },
  {
    title: "Workflow connection",
    text: "The step after the conversation: where the enquiry goes, and what a person still approves.",
  },
];

export default function HirePage() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-16">
      <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Hire</p>
      <h1 className="serif mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">
        From a business problem to software that can be tried.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        I take a limited number of roles and client builds. The useful first conversation is the problem,
        who uses the system, and what “done” means for the first version.
      </p>

      <section className="mt-14 grid gap-px bg-line md:grid-cols-3">
        {engagements.map((item, index) => (
          <article key={item.title} className="bg-background p-6">
            <p className="font-mono text-[11px] text-accent">0{index + 1}</p>
            <h2 className="mt-4 text-xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="serif text-4xl">What I can build</h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {services.map((item) => (
            <li key={item.title} className="grid gap-2 py-6 md:grid-cols-[16rem_1fr]">
              <h3>{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border border-line p-6 md:p-8">
        <h2 className="text-2xl">How a project starts</h2>
        <ol className="mt-6 grid gap-4 text-sm leading-relaxed text-muted">
          <li>1. The problem, in the words of the person who has it.</li>
          <li>2. A thin working slice, not a deck of possible features.</li>
          <li>3. A written line between what runs and what is still a plan.</li>
          <li>4. Handover: how to run it, and what it still does not do.</li>
        </ol>
        <Link href="/contact" className="mt-8 inline-block bg-foreground px-5 py-3 text-sm text-background">
          Start a conversation
        </Link>
      </section>
    </main>
  );
}
