import type { Metadata } from "next";
import Link from "next/link";
import { StatusMark } from "@/components/StatusMark";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Flagship AI products and the case studies still being prepared for publication.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-16">
      <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">Work</p>
      <h1 className="serif mt-4 max-w-3xl text-5xl leading-tight">
        Six studies. Three you can inspect on this machine.
      </h1>
      <p className="mt-6 max-w-2xl text-muted">
        Closer Assistant, Adesuwa, and CueGPT are implemented here. Adesuwa is the Regional Hotel assistant. CueGPT is the tutor for Cue Banks&apos; students. The other pages stop where the source is not on this laptop.
      </p>
      <ul className="mt-14 divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="grid gap-3 py-7 md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-8"
            >
              <span className="serif text-3xl text-muted">{project.number}</span>
              <span>
                <span className="block text-2xl">{project.name}</span>
                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted">
                  {project.summary}
                </span>
                <span className="mt-3 block font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  {project.domains.join(" · ")}
                </span>
              </span>
              <StatusMark status={project.status} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
