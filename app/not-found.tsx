import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-24">
      <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">404</p>
      <h1 className="serif mt-4 text-5xl">That page is not on this site.</h1>
      <Link href="/" className="mt-8 inline-block nav-link">
        Back home
      </Link>
    </main>
  );
}
