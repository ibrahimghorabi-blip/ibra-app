"use client";

import { useState } from "react";
import { ANNOUNCEMENT } from "@/lib/site-config";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (!ANNOUNCEMENT.enabled || dismissed) return null;

  return (
    <div className="flex items-center justify-center gap-3 bg-pine-deep px-4 py-2 text-center text-[13px] text-[#F4F2EA]">
      <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
        {ANNOUNCEMENT.badge}
      </span>
      <a href={ANNOUNCEMENT.link} className="underline underline-offset-2">
        {ANNOUNCEMENT.text}
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="ml-2 opacity-70 hover:opacity-100"
      >
        ✕
      </button>
    </div>
  );
}
