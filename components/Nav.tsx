"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, NAV } from "@/lib/site-config";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-[22px] font-semibold">{BRAND.name}</span>
          <small className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft">
            {BRAND.subtitle}
          </small>
        </Link>
        <nav className="hidden gap-5 text-sm text-ink-soft md:flex">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                pathname === l.href
                  ? "border-b-2 border-brass font-semibold text-ink"
                  : "hover:text-ink"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex gap-2 overflow-x-auto px-5 pb-3 md:hidden">
        {NAV.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={
              "whitespace-nowrap rounded-full border px-3 py-1.5 text-[13px] " +
              (pathname === l.href
                ? "border-brass font-semibold text-ink"
                : "border-line text-ink-soft")
            }
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
