import type { ProjectStatus } from "@/lib/content";

const tone: Record<ProjectStatus, string> = {
  Implemented: "text-accent",
  Prototype: "text-sand",
  "To publish": "text-muted",
};

export function StatusMark({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase ${tone[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  );
}
