import type { ServiceAccent } from "./constants";

// ─────────────────────────── Service catalog content ───────────────────────────

export type ServicePackage = {
  name: string;
  priceLabel: string;
  for: string;
  includes: string[];
  popular: boolean;
};

export type ServiceContent = {
  slug: string;
  name: string;
  icon: string;
  accent: ServiceAccent;
  short: string;
  tagline: string;
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  intro: string[];
  features: string[];
  packages: ServicePackage[];
  deliverables: { title: string; items: string[] }[];
  process: { step: string; title: string; desc: string; duration: string }[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  riskNote: string;
};

// ─────────────────────────── Database row types ───────────────────────────

export type DomainStatus = "available" | "reserved" | "sold";

export type AgedDomain = {
  id: string;
  domain: string;
  tld: string;
  da: number;
  pa: number;
  dr: number;
  ur: number;
  tf: number;
  cf: number;
  age_years: number;
  referring_domains: number;
  backlinks: number;
  spam_score: number;
  niche: string;
  language: string;
  price_idr: number;
  status: DomainStatus;
  highlight: string | null;
  created_at: string;
};

export type Role = "client" | "admin";

export type Profile = {
  id: string;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  whatsapp: string | null;
  telegram: string | null;
  role: Role;
  created_at: string;
};

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "in_progress"
  | "review"
  | "completed"
  | "cancelled";

export type Order = {
  id: string;
  user_id: string;
  order_number: string;
  status: OrderStatus;
  total_idr: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type OrderItem = {
  id: string;
  order_id: string;
  service_slug: string;
  service_name: string;
  package_tier: string | null;
  qty: number;
  unit_price_idr: number;
  meta: Record<string, unknown> | null;
  aged_domain_id: string | null;
};

export type Project = {
  id: string;
  order_id: string | null;
  user_id: string;
  title: string;
  service_slug: string;
  status: OrderStatus;
  progress_pct: number;
  eta: string | null;
  created_at: string;
  updated_at: string;
};

export type ProjectMilestone = {
  id: string;
  project_id: string;
  title: string;
  body: string | null;
  done: boolean;
  position: number;
  created_at: string;
};

export type OrderWithItems = Order & { order_items: OrderItem[] };
export type ProjectWithMilestones = Project & {
  project_milestones: ProjectMilestone[];
};

// ─────────────────────────── Cart (client-side) ───────────────────────────

export type CartItem = {
  key: string;
  service_slug: string;
  service_name: string;
  package_tier?: string;
  qty: number;
  unit_price_idr: number;
  meta?: Record<string, unknown>;
  aged_domain_id?: string;
  label?: string; // human label, e.g. domain name or package
};

// ─────────────────────────── Social proof ───────────────────────────

export type Testimonial = {
  name: string;
  role: string;
  industry: string;
  quote: string;
  rating: number;
  service: string;
};

export type SocialProofEvent = {
  name: string;
  city: string;
  action: string;
  timeAgo: string;
};
