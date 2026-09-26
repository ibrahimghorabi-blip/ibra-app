export default function About() {
  const tags = [
    "Technical structure",
    "Business development",
    "Media & marketing",
    "Branding",
    "Strategic sourcing",
  ];

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 border-b border-line pb-3">
        <h1 className="font-display text-2xl">About</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex aspect-square items-center justify-center rounded-md bg-gradient-to-br from-pine to-pine-deep">
          <span className="font-display text-5xl text-[#F4F2EA]">I</span>
        </div>
        <div>
          <p className="mb-3.5 text-[15px] leading-relaxed text-ink-soft">
            <em>We&rsquo;re shaping the way business is done.</em> Ten years
            spent inside deal rooms, sales floors, and market launches
            across tech, sales, and strategic business development taught
            us the same lesson from every angle: most businesses
            aren&rsquo;t short on ambition, they&rsquo;re short on
            structure.
          </p>
          <p className="mb-3.5 text-[15px] leading-relaxed text-ink-soft">
            That's what this is built around — the technical foundation, the
            partnerships, the story, and the brand a business needs to move
            from idea to execution. The work spans the GCC, EMEA, Europe,
            and China, and draws on experience across fitness, mobile,
            apparel, sourcing, and marketing — different industries, the
            same underlying patterns.
          </p>
          <p className="mb-3.5 text-[15px] leading-relaxed text-ink-soft">
            We work in Arabic and English, with intermediate Spanish.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
