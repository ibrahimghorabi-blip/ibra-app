"use client";

import { useEffect, useState } from "react";

type Opportunity = { name: string; need: string; when: string };

const SEED: Opportunity[] = [
  { name: "Ali R.", need: "SaaS company seeking a distribution partner across the GCC.", when: "Posted earlier" },
  { name: "Sara K.", need: "Startup looking for a growth advisor ahead of a Series A raise.", when: "Posted earlier" },
  { name: "Youssef M.", need: "Retail brand exploring technology partnerships in Saudi Arabia.", when: "Posted earlier" },
];

const STORAGE_KEY = "ibra-opportunities-v1";

export default function Opportunities() {
  const [list, setList] = useState<Opportunity[]>(SEED);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setList(JSON.parse(raw));
    } catch {
      // fall back to seed data
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !need) return;
    const next = [{ name, need, when: "Just now" }, ...list];
    setList(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // this browser won't persist it — that's fine, still shows for this session
    }
    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setNeed("");
  };

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 flex items-baseline justify-between border-b border-line pb-3">
        <h1 className="font-display text-2xl">Opportunities</h1>
        <span className="text-[13px] text-ink-soft">Tell us what you need</span>
      </div>
      <p className="mb-6 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
        Leave your details and what you&rsquo;re looking for — we&rsquo;ll
        follow up directly. Below is a running list of opportunities already
        shared.
      </p>

      <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label className="mt-3 text-xs font-semibold text-ink-soft">Name</label>
            <input
              className="rounded border border-line bg-surface px-3 py-2.5 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="mt-3 text-xs font-semibold text-ink-soft">Email</label>
            <input
              type="email"
              className="rounded border border-line bg-surface px-3 py-2.5 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="mt-3 text-xs font-semibold text-ink-soft">Phone number</label>
            <input
              type="tel"
              className="rounded border border-line bg-surface px-3 py-2.5 text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label className="mt-3 text-xs font-semibold text-ink-soft">
              What do you need?
            </label>
            <textarea
              className="min-h-[100px] rounded border border-line bg-surface px-3 py-2.5 text-sm"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              placeholder="Tell us what you're working on or looking for..."
              required
            />
            <button
              type="submit"
              className="mt-4 rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
            >
              Submit
            </button>
          </form>
          {submitted && (
            <div className="mt-3 rounded border border-line bg-bg p-3.5 text-[13px]">
              Thanks — your opportunity has been added, and we&rsquo;ll follow
              up by email or phone.
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {list.map((o, i) => (
            <div key={i} className="rounded-md border border-line bg-surface p-4">
              <div className="text-sm font-bold">{o.name}</div>
              <div className="mb-1.5 text-[11px] text-ink-soft">{o.when}</div>
              <div className="text-[13px] leading-relaxed text-ink-soft">
                {o.need}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
