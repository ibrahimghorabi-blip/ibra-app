// lib/site-config.ts
// Single source of truth for site copy, nav, and structured content.

export type NavItem = { label: string; href: string };

export const BRAND = {
  name: "Ibra",
  subtitle: "Market & Growth Advisory",
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Products", href: "/products" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "About", href: "/about" },
];

export const ANNOUNCEMENT = {
  enabled: true,
  badge: "Announcement",
  text: "New: \"The Opportunities Engine\" Playbook is live",
  link: "/products",
};

export const HERO = {
  eyebrow: "10+ YEARS IN TECH ARCHITECTURE, SALES & STRATEGIC BD",
  headline: "We're shaping the way business is done.",
  subhead:
    "Technical structure, business development consultation, media & marketing, and branding — equipping you with the tools and data to upgrade your business.",
  primaryCta: { label: "Explore what we do", href: "/#what-we-do" },
  secondaryCta: { label: "Who we help", href: "/#who-we-help" },
};

// The card shown in the hero that promotes the diagnostic — the actual
// question flow now lives on the Opportunities page, not the homepage.
export const DIAGNOSTIC_PROMO = {
  title: "Not sure where to start?",
  blurb:
    "Tell us who you are and what you need — a couple of quick questions, then we follow up directly.",
  ctaLabel: "Start the diagnostic",
  href: "/opportunities",
};

// Used on the Opportunities page's intake form.
export const AUDIENCES = [
  "Startup",
  "Business owner restructuring",
  "Student",
  "Owner",
  "Employee",
];

export const NEEDS = [
  "Technical structure",
  "Business development",
  "Media, marketing & branding",
  "Not sure yet",
];

export const WHO_WE_HELP = [
  { title: "Startups", blurb: "Early-stage teams building the structure to move fast without breaking things." },
  { title: "Business owners restructuring", blurb: "Owners reworking a business model, offer, or operating structure." },
  { title: "Students", blurb: "Building real-world knowledge in business, tech, or strategy." },
  { title: "Owners", blurb: "We help owners achieve their strategies more efficiently, with exposure to a wide variety of opportunities." },
  { title: "Employees", blurb: "We help employees equip with the right tools to expand their pipeline and strategies to achieve results at work." },
];

export type ProgramItem = {
  pillar: "technical" | "bizdev" | "marketing";
  title: string;
  overview: string;
  deliverables: string[];
  duration: string;
};

export const PILLARS = [
  {
    key: "technical" as const,
    title: "Technical Structure",
    blurb: "The systems, stack, and workflows a business runs on — set up right.",
  },
  {
    key: "bizdev" as const,
    title: "Business Development Consultation",
    blurb: "Go-to-market and partnership work — from a full accelerator track to a single advisory session.",
  },
  {
    key: "marketing" as const,
    title: "Media, Marketing & Branding",
    blurb: "Content, channels, campaign foundations, and brand identity — the story and the look that carries it.",
  },
];

// One slot per pillar for now — add more entries to PROGRAMS (same pillar
// key) once each service area is ready to offer multiple formats.
export const PROGRAMS: ProgramItem[] = [
  {
    pillar: "technical",
    title: "Technical Structure",
    overview: "A working session to assess and plan the technical foundation a business runs on.",
    deliverables: ["Stack & systems review", "Workflow recommendations", "Implementation roadmap"],
    duration: "Scoped per engagement",
  },
  {
    pillar: "bizdev",
    title: "Business Development Consultation",
    overview: "A direct session on a specific business development, partnership, or go-to-market question.",
    deliverables: ["Working session", "Written action plan"],
    duration: "Scoped per engagement",
  },
  {
    pillar: "marketing",
    title: "Media, Marketing & Branding",
    overview: "A session covering marketing strategy, channel planning, or brand positioning and identity.",
    deliverables: ["Working session", "Direction & recommendation summary"],
    duration: "Scoped per engagement",
  },
];

export type Product = { id: string; name: string; cat: string; desc: string; price: number };

// Trimmed to a single item for now — add more back here as the catalog grows.
export const PRODUCTS: Product[] = [
  {
    id: "wk1",
    name: "Wellness Kit",
    cat: "Wellness",
    desc: "A structured kit for staying focused and steady while building or restructuring a business.",
    price: 99,
  },
];

// Not currently linked from navigation — kept for a future dedicated page
// or a Products feature.
export const BOOK = {
  id: "book",
  title: "The Opportunities Engine",
  subtitle:
    "The playbook translating 10+ years of tech and commercial deal-making into step-by-step frameworks.",
  description:
    "Not theory — a working system for finding, evaluating, and acting on the opportunities already in front of a business, built from real deals across tech, sales, and strategic BD.",
  highlights: [
    "Real case teardowns",
    "Tactical execution blueprints",
    "Direct entry points to advisory sprints",
  ],
  ctaPrimary: { label: "Download Free Preview", href: "/products" },
  ctaSecondary: { label: "Request Full Copy", href: "/opportunities" },
};

export function fmt(n: number) {
  return "AED " + n.toLocaleString();
}
