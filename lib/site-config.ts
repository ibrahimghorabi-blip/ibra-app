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
  badge: "Now Live",
  text: "The Opportunities Engine Playbook — Download Chapter 1",
  linkLabel: "Read Free →",
  link: "/products#book",
};

export const HERO = {
  eyebrow: "10+ YEARS IN TECH ARCHITECTURE, ENTERPRISE SALES & STRATEGIC BD",
  headline: "We build the technical systems and close the commercial deals that scale ventures.",
  subhead:
    "Bridging the gap between scalable software architecture and high-ticket enterprise revenue. We engineer platforms that scale, and build the commercial pipelines that fund them.",
  primaryCta: { label: "Explore what we do", href: "/#what-we-do" },
  secondaryCta: { label: "Who we help", href: "/#who-we-help" },
};

export const TRUST_METRICS = [
  { value: "10+ Years", label: "Enterprise Architecture" },
  { value: "End-to-End", label: "Commercial Sales Execution" },
  { value: "Bespoke", label: "Venture Growth & Restructuring" },
];

// The hero's assessment card — segments are decorative selectors that
// preselect an answer on the real, full diagnostic (which lives on the
// Opportunities page as a slide-by-slide flow).
export const VENTURE_ASSESSMENT = {
  title: "Venture Assessment",
  blurb: "60 seconds to the right starting point.",
  segments: ["Startup", "Restructure", "Growth"],
  ctaLabel: "Run 60-Second Diagnostic",
  href: "/opportunities",
};

// Used on the Opportunities page's slide-by-slide intake form.
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
  {
    title: "Startups",
    blurb: "Early-stage teams building the structure to move fast without breaking things.",
    bottleneck: "Bottleneck: no technical or commercial foundation yet",
    href: "/opportunities",
  },
  {
    title: "Business owners restructuring",
    blurb: "Owners reworking a business model, offer, or operating structure.",
    bottleneck: "Bottleneck: the current model has stopped scaling",
    href: "/opportunities",
  },
  {
    title: "Students",
    blurb: "Building real-world knowledge in business, tech, or strategy.",
    bottleneck: "Bottleneck: theory without applied practice",
    href: "/opportunities",
  },
  {
    title: "Owners",
    blurb: "We help owners achieve their strategies more efficiently, with exposure to a wide variety of opportunities.",
    bottleneck: "Bottleneck: limited pipeline of the right opportunities",
    href: "/opportunities",
  },
  {
    title: "Employees",
    blurb: "We help employees equip with the right tools to expand their pipeline and strategies to achieve results at work.",
    bottleneck: "Bottleneck: results depend on tools they don't have yet",
    href: "/opportunities",
  },
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

// One slot per pillar for now — add more entries (same pillar key) once
// each service area is ready to offer multiple formats.
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

export const BOOK = {
  id: "book",
  eyebrow: "The Book",
  headline: "The Playbook Behind the Engine.",
  title: "The Opportunities Engine",
  description:
    "The direct translation of 10+ years of real-world deal-making and system architecture into repeatable execution frameworks — not theory, a working system for finding, evaluating, and acting on the opportunities already in front of a business.",
  highlights: [
    "Real case teardowns",
    "Tactical execution blueprints",
    "Direct entry points to advisory sprints",
  ],
  ctaPrimary: { label: "Download Free Chapter 1", href: "/chapter-1.pdf" },
  ctaSecondary: { label: "Explore Venture Sprints", href: "/programs" },
};

// Admin-curated announcements only — NOT populated by visitor form
// submissions. Add/edit entries here directly to post something new.
export type Announcement = { title: string; body: string; tag: string; when: string };

export const OPPORTUNITY_ANNOUNCEMENTS: Announcement[] = [
  {
    tag: "Hiring",
    title: "Remote — Sales Consultant",
    body: "Competitive package. Apply by sending your CV to: example@example.com.",
    when: "Posted by us",
  },
];

export function fmt(n: number) {
  return "AED " + n.toLocaleString();
}
