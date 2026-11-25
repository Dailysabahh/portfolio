import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { StatusMark } from "@/components/StatusMark";
import { practices, profile, projects, stack } from "@/lib/content";

export default function HomePage() {
  const flagship = projects.filter((project) => project.weight === "flagship");
  const next = projects.filter((project) => project.weight === "next");

  return (
    <main>
      <section className="mx-auto grid max-w-[1120px] gap-16 px-6 pt-16 pb-20 md:grid-cols-[1.4fr_0.8fr] md:pt-24">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
            Available for select projects
          </p>
          <h1 className="serif mt-6 max-w-3xl text-5xl leading-[1.02] text-balance sm:text-6xl md:text-7xl">
            I build intelligent systems that turn complex problems into practical solutions.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            AI Engineer specializing in intelligent agents, voice AI, machine learning and business automation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="bg-foreground px-5 py-3 text-sm text-background"
            >
              Explore my work
            </Link>
            <Link
              href="/contact"
              className="border border-line px-5 py-3 text-sm"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="border-t border-line md:border-t-0 md:border-l md:pl-10">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">Focus</p>
          <ul className="mt-6 divide-y divide-line">
            {practices.map((item) => (
              <li key={item.index} className="py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-lg">{item.title}</h2>
                  <span className="font-mono text-xs text-muted">{item.index}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <h2 className="serif text-4xl">Selected work</h2>
            <Link href="/work" className="nav-link text-sm text-muted">
              All projects
            </Link>
          </div>
          <div className="mt-10 grid gap-6">
            {flagship.map((project) => (
              <Reveal key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid gap-6 border border-line bg-panel p-6 transition-colors hover:border-foreground/30 md:grid-cols-[auto_1fr_auto] md:p-8"
                >
                  <span className="serif text-4xl text-muted">{project.number}</span>
                  <span>
                    <StatusMark status={project.status} />
                    <span className="mt-3 block text-2xl">{project.name}</span>
                    <span className="mt-3 block max-w-xl text-sm leading-relaxed text-muted">
                      {project.summary}
                    </span>
                  </span>
                  <span className="font-mono text-xs tracking-[0.16em] text-muted uppercase group-hover:text-foreground">
                    Case study
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="serif text-4xl">Publishing next</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              These studies stay on the site so the plan is visible. They are not described as finished products.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {next.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span>
                    <span className="mr-3 font-mono text-xs text-muted">{project.number}</span>
                    {project.name}
                  </span>
                  <StatusMark status={project.status} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-6 py-16">
          <h2 className="serif text-4xl">Stack I can show</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Limited to tools used in the products on this machine. A longer list waits until there is code or a workflow behind it.
          </p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((group) => (
              <div key={group.label}>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {group.label}
                </dt>
                <dd className="mt-3 text-sm leading-7">{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 font-mono text-xs tracking-[0.14em] text-muted uppercase">
            {profile.education}
          </p>
        </div>
      </section>
    </main>
  );
}
