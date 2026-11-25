import Link from "next/link";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="serif text-2xl">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted">
            AI Engineer. Intelligent agents, voice assistants, and software that can be run and inspected.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs tracking-[0.14em] text-muted uppercase">
          <Link href="/work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/hire" className="hover:text-foreground">
            Hire
          </Link>
          <a href={profile.github} className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.whatsapp} className="hover:text-foreground">
            WhatsApp
          </a>
          <a href={profile.closer} className="hover:text-foreground">
            Closer Tech
          </a>
        </div>
      </div>
    </footer>
  );
}
