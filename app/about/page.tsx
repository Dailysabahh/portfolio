import type { Metadata } from "next";
import { experience, profile, stack } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Professional identity, experience, and the engineering stack behind the work.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-16">
      <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">About</p>
      <h1 className="serif mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 font-mono text-xs tracking-[0.14em] text-muted uppercase">
        AI Engineer · AI Agents · Automation
      </p>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>
      <p className="mt-6 max-w-2xl leading-relaxed">
        One practice covers both kinds of work: remote engineering roles, and clients who need an assistant,
        a voice agent, or a workflow taken from a business problem to software that runs.
      </p>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="serif text-4xl">Experience</h2>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {experience.map((item) => (
            <li key={`${item.org}-${item.role}`} className="grid gap-4 py-7 md:grid-cols-[16rem_1fr]">
              <div>
                <p className="text-lg">{item.org}</p>
                <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  {item.time}
                </p>
              </div>
              <div>
                <h3>{item.role}</h3>
                <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
        <div>
          <h2 className="serif text-4xl">Education</h2>
          <p className="mt-4">{profile.education}</p>
          <p className="mt-2 text-sm text-muted">{profile.location}</p>
        </div>
        <div>
          <h2 className="serif text-4xl">Stack</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {stack.map((group) => (
              <li key={group.label}>
                <span className="text-muted">{group.label}. </span>
                {group.items.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <p className="mt-16 max-w-2xl border-t border-line pt-8 text-sm leading-relaxed text-muted">
        <a className="nav-link text-foreground" href={profile.github}>GitHub</a>
        {" "}holds the public code. LinkedIn is not linked yet.
      </p>
    </main>
  );
}
