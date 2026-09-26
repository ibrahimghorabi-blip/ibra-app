"use client";

import { useState } from "react";

export default function InquiryModal({
  programTitle,
  onClose,
}: {
  programTitle: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    // TODO: wire to a real endpoint (email service or database) once ready
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-[420px] rounded-md bg-surface p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="text-xs text-ink-soft">Request scope</div>
            <h2 className="font-display text-lg">{programTitle}</h2>
          </div>
          <button onClick={onClose} aria-label="Close">✕</button>
        </div>

        {sent ? (
          <div className="rounded border border-line bg-bg p-4 text-sm">
            Thanks — this is a demo form, but this is where the inquiry would
            be sent. We&rsquo;ll follow up by email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label className="mt-2 text-xs font-semibold text-ink-soft">Name</label>
            <input
              className="rounded border border-line bg-bg px-3 py-2.5 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="mt-2 text-xs font-semibold text-ink-soft">Email</label>
            <input
              type="email"
              className="rounded border border-line bg-bg px-3 py-2.5 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="mt-2 text-xs font-semibold text-ink-soft">
              What are you looking to scope?
            </label>
            <textarea
              className="min-h-[90px] rounded border border-line bg-bg px-3 py-2.5 text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 rounded bg-pine-deep px-5 py-2.5 text-sm font-semibold text-[#F4F2EA]"
            >
              Send inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
