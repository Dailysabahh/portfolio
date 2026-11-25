"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, profile } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center border border-line font-mono text-[11px] tracking-wide text-accent">
            OO
          </span>
          <span className="text-sm tracking-wide">{profile.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              className="nav-link data-[active=true]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="font-mono text-xs tracking-[0.16em] text-muted uppercase md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-line px-6 py-4 md:hidden">
          <ul className="grid gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
