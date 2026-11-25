import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusMark } from "@/components/StatusMark";
import { getProject, projects } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.name, description: project.summary };
}

const questions = [
  { key: "problem", label: "What problem existed?" },
  { key: "built", label: "What did I build?" },
  { key: "how", label: "How did I build it?" },
  { key: "interesting", label: "What is technically interesting?" },
  { key: "result", label: "What result can I show?" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-[1120px] px-6 py-16">
      <Link href="/work" className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
        All work
      </Link>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <span className="serif text-4xl text-muted">{project.number}</span>
        <StatusMark status={project.status} />
      </div>
      <h1 className="serif mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">{project.name}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
      <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
        {project.kicker} · {project.stack.join(" · ")}
      </p>

      {project.layers ? (
        <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {project.layers.map((layer, index) => (
            <li key={layer.name} className="bg-panel p-5">
              <span className="font-mono text-[11px] text-accent">0{index + 1}</span>
              <h2 className="mt-3 text-lg">{layer.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{layer.detail}</p>
            </li>
          ))}
        </ol>
      ) : null}

      <div className="mt-16 grid gap-12">
        {questions.map((question) => (
          <section key={question.key} className="grid gap-4 border-t border-line pt-8 md:grid-cols-[16rem_1fr]">
            <h2 className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              {question.label}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed">{project[question.key]}</p>
          </section>
        ))}
      </div>

      <section className="mt-16 border border-line bg-panel p-6 md:p-8">
        <h2 className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">Current status</h2>
        <p className="mt-4 max-w-2xl leading-relaxed">{project.statusNote}</p>
        <h3 className="mt-8 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">Next</h3>
        <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-muted">
          {project.next.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
