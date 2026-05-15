import type { CaseStudy } from "./portfolio";

export type CaseStudyEn = Partial<
  Pick<CaseStudy, "title" | "summary" | "challenge" | "approach" | "industry" | "location" | "duration" | "client">
> & {
  results?: { metric?: string; note?: string }[];
  tags?: string[];
};

export const CASE_STUDIES_EN: Record<string, CaseStudyEn> = {
  // ============================================================
  // SUHU WEBSITE (10)
  // ============================================================
  "fashion-lokal-shopify-plus": {
    title: "Shopify Plus Migration for a Local Fashion Brand",
    client: "Local Fashion Brand A",
    industry: "Fashion & Retail",
    location: "Bandung, West Java",
    duration: "10 weeks",
    summary:
      "Migration from a slow custom platform to Shopify Plus + checkout UX redesign. Conversion jumped significantly in 60 days.",
    challenge:
      "The old site was slow (LCP > 5s), the 4-step checkout caused 78% cart abandonment, and inventory was manually synced between the Bandung warehouse and dropshippers. During the 12.12 peak campaign, the server crashed 3 times.",
    approach:
      "Full migration to Shopify Plus with our custom theme, Mekari Jurnal accounting integration, and a 1-page checkout. We set up Klaviyo for email flows and Meta Conversions API for accurate attribution. Soft launch to 10% of traffic first, monitor for 2 weeks, then full rollout.",
    results: [
      { metric: "Conversion rate", note: "1.4% → 3.95%" },
      { metric: "Cart abandonment", note: "78% → 43%" },
      { metric: "LCP page speed", note: "from 5.2s" },
      { metric: "Q4 revenue", note: "YoY" },
    ],
    tags: ["Shopify Plus", "E-commerce", "Migration", "Checkout UX"],
  },
  "law-firm-company-profile": {
    title: "Premium Company Profile for a Boutique Law Firm",
    client: "Law Firm in SCBD",
    industry: "Legal Services",
    location: "South Jakarta",
    duration: "6 weeks",
    summary:
      "Corporate website with a serious-yet-modern tone. Targeting C-level clients in corporate and M&A sectors.",
    challenge:
      "The old WordPress template made the firm feel smaller than it is — its senior partners are ex-Big Four. Junior lawyers had no personal brand profiles, and publications/insights weren't indexed by Google at all.",
    approach:
      "Custom Next.js build with subtle micro-interactions, partner profile system with LinkedIn publication auto-sync, and an SEO-optimized insights blog. Vercel hosting + Cloudflare CDN for <1s loading across Indonesia.",
    results: [
      { metric: "Inbound inquiries", note: "form contact + email" },
      { metric: "Time on site", note: "from 47 seconds" },
      { metric: "Organic traffic", note: "6 months" },
      { metric: "Domain Authority", note: "from DA 4" },
    ],
    tags: ["Next.js", "Corporate", "B2B", "Legal"],
  },
  "marketplace-umkm-jateng": {
    title: "Regional SME Marketplace for Central Java",
    client: "SME Association (Provincial PMO)",
    industry: "Government / SME",
    location: "Semarang, Central Java",
    duration: "16 weeks",
    summary:
      "Multi-vendor marketplace for 800+ regional SMEs. Local payment integration + COD-friendly shipping.",
    challenge:
      "The provincial government needed a marketplace to push local SME products, most of which weren't digitally literate. Constraints: tight budget, non-tech-savvy vendors (many without bank accounts), and complex inter-regional shipping.",
    approach:
      "Built a custom marketplace on Next.js + Strapi headless CMS. WhatsApp form vendor onboarding, payments via Xendit + COD through local couriers, and offline training in 12 cities. AI image classifier for moderating off-brand product content.",
    results: [
      { metric: "Vendors onboarded", note: "initial target 500" },
      { metric: "Month-6 GMV", note: "from zero" },
      { metric: "Order completion", note: "COD-friendly flow" },
      { metric: "Avg vendor income", note: "vs offline only" },
    ],
    tags: ["Marketplace", "Multi-vendor", "SME", "Government"],
  },
  "landing-launch-skincare": {
    title: "Product Launch Landing Page for a Skincare Brand",
    client: "D2C Skincare Brand B",
    industry: "Beauty & Wellness",
    location: "Jakarta",
    duration: "3 weeks",
    summary:
      "Launch landing page with 4-variant A/B test. One variant converted at 6.2%.",
    challenge:
      "Launching a new serum with Rp 350M ads budget over 2 weeks. The old landing page (on Tokopedia) wasn't converting because it felt too generic, and the founder wanted to test which value prop resonated most.",
    approach:
      "Built 4 landing page variants with different headlines + visuals + offers. AB test via Vercel Edge Config (no flicker), event tracking to GA4 + Meta. Creative team produced 16 ad creatives (4 per variant) for fair test. Weekly iteration with compounding winners.",
    results: [
      { metric: "Best variant CVR", note: "vs benchmark 1.8%" },
      { metric: "Average CPL", note: "target Rp 35,000" },
      { metric: "Week 2 ROAS", note: "scaled from 1.9x" },
      { metric: "Sold out in", note: "stock 5,000 units" },
    ],
    tags: ["Landing Page", "A/B Testing", "Launch", "CRO"],
  },
  "travel-custom-web-app": {
    title: "Custom Web App for Tour Package Operator",
    client: "Tour Operator in Bali",
    industry: "Travel & Tourism",
    location: "Denpasar, Bali",
    duration: "14 weeks",
    summary:
      "Custom web app to manage tour packages + bookings + reseller agents. Replaces 3 tools (Excel + WhatsApp + Trello).",
    challenge:
      "Tour operator with 40+ packages and 120+ reseller agents managed bookings via WhatsApp + Excel. Frequent double bookings, outdated reseller pricing, and monthly financial reporting that took 4 working days.",
    approach:
      "Custom Next.js + PostgreSQL with modules: package builder, dynamic pricing per agent tier, real-time booking engine, reseller dashboard, and auto-invoicing. WhatsApp Business API integration for automatic booking notifications. Two years of historical Excel data migrated.",
    results: [
      { metric: "Booking processing time", note: "from 35 minutes" },
      { metric: "Double-booking incidents", note: "in 6 months" },
      { metric: "Active reseller agents", note: "168 → 265 agents" },
      { metric: "Financial close time", note: "from 4 days" },
    ],
    tags: ["Web App", "Custom", "Travel", "B2B"],
  },
  "klinik-portal-multi-cabang": {
    title: "Patient Portal & Booking for Multi-Branch Clinic",
    client: "Aesthetic Clinic Chain (7 branches)",
    industry: "Clinics & Healthcare",
    location: "Jakarta, Tangerang, Bekasi",
    duration: "12 weeks",
    summary:
      "Patient portal with online booking, treatment history, and ePrescription integrated with the existing clinic system.",
    challenge:
      "7 branches with different doctor capacity + slots. Patients often arrived at full branches or when their doctor wasn't available. Admin teams spent 6+ hours/day rescheduling via WhatsApp.",
    approach:
      "Next.js portal frontend + REST API integration to the existing clinic SIM (HSIS). Real-time booking with 5-minute slot lock, Xendit payment for deposits, and automatic SMS + WhatsApp reminders D-1. Digital queue system with tablet displays at branches.",
    results: [
      { metric: "Online bookings", note: "of total appointments" },
      { metric: "No-show rate", note: "11% → 5.3%" },
      { metric: "Admin time saved", note: "per branch" },
      { metric: "Patient satisfaction", note: "post-treatment survey" },
    ],
    tags: ["Portal", "Healthcare", "Integration", "Multi-location"],
  },
  "developer-properti-mega-project": {
    title: "Mega Project Hub Site for a Property Developer",
    client: "Township Developer in Tangerang",
    industry: "Property",
    location: "Tangerang, Banten",
    duration: "20 weeks",
    summary:
      "Master web hub for a 200ha township with 8 clusters. Interactive floor plans, 360 virtual tours, and lead routing to 80+ marketing agents.",
    challenge:
      "A large township project with multiple phases + clusters. Lead forms weren't properly routed (many picked up by agents who'd resigned), floor plans were still PDF downloads, and virtual tours used an external vendor that wasn't integrated.",
    approach:
      "Main hub + sub-sites per cluster on Next.js, 3D floor plan integration with three.js, Matterport virtual tour embed with tracking, and lead routing system based on territory + agent performance (weighted round-robin). Real-time dashboard for marketing managers.",
    results: [
      { metric: "Qualified leads/month", note: "vs old site" },
      { metric: "Avg session duration", note: "interactive content" },
      { metric: "Booking fee conversion", note: "from leads" },
      { metric: "Agent response time", note: "lead routing" },
    ],
    tags: ["Real Estate", "3D Tour", "Lead Routing", "Multi-site"],
  },
  "lms-edutech-bilingual": {
    title: "Bilingual LMS for B2C EdTech",
    client: "English-for-Professionals EdTech",
    industry: "Education",
    location: "Jakarta",
    duration: "18 weeks",
    summary:
      "Custom Learning Management System for 12,000+ active students. HLS video streaming, Zoom-integrated live classes, and XP gamification.",
    challenge:
      "EdTech grew fast but Teachable limited customization and per-student cost was high. 38% drop-off in live classes due to poor live class UX, and student progress tracking was fragmented.",
    approach:
      "Custom Next.js LMS + Mux video streaming for on-demand, Zoom SDK for embedded live classes, and XP + badge gamification. LMS-to-CRM integration with HubSpot for customer success follow-up. Mobile responsive with offline download feature.",
    results: [
      { metric: "Cost per active user", note: "vs Teachable" },
      { metric: "Live class attendance", note: "62% → 89%" },
      { metric: "Course completion", note: "gamification effect" },
      { metric: "Refund rate", note: "improved UX" },
    ],
    tags: ["LMS", "EdTech", "Video", "Live Class"],
  },
  "booking-restoran-fine-dining": {
    title: "Booking System for Fine Dining Chain",
    client: "Fine Dining Chain (4 outlets)",
    industry: "Restaurants & F&B",
    location: "Jakarta & Bali",
    duration: "8 weeks",
    summary:
      "Premium booking system with waitlist, special requests, and loyalty member integration for a fine dining chain.",
    challenge:
      "OpenTable bookings felt too generic + high commission. VIP customers weren't recognized, special requests (allergies, occasions) often got missed, and waitlist management was still manual via WhatsApp.",
    approach:
      "Custom booking system with VIP member tier recognition, slot reservations with deposit, intelligent waitlist (auto-fills cancellations), and POS integration to track repeat customers + menu preferences. Concierge tablet UI for hosts.",
    results: [
      { metric: "Direct bookings", note: "off OpenTable" },
      { metric: "Booking commission saved", note: "OpenTable fees" },
      { metric: "VIP repeat rate", note: "personalization" },
      { metric: "No-show rate", note: "industry avg 18%" },
    ],
    tags: ["Restaurant", "Booking", "Loyalty", "Premium"],
  },
  "saas-multitenant-frontend": {
    title: "Multi-tenant Frontend for HR Tech SaaS",
    client: "Series A HR SaaS Startup",
    industry: "B2B SaaS",
    location: "Jakarta",
    duration: "22 weeks",
    summary:
      "Built a multi-tenant frontend for HR SaaS serving 180+ enterprise clients. Subdomain per tenant + custom branding.",
    challenge:
      "HR SaaS startup scaling from 12 to 180+ enterprise clients. Old frontend (React class components) wasn't scalable, performance lagged for companies with 5,000+ employees, and new tenant setup took 2 manual days.",
    approach:
      "Rewrote to Next.js App Router with multi-tenant architecture: dynamic subdomain routing, per-tenant theming via CSS variables, and automated onboarding wizard. Dashboard with TanStack Table to handle 10k+ rows via virtualization. Full team handover + documentation.",
    results: [
      { metric: "Tenant setup time", note: "from 2 days" },
      { metric: "P95 page load", note: "from 4.8s" },
      { metric: "Customer churn", note: "post-rewrite Q4" },
      { metric: "Eng team velocity", note: "features shipped/sprint" },
    ],
    tags: ["SaaS", "Multi-tenant", "B2B", "Performance"],
  },

  // ============================================================
  // SUHU APP (10)
  // ============================================================
  "beauty-booking-pwa": {
    title: "Salon Booking PWA for Beauty Chain",
    client: "Premium Salon (12 outlets)",
    industry: "Beauty & Wellness",
    location: "Jabodetabek + Bandung",
    duration: "10 weeks",
    summary:
      "Salon booking PWA with smart slot recommendations + stylist preference. 38% install rate without an App Store.",
    challenge:
      "Customers complained the salon's native app was rarely used due to low install rates. Bookings were still dominated by IG DMs, with frequent miscommunication around favorite stylists and chaotic rescheduling.",
    approach:
      "Built a fast-install PWA (<3s) with Add to Home Screen prompts, smart slot recommendations based on customer history, and stylist preference matching. Push notifications for reminders + promos. Synced to existing POS for member tiers.",
    results: [
      { metric: "Install rate", note: "PWA vs 4% native app" },
      { metric: "App-based bookings", note: "from 12%" },
      { metric: "Repeat bookings", note: "personalization" },
      { metric: "Dev cost saved", note: "vs dual-platform native" },
    ],
    tags: ["PWA", "Booking", "Beauty", "Mobile"],
  },
  "gym-member-app": {
    title: "Member App for Premium Gym Chain",
    client: "Premium Fitness Chain",
    industry: "Health & Fitness",
    location: "Jakarta",
    duration: "14 weeks",
    summary:
      "Member app for premium gym with class booking, personal trainer matching, and progress tracking integrated with smart equipment.",
    challenge:
      "Premium gym with Rp 2.5M/month membership saw engagement drop drastically by month 3 post-onboarding. Prime-time classes were always full, members had no progress visibility, and trainer matching was still manual via WhatsApp.",
    approach:
      "React Native app with modules: class booking (waitlist + favorite trainers), progress dashboard synced with Technogym smart equipment, body composition tracking via photo, and in-app trainer-member messaging. Streak + badge gamification for engagement.",
    results: [
      { metric: "Monthly active users", note: "from 47%" },
      { metric: "12-month retention", note: "engagement effect" },
      { metric: "PT sessions booked", note: "easier matching" },
      { metric: "App Store rating", note: "1,200+ reviews" },
    ],
    tags: ["React Native", "Fitness", "Member", "Gamification"],
  },
  "on-demand-cleaning": {
    title: "On-Demand Cleaning Service App",
    client: "Cleaning Service Startup",
    industry: "Service Marketplace",
    location: "Jabodetabek",
    duration: "18 weeks",
    summary:
      "Marketplace app for home/office cleaning services. Customer app + cleaner app + admin dashboard. 6 months: 2,300+ bookings.",
    challenge:
      "Founder had 60+ cleaners across Jabodetabek but dispatched via WhatsApp groups. Customers couldn't track which cleaner was coming, often complained about skill mismatch, and there was no rating system.",
    approach:
      "Built 3 apps: customer (booking + tracking), cleaner (job board + earnings), admin (dispatch + disputes). Cleaner profiles with certification badges, real-time geolocation during cleaning, and rating + reward system. Payment escrow via Xendit.",
    results: [
      { metric: "Month-6 bookings", note: "from zero" },
      { metric: "Active cleaners", note: "from 60" },
      { metric: "Avg response time", note: "booking → accept" },
      { metric: "Dispute rate", note: "industry 6-8%" },
    ],
    tags: ["Marketplace", "On-demand", "Geolocation", "Service"],
  },
  "agritech-b2b-marketplace": {
    title: "B2B Marketplace App for Agriculture",
    client: "AgriTech Startup",
    industry: "Agritech",
    location: "East Java",
    duration: "20 weeks",
    summary:
      "B2B marketplace app connecting vegetable farmers with restaurants/hotels/supermarkets. Pre-order harvest, integrated logistics, B2B payment terms.",
    challenge:
      "Malang vegetable farmers often wasted harvests because market demand didn't match. Hotels/restaurants bought via middlemen at 3-5x markup. Founder wanted to cut middlemen but needed a B2B-aware system (NPWP, tax invoice, payment terms).",
    approach:
      "React Native app + admin web dashboard. Features: pre-order 30 days ahead, integrated logistics partner (Anteraja Cold Chain), automatic tax-invoice generation, and Net 14/30 payment terms. Farmer verification via cooperative endorsement.",
    results: [
      { metric: "Farmers onboarded", note: "Greater Malang" },
      { metric: "Active B2B buyers", note: "East Java + Bali" },
      { metric: "Month-12 GMV", note: "ramp up" },
      { metric: "Farmer margin", note: "vs middleman sale" },
    ],
    tags: ["Agritech", "B2B Marketplace", "Logistics", "Social Impact"],
  },
  "kids-elearning-app": {
    title: "E-learning App for Kids Ages 4-10",
    client: "Premium Kids EdTech",
    industry: "Children's Education",
    location: "Jakarta",
    duration: "16 weeks",
    summary:
      "E-learning app for kids 4-10 with gamification, parent dashboard, and offline mode. B2C subscription model.",
    challenge:
      "Ex-educator founder built great curriculum but parents complained kids got bored by session 3. Kids only focus 8-10 minutes, parents couldn't track daily progress, and offline learning wasn't available (many families travel).",
    approach:
      "Native iOS + Android with Unity for game-based learning modules. Virtual coin + collectible character rewards, 5-8 minute mini-games per topic, and weekly parent dashboard to email + WhatsApp. Offline lesson download for 7 days.",
    results: [
      { metric: "Daily active session", note: "kid average" },
      { metric: "6-month retention", note: "industry 35-45%" },
      { metric: "Parent NPS", note: "Jan-Apr 2025" },
      { metric: "App Store rating", note: "Top 10 Kids Edu ID" },
    ],
    tags: ["Kids", "EdTech", "Gamification", "iOS + Android"],
  },
  "fnb-loyalty-app": {
    title: "Loyalty App for F&B Coffee Chain",
    client: "Coffee Chain (48 outlets)",
    industry: "Restaurants & F&B",
    location: "Indonesia (10 cities)",
    duration: "12 weeks",
    summary:
      "Loyalty + mobile ordering app for coffee chain. Member points, pre-order pickup, and referrals. 6 months: 380k downloads.",
    challenge:
      "Coffee chain with 48 outlets had customer data scattered across per-outlet POSes. Repeat customers weren't recognized across branches, flyer promos were expensive + unmeasurable, and peak-hour queues caused lost sales.",
    approach:
      "React Native app: pre-order + pickup (skip queue), member tiers (Bronze-Gold-Diamond), point redemption, referrals with dynamic links, and personalized campaign feed. Integrated with Mokapos POS for unified customer profiles.",
    results: [
      { metric: "6-month downloads", note: "organic + ads" },
      { metric: "Pre-order conversion", note: "peak hour" },
      { metric: "Member repeat rate", note: "vs 1.7x non-members" },
      { metric: "Promo ROI", note: "vs offline flyers" },
    ],
    tags: ["Loyalty", "F&B", "Mobile Order", "POS Integration"],
  },
  "telemedicine-consultation": {
    title: "Telemedicine App for Clinic Network",
    client: "Clinic Network (35 outlets)",
    industry: "Clinics & Healthcare",
    location: "Indonesia (15 cities)",
    duration: "22 weeks",
    summary:
      "Telemedicine app with video consultation, e-prescription, and home lab test booking. Permenkes 24/2022 compliant.",
    challenge:
      "Post-COVID clinic network wanted to expand telemedicine but was using a third-party vendor with 25% revenue share. Doctors complained about poor vendor UX, prescriptions were manually scanned, and there was no lab partner integration.",
    approach:
      "Native app (iOS + Android) with WebRTC video calls, Permenkes-compliant digital-signature e-prescriptions, integration with 3 major lab partners for home lab tests, and digital insurance payment (admedika). Hapi.js + PostgreSQL on-prem backend (PDP Law compliance).",
    results: [
      { metric: "Monthly consultations", note: "from 1,200 on old vendor" },
      { metric: "Cost per consult", note: "vs old vendor" },
      { metric: "Doctor NPS", note: "UX improvement" },
      { metric: "Lab test attach rate", note: "from consultations" },
    ],
    tags: ["Telemedicine", "Healthcare", "WebRTC", "Compliance"],
  },
  "agent-properti-app": {
    title: "Marketing Agent App for Property Developer",
    client: "Tier-1 Property Developer",
    industry: "Property",
    location: "Jakarta + Tangerang",
    duration: "10 weeks",
    summary:
      "Dedicated app for marketing agents to access catalog, generate brochures, and submit bookings. Replaced 1,200+ Google Drive folders.",
    challenge:
      "Developer had 1,200+ marketing agents accessing inventory + brochures via Google Drive. Files were outdated, senior agents got info faster than juniors, and booking submission was still WhatsApp-to-project-leader.",
    approach:
      "React Native agent-only app (invite-code access). Features: catalog with filters (cluster, type, price, status), personalized PDF brochure generation (agent photo + contact), booking submission with auto-routing to PL, and real-time commission tracker.",
    results: [
      { metric: "Agent adoption", note: "1,130 of 1,200" },
      { metric: "Booking submission time", note: "from 25 min via WhatsApp" },
      { metric: "Brochure printing saved", note: "vs printing costs" },
      { metric: "Booking-to-deal time", note: "lead routing" },
    ],
    tags: ["Real Estate", "Sales Tool", "B2B", "PDF Generation"],
  },
  "driver-logistics-app": {
    title: "Driver App for B2B Last-Mile Logistics",
    client: "B2B Logistics in Jabodetabek",
    industry: "Logistics",
    location: "Jabodetabek",
    duration: "16 weeks",
    summary:
      "Driver app for logistics company with route optimization, digital proof of delivery, and COD reconciliation.",
    challenge:
      "Logistics company with 280 drivers managed B2B deliveries (consumer goods to retail) via WhatsApp + paper manifests. Drivers planned their own routes (inefficient), proof of delivery photos went via WhatsApp to admin (4 hours/day of admin work), and COD reconciliation was manual.",
    approach:
      "Flutter driver app + admin web dashboard. Google Maps API route optimization (multi-stop), digital POD (photo + signature + GPS), real-time COD tracking, and automatic weekly settlement to driver accounts. Hardware bonus: thermal printer for receipts.",
    results: [
      { metric: "Deliveries/day per driver", note: "route optimization" },
      { metric: "Admin reconciliation time", note: "from 4 hours" },
      { metric: "Lost package rate", note: "digital POD" },
      { metric: "Driver retention", note: "commission transparency" },
    ],
    tags: ["Logistics", "Driver App", "Flutter", "Route Optimization"],
  },
  "fintech-wallet-whitelabel": {
    title: "White-Label E-Wallet for Cooperative",
    client: "Corporate Employee Cooperative",
    industry: "Fintech",
    location: "Jakarta",
    duration: "24 weeks",
    summary:
      "White-label e-wallet for an employee cooperative with 8,000+ members. Payments, lending, payroll top-up, and B2B partner referrals.",
    challenge:
      "Employee cooperative with 8,000+ members managed savings & loans manually via Excel + bank transfers. Automatic payroll deduction had issues with the parent company's finance team, and younger members complained it felt like outdated banking.",
    approach:
      "Native iOS + Android e-wallet with KYC flow, balance + top-up via VA, cooperative loans with auto-deduct payroll (parent HRIS integration), and B2B partners (Alfamart, Indomaret, transport) for balance redemption. OJK savings-and-loan cooperative compliance.",
    results: [
      { metric: "6-month active users", note: "86% conversion" },
      { metric: "Balance managed", note: "from Rp 4B last year" },
      { metric: "Loan NPL", note: "vs co-op avg 4-6%" },
      { metric: "New members joined", note: "viral referrals" },
    ],
    tags: ["Fintech", "E-Wallet", "Cooperative", "OJK Compliance"],
  },

  // ============================================================
  // SUHU SOFTWARE (10)
  // ============================================================
  "pos-multi-cabang-fnb": {
    title: "Custom Multi-Branch POS for F&B Chain",
    client: "Casual Dining F&B Chain",
    industry: "Restaurants & F&B",
    location: "Jabodetabek + Surabaya",
    duration: "16 weeks",
    summary:
      "Custom multi-branch POS with KDS (Kitchen Display), real-time inventory, and owner dashboard. Replaced Moka due to feature gaps.",
    challenge:
      "F&B chain with 18 outlets used Moka POS but hit customization limits (combo, modifiers, time-based pricing), no real-time cross-outlet inventory (stock-outs at outlet A while B had excess), and reporting required manual Excel exports.",
    approach:
      "Built custom desktop POS (Electron) + KDS tablet + admin web. Menu engine with modifiers + combos + happy-hour pricing, per-outlet inventory sync with central warehouse and auto-reorder, and real-time owner dashboard (sales, food cost, labor cost, etc.).",
    results: [
      { metric: "Stock-out incidents", note: "auto-reorder" },
      { metric: "Food cost", note: "32% → 27.8%" },
      { metric: "Average order time", note: "KDS efficiency" },
      { metric: "License fee saved", note: "vs Moka" },
    ],
    tags: ["POS", "F&B", "Inventory", "Multi-outlet"],
  },
  "crm-properti-developer": {
    title: "Custom CRM for Property Developer",
    client: "Mid-scale Property Developer",
    industry: "Property",
    location: "Surabaya, East Java",
    duration: "18 weeks",
    summary:
      "Custom CRM for lead management + agents + property bookings. Replaced Excel + Trello + commission spreadsheets.",
    challenge:
      "Developer with 5 active projects managed leads in Excel, agent tasks in Trello, and commissions in spreadsheets. Expired leads went unfollowed (avg response time 38 hours), commissions were often miscalculated (lots of agent complaints), and sales-finance handoff was manual.",
    approach:
      "Custom CRM in Next.js + PostgreSQL with modules: lead pipeline (status + SLA auto-alerts), agent management + territory, booking + document flow, and automatic commission calculator with tier + over-target bonuses. WhatsApp Business integration for auto-notifications + logs.",
    results: [
      { metric: "Lead response time", note: "from 38 hours" },
      { metric: "Lead conversion", note: "fast follow-up" },
      { metric: "Commission disputes", note: "in 8 months" },
      { metric: "Sales productivity", note: "deals/agent/month" },
    ],
    tags: ["CRM", "Real Estate", "Sales", "Custom"],
  },
  "erp-klinik-jaringan": {
    title: "Clinic Network ERP (Inventory + Appointments)",
    client: "Clinic Network (22 branches)",
    industry: "Clinics & Healthcare",
    location: "Java & Bali",
    duration: "26 weeks",
    summary:
      "Clinic ERP with drug inventory, appointments, EMR, and finance modules. Compliant with Ministry of Health regulations.",
    challenge:
      "Clinic network with 22 branches used a legacy SIM (closed-source vendor) that was slow + had no API. Expired drugs (Rp 300M+/year loss) because there was no FEFO tracking, chaotic queues, and medical records weren't connected across branches.",
    approach:
      "Custom ERP in Next.js + PostgreSQL multi-tenant per branch with central sync. Modules: FEFO inventory tracking + auto-procurement, appointments with digital queue, EMR with per-specialty templates, and consolidated finance. On-premise hosting for PDP Law compliance.",
    results: [
      { metric: "Expired drug loss", note: "Rp 300M → Rp 18M" },
      { metric: "Patient queue time", note: "digital queue" },
      { metric: "Cross-branch referrals", note: "EMR connected" },
      { metric: "Finance close time", note: "from 12 days" },
    ],
    tags: ["ERP", "Healthcare", "EMR", "Compliance"],
  },
  "dashboard-finance-compliance": {
    title: "Finance Compliance Dashboard for Multifinance",
    client: "Multifinance Company",
    industry: "Finance",
    location: "Jakarta",
    duration: "14 weeks",
    summary:
      "OJK compliance dashboard for multifinance: NPF tracking, regulatory reporting, and real-time risk monitoring.",
    challenge:
      "Multifinance with Rp 1.2T portfolio needed monthly reports to OJK + Bank Indonesia. The 6-person compliance team spent full-time on macro-Excel reports. Frequent deadline misses (Rp 25M/month fines) and inconsistent data across reports.",
    approach:
      "Built dashboard with Next.js + Metabase + connector to core banking (Oracle FLEXCUBE). Auto-generated OJK reports (LBU format), NPF + COR risk dashboard, and audit trail for auditors. Role-based access control for PDP Law compliance.",
    results: [
      { metric: "Report generation", note: "from 4 days" },
      { metric: "Compliance fines", note: "12 months in a row" },
      { metric: "Compliance team redirected", note: "to risk advisory" },
      { metric: "Audit prep time", note: "auditor-ready trail" },
    ],
    tags: ["Dashboard", "Compliance", "OJK", "Finance"],
  },
  "hr-workflow-automation": {
    title: "HR Workflow Automation for Manufacturer",
    client: "Manufacturer (1,800 employees)",
    industry: "Manufacturing",
    location: "Cikarang, Bekasi",
    duration: "12 weeks",
    summary:
      "HR workflow automation: recruitment, onboarding, performance review, and separation. Replaced 7 spreadsheets + email chains.",
    challenge:
      "Tier-1 manufacturer with 1,800 employees used standard HRIS but approval workflows (leave, overtime, promotions, separations) were still email + paper. Leave approval avg 4 days, annual performance review took 6 weeks, and new hire onboarding often missed steps.",
    approach:
      "Custom workflow automation layered on existing HRIS (Talenta). Visual BPMN engine: leave (multi-level approval based on dept), overtime (auto-calculate THP), performance review with calibration meetings, and separation checklist (IT + finance + assets). Email + WhatsApp integration.",
    results: [
      { metric: "Leave approval time", note: "from 4 days" },
      { metric: "Performance review cycle", note: "from 6 weeks" },
      { metric: "Onboarding completion", note: "checklist enforced" },
      { metric: "HR ops cost", note: "less manual ops" },
    ],
    tags: ["HR", "Workflow", "Automation", "Manufacturing"],
  },
  "inventory-warehouse-otomotif": {
    title: "Automotive Spare Parts Inventory Management",
    client: "Automotive Spare Parts Distributor",
    industry: "Automotive",
    location: "Jakarta, Surabaya, Medan",
    duration: "14 weeks",
    summary:
      "Inventory + WMS for spare parts distributor with 40,000+ SKUs. Barcode scanning, picking optimization, and B2B order integration.",
    challenge:
      "Spare parts distributor with 40k+ SKUs across 3 large warehouses. Stock-takes required 2-day warehouse shutdowns (Rp 600M loss/session), 4-6% picking error rate, and B2B orders from partner workshops still came via fax + WhatsApp.",
    approach:
      "Custom WMS with Android barcode scanner, picking optimization algorithm, and cycle counting (no shutdown). B2B portal for partner workshops: online ordering, real-time stock by nearest warehouse, and delivery tracking. Integrated with existing accounting.",
    results: [
      { metric: "Stock-take downtime", note: "cycle counting" },
      { metric: "Picking error rate", note: "from 5.1%" },
      { metric: "B2B orders via portal", note: "from fax/WA" },
      { metric: "Order processing time", note: "B2B portal" },
    ],
    tags: ["WMS", "Automotive", "B2B Portal", "Barcode"],
  },
  "klinik-gigi-booking-queue": {
    title: "Booking + Queue System for Dental Clinic",
    client: "Dental Clinic Chain (8 branches)",
    industry: "Clinics & Healthcare",
    location: "Bandung, Jakarta",
    duration: "8 weeks",
    summary:
      "Booking + queue + patient recall system for dental clinic. Replaced WhatsApp booking + paper appointment books.",
    challenge:
      "Dental chain with 8 branches and 32 dentists. Bookings still came via WhatsApp to admin, patient recalls (routine 6-month check-ups) had no system (many lapsed), and queue management used pen and paper.",
    approach:
      "Patient booking web app + staff portal. Dentist slot + chair management (clinics typically use dental chairs), automated patient recall (6 months post-treatment via WA + SMS), digital queue with TV display, and dental chart EMR integration.",
    results: [
      { metric: "Active patient recall", note: "auto-WA reminders" },
      { metric: "Booking-to-show", note: "from 71%" },
      { metric: "Admin call time", note: "self-service booking" },
      { metric: "Revenue per chair/day", note: "better utilization" },
    ],
    tags: ["Healthcare", "Booking", "Queue", "Dental"],
  },
  "school-management-system": {
    title: "School Management System for Private School",
    client: "Premium Private School (6 units)",
    industry: "Education",
    location: "South Tangerang",
    duration: "22 weeks",
    summary:
      "SMS (School Management System) for a foundation running 6 schools (kindergarten through high school). Academics, tuition finance, and parent comms.",
    challenge:
      "Foundation with 6 schools used 3 different systems (kindergarten on SaaS, primary-secondary on legacy built-in, finance separate). Parent comms via 60+ WhatsApp groups. Many tuition payments missed (late) but reminders were manual.",
    approach:
      "Unified custom SMS for 6 units with: academics (report cards, attendance, schedules), finance (tuition, extracurriculars, activities + online payment), and parent app (broadcast + personal messaging). Auto-reminders D-7, D-3, D-0, D+1 + auto-pause for accounts >3 months overdue.",
    results: [
      { metric: "On-time tuition rate", note: "from 74%" },
      { metric: "Parent app DAU", note: "daily active" },
      { metric: "Admin time/school", note: "auto-reminders" },
      { metric: "Foundation cash flow", note: "improved tuition timing" },
    ],
    tags: ["Education", "SMS", "Multi-unit", "Parent App"],
  },
  "tour-package-management": {
    title: "Tour Package Management for Travel Agent",
    client: "Outbound Tour Agent",
    industry: "Travel & Tourism",
    location: "Jakarta",
    duration: "10 weeks",
    summary:
      "System to manage complex tour packages (multi-destination, fluctuating vendor costs, 200+ parallel bookings) for outbound travel.",
    challenge:
      "Outbound tour agent with Europe, Korea, Japan packages. Vendor costs (hotel, transport, guide) fluctuated, tour leaders managed rooming + manifests manually, and multi-currency margins were complex.",
    approach:
      "Web app with modules: package builder (drag-drop multi-day itinerary), multi-currency cost calculator (live rates), booking + rooming manager, tour leader app for manifests + emergency contacts, and per-tour profitability reporting.",
    results: [
      { metric: "Package quote time", note: "from 4 hours" },
      { metric: "Booking capacity", note: "same team size" },
      { metric: "Tour profitability visibility", note: "per tour" },
      { metric: "Currency loss", note: "live hedging info" },
    ],
    tags: ["Travel", "Tour Management", "Multi-currency", "B2B"],
  },
  "direct-selling-reseller": {
    title: "Direct-Selling MLM Reseller Management",
    client: "Direct-Selling Skincare",
    industry: "Direct Selling",
    location: "Jakarta",
    duration: "16 weeks",
    summary:
      "System to manage 12,000+ MLM resellers with binary tree, multi-level commissions, and reward-point e-wallet.",
    challenge:
      "Direct-selling skincare had 12,000 resellers in binary MLM structure. Old system (hosted vendor) wasn't scalable, reseller position lookups took 30+ seconds, commission calculation was slow (3 days per cycle), and any bug created massive trust damage.",
    approach:
      "Built custom MLM management system with optimized binary tree algorithm (PostgreSQL recursive CTE + caching). Commission calculator: direct, pairing, generation, and leadership bonus with audit trail. Internal e-wallet for points + rupiah withdrawal. Full audit log for compliance.",
    results: [
      { metric: "Reseller lookup time", note: "from 30 seconds" },
      { metric: "Commission calc cycle", note: "from 3 days" },
      { metric: "Commission disputes", note: "audit trail" },
      { metric: "Reseller satisfaction", note: "post-launch survey" },
    ],
    tags: ["MLM", "Direct Selling", "Binary Tree", "E-wallet"],
  },

  // ============================================================
  // SUHU SEO (10)
  // ============================================================
  "seo-developer-bsd": {
    title: "SEO for BSD Property Developer — Google Page 1 in 18 Months",
    client: "Township Developer in Tangerang",
    industry: "Property",
    location: "BSD City, Tangerang",
    duration: "18 months",
    summary:
      "Achieved Google page 1 for 47 BSD property keywords including 'rumah BSD', 'cluster BSD murah', 'apartemen BSD'.",
    challenge:
      "Developer launching a new BSD cluster but domain authority was DA 18. Competitors 99.co, Rumah123, and Pinhome dominated page 1 for 'rumah BSD'. Blog content had only 12 low-effort articles.",
    approach:
      "Full technical audit (fix Core Web Vitals, property + LocalBusiness schema, pillar-cluster internal linking). Content strategy: 1 'rumah BSD' pillar + 32 cluster articles (per cluster name). Backlink outreach to 28 property portals + regional media. Long-form 2,500+ word content.",
    results: [
      { metric: "Page 1 keywords", note: "from 3" },
      { metric: "Organic traffic", note: "18 months" },
      { metric: "Domain Authority", note: "from 18" },
      { metric: "Organic leads/month", note: "from 28" },
    ],
    tags: ["Local SEO", "Real Estate", "Content", "Long-form"],
  },
  "seo-klinik-jakarta": {
    title: "Local SEO for Jakarta Beauty Clinic",
    client: "Premium Beauty Clinic (4 branches)",
    industry: "Clinics & Healthcare",
    location: "Jakarta",
    duration: "12 months",
    summary:
      "Google Business Profile + local SEO for 4 clinic branches. Top 3 Maps results for 'klinik kecantikan [area]'.",
    challenge:
      "Premium beauty clinic relied solely on ads (Rp 250M/month) with no organic moat. The 4 branches' GBPs were default (few photos, 4.2 reviews, no posts), and large competitors (Erha, ZAP) dominated the main keywords.",
    approach:
      "Total GMB optimization (photos, weekly posts, Q&A, review management). Local content per branch with area-specific landing pages (Kemang, Senopati, Pondok Indah, Kelapa Gading). 60+ directory citations. Post-treatment review acquisition flow via WhatsApp.",
    results: [
      { metric: "Avg GBP rank", note: "from Top 8-12" },
      { metric: "GBP profile views", note: "12 months" },
      { metric: "Direction requests", note: "GBP" },
      { metric: "Organic walk-ins", note: "vs ads-only" },
    ],
    tags: ["Local SEO", "GMB", "Clinic", "Multi-location"],
  },
  "seo-travel-umroh": {
    title: "National SEO for Umroh Travel Agency",
    client: "Tier-2 Umroh Travel",
    industry: "Travel & Tourism",
    location: "Indonesia (pilgrim target)",
    duration: "14 months",
    summary:
      "National SEO for umroh travel. Reached page 1 for 'biaya umroh 2024', 'paket umroh murah', 'travel umroh terpercaya'.",
    challenge:
      "Tier-2 umroh travel (Rp 80B/year revenue) competing with established brands (NRA, Maktour). Thin content (300-500 words), no FAQ schema for featured snippets, and weak trust signals (competitors had media coverage).",
    approach:
      "Content overhaul: 'umroh 2024' pillar + 60 supporting articles (costs, requirements, FAQs, tips). FAQ schema markup for People Also Ask capture. Authority building: pilgrim video testimonials, visible Kemenag certification, and PR outreach to 12 Muslim media outlets.",
    results: [
      { metric: "Featured snippets", note: "PAA + FS" },
      { metric: "Top 3 umroh keywords", note: "high-intent" },
      { metric: "Organic bookings", note: "from conversions" },
      { metric: "CAC reduction", note: "vs ads-heavy" },
    ],
    tags: ["National SEO", "Travel", "Umroh", "FAQ Schema"],
  },
  "seo-marketplace-properti": {
    title: "Technical SEO Migration for Property Marketplace",
    client: "Indonesian Property Marketplace",
    industry: "Property",
    location: "Indonesia",
    duration: "6 months",
    summary:
      "Technical SEO for property marketplace migration with 280k URLs. Zero traffic drop, +28% organic in 90 days.",
    challenge:
      "Property marketplace with 280k active listing URLs migrating from a custom legacy CMS to Next.js. Risk: a sloppy migration could lose Rp 8B/month-equivalent SEO traffic. Competitors (Rumah123, 99.co) were more established.",
    approach:
      "Comprehensive pre-migration audit: 1:1 URL mapping, 280k 301 redirects, property listings schema, and dynamic sitemap. Internal linking strategy (PageRank flow), Core Web Vitals tuning. Soft launch to 5% traffic for validation, 2-week monitoring before full rollout.",
    results: [
      { metric: "Migration traffic drop", note: "vs 30-50% industry loss" },
      { metric: "90-day organic growth", note: "vs baseline" },
      { metric: "Indexed pages", note: "from 312k (cleanup)" },
      { metric: "Core Web Vitals pass", note: "from 41%" },
    ],
    tags: ["Technical SEO", "Migration", "Enterprise", "Marketplace"],
  },
  "seo-dealer-mobil-bekas": {
    title: "SEO for Regional Used-Car Dealer",
    client: "Multi-branch Used Car Showroom",
    industry: "Automotive",
    location: "Surabaya, Malang, Jember",
    duration: "10 months",
    summary:
      "Local SEO for used-car dealer with 800+ dynamic inventory. Page 1 for 'mobil bekas [model] [city]'.",
    challenge:
      "Used-car dealer with 800+ units across 3 cities. Inventory changed daily, no per-unit landing pages (all on Tokopedia + OLX), and they depended heavily on ad platforms. Local competitors already had standalone websites.",
    approach:
      "Custom website with dynamic per-unit landing pages (auto-generated from inventory). Product + Vehicle schema. Per-city local SEO with optimized GBP. Internal linking from model pillars to unit details. Image SEO (alt text + WebP + lazy load).",
    results: [
      { metric: "[model][city] keywords", note: "top 3" },
      { metric: "Organic visits", note: "10 months" },
      { metric: "Direct inquiries (non-ads)", note: "from 18%" },
      { metric: "Platform fee saved", note: "OLX commission" },
    ],
    tags: ["Local SEO", "Automotive", "Dynamic Pages", "Schema"],
  },
  "seo-restoran-fine-dining": {
    title: "SEO for Fine Dining Restaurant Reservations",
    client: "Fine Dining Restaurant in Jakarta",
    industry: "Restaurants & F&B",
    location: "Jakarta",
    duration: "8 months",
    summary:
      "SEO for fine dining restaurant targeting direct reservations. Page 1 for 'fine dining Jakarta', 'best restaurant Jakarta'.",
    challenge:
      "Excellent fine dining restaurant (4.9 Google rating) had 70% of reservations through OpenTable + Chope (8-12% commission). Organic search was invisible (chef awards weren't on Google), and SEO content was minimal.",
    approach:
      "Content strategy: chef story, sourcing story, behind-the-scenes, and tasting menu FAQ. Restaurant + Menu + Review schema. PR outreach to 8 food media for authoritative backlinks. Complete image SEO (food photography with descriptive alt text).",
    results: [
      { metric: "Top 3 'fine dining Jakarta'", note: "+ 14 other keywords" },
      { metric: "Direct reservations", note: "from 30%" },
      { metric: "OpenTable fees saved", note: "commission" },
      { metric: "Avg organic ticket size", note: "vs OpenTable users" },
    ],
    tags: ["F&B SEO", "Restaurant", "Local", "Reservation"],
  },
  "seo-sekolah-internasional": {
    title: "Bilingual SEO for International School",
    client: "International School in Tangerang",
    industry: "Education",
    location: "South Tangerang",
    duration: "10 months",
    summary:
      "Bilingual (ID + EN) SEO for international school. Target: expat parents + Indonesian upper-middle class.",
    challenge:
      "International school with Rp 200-400M/year tuition needed inbound from both expat parents (EN keyword searches) and Indonesian upper-middle (ID keywords). Old site was monolingual (ID only), losing expat audience to bilingual Singapore school competitors.",
    approach:
      "Bilingual SEO setup: hreflang tags, dedicated EN content (not translated), persona-specific content strategy (admission FAQ, Cambridge vs IB curriculum comparison). Authoritative content about Indonesian education landscape for expat parents.",
    results: [
      { metric: "Expat parent inquiries", note: "EN content" },
      { metric: "EN top 5 keywords", note: "expat-focused" },
      { metric: "Admission applications", note: "12 months YoY" },
      { metric: "Cost per inquiry", note: "vs Facebook expat Ads" },
    ],
    tags: ["Bilingual SEO", "Education", "Expat", "Hreflang"],
  },
  "seo-pinjaman-online-legal": {
    title: "SEO for OJK-Licensed P2P Lending",
    client: "Tier-2 P2P Lending",
    industry: "Finance",
    location: "Jakarta",
    duration: "12 months",
    summary:
      "SEO for OJK-licensed P2P lending with compliance content. Differentiate from illegal pinjol in SERP.",
    challenge:
      "OJK-licensed P2P lending kept getting brand-damaged because 'pinjaman online' search was dominated by illegal pinjol + bad-practice content clusters. Users with legitimate intent needed education on legal vs illegal differences.",
    approach:
      "Authoritative content strategy: 80+ educational articles 'how to check legal pinjol', 'list of legal OJK pinjol 2024 updated monthly', 'difference legal vs illegal'. FinancialService + FAQPage schema. PR outreach to 12 financial media for authority. Visible OJK compliance disclosures.",
    results: [
      { metric: "Avg position 'pinjol legal'", note: "Top 1-2 stable" },
      { metric: "Branded search", note: "12 months" },
      { metric: "Loan applications", note: "organic" },
      { metric: "Organic user NPL rate", note: "vs ads users 3.4%" },
    ],
    tags: ["Fintech SEO", "Compliance", "Educational", "YMYL"],
  },
  "seo-vape-ecommerce": {
    title: "SEO for Vape E-commerce (Grey Niche)",
    client: "Vape E-commerce Store",
    industry: "Lifestyle",
    location: "Indonesia",
    duration: "9 months",
    summary:
      "SEO for vape e-commerce (grey area, Meta Ads banned). Pure organic growth + content authority strategy.",
    challenge:
      "Vape e-commerce couldn't use Meta Ads (banned policy) + Google Ads were limited (restricted). 100% growth depended on SEO + community. Content was thin (copy-paste vendor descriptions), and US competitors ranked using aggressive backlinks.",
    approach:
      "Content: per-category pillars (pod, mod, juice, accessory) + 200+ long-form product reviews. Per-intent buyer's guides (beginner, MTL vs DTL, low-power vs high-power). Community-driven backlinks from local vape forums. E-A-T improvement: author bios, review credentials.",
    results: [
      { metric: "Organic revenue share", note: "from 38%" },
      { metric: "Avg organic AOV", note: "vs paid (banned)" },
      { metric: "Domain Rating", note: "from 9" },
      { metric: "Top 3 keywords", note: "money + buying" },
    ],
    tags: ["E-commerce SEO", "Grey Niche", "Content Authority", "Long-form"],
  },
  "seo-konsultan-pajak": {
    title: "B2B SEO for SME Tax Consultant",
    client: "Independent Tax Consultant",
    industry: "Professional Services",
    location: "Jakarta + remote nationwide",
    duration: "8 months",
    summary:
      "SEO for tax consultant targeting Indonesian SMEs. Page 1 for 'jasa konsultan pajak [business type]'.",
    challenge:
      "Independent tax consultant focused on SMEs competing with big firms (Deloitte, KPMG, EY) + generic portals (klikpajak, mekari). Old site had 8 pages, no blog, and the founder had no online brand authority.",
    approach:
      "Founder-led content strategy: 60+ articles answering specific SME questions (freelance PPh 21, import goods PPh 25, services export VAT). LinkedIn content amplification to 12k+ SME entrepreneur audience. Lead magnet: SME tax calculator.",
    results: [
      { metric: "Organic leads/month", note: "from 6" },
      { metric: "Lead-to-client conversion", note: "high-intent organic" },
      { metric: "Founder LinkedIn followers", note: "thought leadership" },
      { metric: "Revenue from organic", note: "avg client value" },
    ],
    tags: ["B2B SEO", "Professional Services", "Long-tail", "Lead Gen"],
  },

  // ============================================================
  // SUHU ADS (10)
  // ============================================================
  "ads-property-launch-roas-5x": {
    title: "Property Launch Meta Ads — 5.2x ROAS in 90 Days",
    client: "BSD Cluster Developer",
    industry: "Property",
    location: "Tangerang, Banten",
    duration: "3 months",
    summary:
      "New cluster launch via Meta + Google Ads. 78 units sold in 90 days with Rp 1.8B ad spend.",
    challenge:
      "Developer launching a new cluster (140 units) with Rp 2.5B marketing budget. Premium location (Rp 1.8-3.4B/unit) but low awareness. Historical online-ads-to-booking-fee conversion was weak (lots of leads, few qualified).",
    approach:
      "Clear funnel: cold awareness (video walkthrough + neighborhood story) → mid (virtual tour + floor plan download) → warm (form survey + booking fee promo). Audience: BSD parent residents + 1% booking-fee lookalike. 3-variant landing page A/B test. Daily creative refresh in first 2 weeks.",
    results: [
      { metric: "Meta+Google ROAS", note: "blended" },
      { metric: "Qualified booking fees", note: "from 78 sold" },
      { metric: "Cost per booking fee", note: "ticket Rp 2-3B" },
      { metric: "Units sold in 90 days", note: "phase 1 sold out" },
    ],
    tags: ["Meta Ads", "Property", "Launch", "ROAS"],
  },
  "ads-klinik-lasik-google": {
    title: "Google Ads for LASIK — Rp 280k CPL",
    client: "Jakarta LASIK Clinic",
    industry: "Clinics & Healthcare",
    location: "Jakarta",
    duration: "12 months",
    summary:
      "Performance Max + Search Ads for LASIK clinic. Cost per qualified lead Rp 280k (Rp 25M/eye ticket).",
    challenge:
      "Premium LASIK clinic with Rp 25-50M/eye service price. Main competitors (JEC, KMN) dominated Google Ads with big budgets. Historical CPL was Rp 850k, lead-to-booking conversion 12% — not economical.",
    approach:
      "Restructured campaign: Performance Max for discovery + Search with tight keyword match. Audience layering (competitor brand + LASIK research intent). Per-ad-group landing pages (Performance Max differs from Search). Bid strategy: tCPA per ad group with minimum 3-week learning.",
    results: [
      { metric: "Qualified CPL", note: "from Rp 850k" },
      { metric: "Lead-to-booking", note: "from 12%" },
      { metric: "ROAS", note: "Rp 25-50M ticket size" },
      { metric: "Jakarta market share", note: "competitor brand search" },
    ],
    tags: ["Google Ads", "Healthcare", "High Ticket", "Performance Max"],
  },
  "ads-fnb-tiktok-chain": {
    title: "TikTok Ads Coffee Chain Loyalty App",
    client: "Coffee Chain (50+ outlets)",
    industry: "Restaurants & F&B",
    location: "Indonesia (12 cities)",
    duration: "6 months",
    summary:
      "TikTok Ads pushed loyalty app installs + first orders. Rp 4,200 CPI, 64% install-to-first-order conversion.",
    challenge:
      "Coffee chain had launched a loyalty app but installs were slow (organic only). Target Gen-Z + young millennial. Meta Ads CPI was high (Rp 18k), TikTok hadn't been tried properly (just boosted organic).",
    approach:
      "Native TikTok creative with mid-tier UGC influencers (10-100k followers, 24 creators). Spark Ads format (boost organic UGC) + In-feed Ads with AppEvents tracking. Per-city geo-targeting with nearest outlet highlighted in copy. Daily optimization for first 4 weeks.",
    results: [
      { metric: "TikTok CPI", note: "vs Meta Rp 18k" },
      { metric: "6-month app installs", note: "TikTok only" },
      { metric: "Install-to-order", note: "first order" },
      { metric: "Blended ROAS", note: "incl repeat orders" },
    ],
    tags: ["TikTok Ads", "F&B", "App Install", "UGC"],
  },
  "ads-edtech-leadgen": {
    title: "EdTech Lead Gen — Trial Class Funnel",
    client: "Foreign Language EdTech",
    industry: "Education",
    location: "Indonesia",
    duration: "9 months",
    summary:
      "Meta + Google Ads for EdTech trial class sign-ups. Rp 32k CPL, 21% trial-to-paid, Rp 4.2M LTV.",
    challenge:
      "Foreign language EdTech with Rp 2.5-5M/level packages. Awareness was high but ads-to-paid conversion was hard. Direct 'buy package' funnel didn't work, trial class flow existed but historical CPL was Rp 95k.",
    approach:
      "Funnel restructure: trial class booking as primary conversion, paid course retargeting after trial. Creative used 15-30s student testimonial videos. Audience: 1-3% trial-booker lookalike, existing paid student exclusion. WhatsApp Business automation for trial reminders.",
    results: [
      { metric: "Trial CPL", note: "from Rp 95k" },
      { metric: "Trial-to-paid", note: "from 8%" },
      { metric: "Avg LTV", note: "12 months" },
      { metric: "Ad spend ROAS", note: "blended LTV" },
    ],
    tags: ["EdTech", "Lead Gen", "Funnel", "Trial Class"],
  },
  "ads-logam-mulia-google": {
    title: "Google Ads for Gold Investment (Sensitive Vertical)",
    client: "Gold Investment Platform",
    industry: "Finance",
    location: "Indonesia",
    duration: "10 months",
    summary:
      "Google Ads for gold bar investment with compliance content + education-first funnel. 6.8x ROAS.",
    challenge:
      "Online gold bar investment with a skeptical target audience (many fintech scams). Google Ads compliance for financial vertical is strict (some keywords restricted). Trust signals had to be visible, and ad copy compliance was tight.",
    approach:
      "Education-first funnel: cold → 'gold investment for beginners' article (high-intent informational), warm → product page with trust signals (Antam certificate, Bappebti license). Smart Bidding tROAS with minimum 60 days data. Legal-reviewed compliant creative.",
    results: [
      { metric: "ROAS", note: "blended ROAS" },
      { metric: "First purchase conversion", note: "from education traffic" },
      { metric: "Repeat purchase", note: "12-month retention" },
      { metric: "Avg first ticket", note: "0.5-1g first buy" },
    ],
    tags: ["Google Ads", "Finance", "Compliance", "Education-led"],
  },
  "ads-healthcare-app-performance": {
    title: "Healthcare App Multi-Platform Performance Marketing",
    client: "Healthcare Super App",
    industry: "Clinics & Healthcare",
    location: "Indonesia",
    duration: "14 months",
    summary:
      "Multi-platform performance ads (Meta + Google + TikTok) for healthcare app. Rp 8,400 blended CPI, 4x MAU growth.",
    challenge:
      "Healthcare super app (telemedicine + pharmacy + lab) Series B startup needed to scale from 280k MAU to 1M MAU in 12 months. Rp 8B/month budget. Competitors (Halodoc, Alodokter, GoodDoctor) dominated brand search.",
    approach:
      "Platform allocation strategy: Meta for awareness + Lookalike (40%), Google Search for high-intent symptom searches (30%), TikTok for young user acquisition (20%), App Store Ads (10%). Creative per audience: parent-targeted vs young adult. AppsFlyer MMP setup for proper attribution.",
    results: [
      { metric: "MAU growth", note: "280k → 1.15M" },
      { metric: "Blended CPI", note: "industry avg Rp 24k" },
      { metric: "D30 retention", note: "from 18% pre-optimization" },
      { metric: "Consults per MAU", note: "monetization improvement" },
    ],
    tags: ["Healthcare", "App Performance", "Multi-platform", "Scale"],
  },
  "ads-dealer-mobil-leadgen": {
    title: "Multi-City Automotive Dealer Lead Gen",
    client: "Multi-branch Car Dealer",
    industry: "Automotive",
    location: "Jabodetabek + 5 cities",
    duration: "12 months",
    summary:
      "Meta Ads lead gen for new car dealer. Rp 38k CPL, 18% test-drive-to-sales, +220 units sold in 12 months.",
    challenge:
      "Car dealer network with 12 branches across 6 cities. Lead form via Facebook Ads but quality was poor (lots of fake/test data), manual lead routing to nearest branch often missed (leads expired), and ads-to-units-sold attribution was unclear.",
    approach:
      "Funnel restructure: instant form with validation (no empty fields, correct phone format), pre-filled location qualification, and CRM auto-routing to nearest branch (geo-fence). Per-model + per-city creative. Conversions API setup to track until showroom sales close.",
    results: [
      { metric: "Qualified CPL", note: "from Rp 110k" },
      { metric: "Lead to test drive", note: "from 18%" },
      { metric: "Test drive to sales", note: "industry avg 12%" },
      { metric: "Attributed units sold", note: "12 months" },
    ],
    tags: ["Meta Ads", "Automotive", "Lead Gen", "Multi-city"],
  },
  "ads-fine-dining-local": {
    title: "Local Awareness Ads for Fine Dining Restaurant",
    client: "Boutique Fine Dining Restaurant",
    industry: "Restaurants & F&B",
    location: "South Jakarta",
    duration: "6 months",
    summary:
      "Hyperlocal Meta + Google Ads driving direct reservations to boutique fine dining. 7.4x ROAS in 6 months.",
    challenge:
      "Boutique fine dining (40 covers/night) in SCBD, newly opened. Minimal foot traffic, dependent on OpenTable + Chope (8-12% commission). Target: middle-upper professionals in SCBD/Kuningan, ages 28-50.",
    approach:
      "Hyperlocal targeting: 5km radius from SCBD + Kuningan + Senopati office buildings with office-hour timing. Format: 15s chef story video + signature dish carousel + reservation conversion (direct WhatsApp + form). Audience exclusion: existing customers (already visited).",
    results: [
      { metric: "Direct reservations", note: "from OpenTable 30%" },
      { metric: "ROAS", note: "blended" },
      { metric: "New customers/month", note: "first-time visits" },
      { metric: "Commission saved", note: "OpenTable" },
    ],
    tags: ["Local Ads", "Fine Dining", "Direct Reservation", "Hyperlocal"],
  },
  "ads-vape-broad-awareness": {
    title: "Compliant Awareness Campaign for Vape Brand",
    client: "Premium Vape Brand",
    industry: "Lifestyle",
    location: "Indonesia",
    duration: "8 months",
    summary:
      "Vape awareness campaign (compliance challenge). YouTube + influencer ads with non-product content. Brand search +480%.",
    challenge:
      "Premium vape brand couldn't use Meta/Google Search Ads (banned + restricted). YouTube Ads were allowed but creative was severely restricted (no product showcase). Brand awareness was low, organic search dominated by more established competitors.",
    approach:
      "YouTube Ads with lifestyle creative (no product close-ups): 6-second bumper ads focused on brand element + community content. Mid-tier non-tobacco influencer marketing with soft brand integration. Programmatic display to lifestyle audiences. Brand search retargeting.",
    results: [
      { metric: "Brand search volume", note: "8 months" },
      { metric: "YouTube view rate", note: "industry avg 15-20%" },
      { metric: "Direct site traffic", note: "brand recall" },
      { metric: "Online market share", note: "vs competitors" },
    ],
    tags: ["YouTube Ads", "Awareness", "Compliance", "Influencer"],
  },
  "ads-game-user-acquisition": {
    title: "Mobile Game UA — Sub-Dollar CPI",
    client: "Casual Game Publisher",
    industry: "Online Gaming",
    location: "Indonesia + SEA",
    duration: "9 months",
    summary:
      "Multi-platform mobile game user acquisition. $0.42 CPI (Rp 6,500), 28% D7 retention, 6-month monetization payback.",
    challenge:
      "Casual game publisher launched a new puzzle game. UA budget $50k/month for Indonesia + SEA. Historical $1.20 CPI with D7 retention only 18%. IAP + IAA hybrid monetization. Needed lower CPI + higher retention for healthy payback.",
    approach:
      "Multi-platform: Meta (broad geo + lookalike + retargeting), Google Ads UAC (auto-bidding), TikTok for young audience, Unity Ads + AppLovin for gamer-native. Weekly creative iteration (8-12 variants) with A/B winners. AppsFlyer + Helium SDK setup. Audience tiers per LTV segment.",
    results: [
      { metric: "CPI", note: "Rp 6,500" },
      { metric: "D7 retention", note: "from 18%" },
      { metric: "ARPDAU", note: "casual game benchmark" },
      { metric: "Payback period", note: "from 14 months" },
    ],
    tags: ["Game UA", "Multi-platform", "Mobile", "Retention"],
  },

  // ============================================================
  // SUHU SOCMED (10)
  // ============================================================
  "socmed-fnb-rebrand-tiktok": {
    title: "F&B Chain Rebrand on IG + TikTok",
    client: "Casual Dining F&B Chain",
    industry: "Restaurants & F&B",
    location: "Jabodetabek",
    duration: "12 months",
    summary:
      "IG + TikTok rebrand for F&B chain. 32k → 480k followers in 12 months, viral hit 12M views.",
    challenge:
      "Casual dining F&B chain with 16 outlets, IG stuck at 32k followers for 3 years. Content was still product still-lifes + generic captions, engagement rate 0.8%. Owner wanted a more playful repositioning targeting Gen-Z, but the in-house social team was just 1 person.",
    approach:
      "Rebrand visual tone (more playful, warmer palette, in-store moments focus). Content split: IG (50% lifestyle, 30% menu, 20% promo) + TikTok (90% behind-the-scenes + relatable content, 10% promo). Weekly production shoots, daily TikTok + 4x/week IG posting.",
    results: [
      { metric: "IG followers", note: "from 32k" },
      { metric: "TikTok followers", note: "new account" },
      { metric: "Viral hit", note: "1 video, organic" },
      { metric: "Outlet foot traffic", note: "12 months YoY" },
    ],
    tags: ["IG", "TikTok", "F&B", "Rebrand"],
  },
  "socmed-beauty-brand": {
    title: "Local Beauty Brand IG + TikTok Growth",
    client: "D2C Skincare Indonesia",
    industry: "Beauty & Wellness",
    location: "Indonesia",
    duration: "10 months",
    summary:
      "Content + community for local D2C skincare. UGC ecosystem with 240+ micro creators + viral 'before-after' content.",
    challenge:
      "2-year-old D2C skincare brand, IG 84k followers but stale 1.2% engagement. New competitors emerged with rapid TikTok growth. Founder wanted to activate UGC but didn't know how to orchestrate at scale.",
    approach:
      "UGC ecosystem: micro creators (5-50k followers) with free product + affiliate commission. Content pillars: ingredient education, before-after testimonials, derm FAQ. Daily TikTok posting with relatable beauty pain-point format. IG: curated feed + viral reels focus.",
    results: [
      { metric: "IG followers", note: "84k → 437k" },
      { metric: "TikTok followers", note: "from scratch" },
      { metric: "Active UGC creators", note: "monthly active" },
      { metric: "Revenue from social", note: "attributed sales" },
    ],
    tags: ["Beauty", "UGC", "TikTok", "Community"],
  },
  "socmed-properti-developer": {
    title: "Property Developer IG + LinkedIn Strategy",
    client: "Large Mixed-use Developer",
    industry: "Property",
    location: "Jakarta",
    duration: "14 months",
    summary:
      "Dual-platform strategy: IG (residential buyer) + LinkedIn (investor + B2B partner). Holistic brand presence for developer.",
    challenge:
      "Large mixed-use developer with residential + commercial projects. IG only posted unit brochures (not engaging), LinkedIn had no active account. B2B investor inquiries had no digital channel — all offline via brokers.",
    approach:
      "IG strategy: 60% lifestyle + neighborhood + happy resident testimony, 30% unit features, 10% promo. LinkedIn: CEO thought leadership + investor pitch deck breakdowns + project milestones. In-house content production studio, talent: architect + landscape designer for credibility.",
    results: [
      { metric: "IG engagement", note: "vs brochure posting" },
      { metric: "CEO LinkedIn followers", note: "from scratch" },
      { metric: "B2B investor inquiries", note: "via LinkedIn DM" },
      { metric: "Residential leads", note: "IG attribution" },
    ],
    tags: ["IG", "LinkedIn", "Property", "B2B + B2C"],
  },
  "socmed-edtech-tiktok-organic": {
    title: "EdTech TikTok Organic Growth",
    client: "Coding Bootcamp EdTech",
    industry: "Education",
    location: "Indonesia",
    duration: "8 months",
    summary:
      "TikTok organic for coding bootcamp. 0 to 280k followers in 8 months, 4,200 trial sign-ups.",
    challenge:
      "Coding bootcamp with Rp 8-25M packages hadn't scaled CAC. Ads CAC was Rp 1.4M/student, needed a sustainable organic channel. Team was just 2 people (founder + 1 social) with no TikTok experience.",
    approach:
      "Content strategy: 'developer life hacks', 'career switch stories', 'salary breakdowns'. Dominant format: founder talking head + code screen recording. Daily posting (consistency > production quality). Engagement via comments + student duets. Repurposed top performers to YouTube Shorts + IG Reels.",
    results: [
      { metric: "TikTok followers", note: "from 0, 8 months" },
      { metric: "Avg views per post", note: "consistent" },
      { metric: "Attributed trial signups", note: "TikTok bio link" },
      { metric: "CAC reduction", note: "blended vs ads-only" },
    ],
    tags: ["TikTok", "EdTech", "Organic", "Founder-led"],
  },
  "socmed-klinik-gigi": {
    title: "Dental Clinic IG + TikTok Trust Building",
    client: "Premium Dental Clinic",
    industry: "Clinics & Healthcare",
    location: "Jakarta + Tangerang",
    duration: "10 months",
    summary:
      "Educational content for dental clinic with doctors as primary talent. Trust + online booking via social.",
    challenge:
      "Premium dental clinic with Rp 2-25M treatment range needed strong trust signals. Old content was generic (clinic photos + prices), low engagement. The clinic's doctors were excellent but had no personal brand presence.",
    approach:
      "Personal branding for 4 senior doctors with educational format (weekly Q&A, treatment walkthroughs, patient FAQ). IG: long-form caption education + reels. TikTok: bite-size tips + myth busting. Booking link in bio + WhatsApp click-to-message.",
    results: [
      { metric: "Total 4-doctor followers", note: "vs 18k start" },
      { metric: "DM/bio bookings", note: "monthly" },
      { metric: "Trust score (survey)", note: "patient survey" },
      { metric: "High-ticket treatments", note: "Veneer + implant" },
    ],
    tags: ["Healthcare", "Personal Brand", "Education", "Trust"],
  },
  "socmed-otomotif-modifikasi": {
    title: "Automotive Modification Community Building on IG",
    client: "Premium Modification Shop",
    industry: "Automotive",
    location: "Jakarta",
    duration: "12 months",
    summary:
      "Community-driven IG strategy for premium modification shop. 18k → 240k followers, built cult brand in modification community.",
    challenge:
      "Premium modification shop had solid skills + portfolio but only 18k IG followers. Customers came mostly from word-of-mouth WhatsApp community groups. Wanted to scale but new brand competitors were more aggressive on IG.",
    approach:
      "Build cult brand: weekly 'build of the week' showcasing customer projects, behind-the-scenes shop content, and founder personality (technical insight + opinion). Collab with 12 car enthusiast influencers (free build + content). 2x/year event activations (showcase days).",
    results: [
      { metric: "IG followers", note: "from 18k" },
      { metric: "Booking waitlist", note: "from 2 weeks" },
      { metric: "Avg ticket size", note: "premium positioning" },
      { metric: "Affiliate revenue", note: "part brand partnerships" },
    ],
    tags: ["IG", "Community", "Automotive", "Cult Brand"],
  },
  "socmed-travel-umroh-tiktok": {
    title: "Umroh Travel TikTok Storytelling",
    client: "Premium Umroh Travel",
    industry: "Travel & Tourism",
    location: "Indonesia (pilgrim target)",
    duration: "10 months",
    summary:
      "TikTok storytelling for premium umroh travel. Pilgrim journey + tour leader content. TikTok bookings +340%.",
    challenge:
      "Premium umroh travel with Rp 35-65M packages had high repeat customers (40%) but slow new customer acquisition. Budget umroh competitors (Rp 18-25M) dominated awareness. Trust factor is crucial for umroh — hard sell on social didn't work.",
    approach:
      "Storytelling format: real pilgrim journey (before-during-after umroh), tour leader live Q&A, and virtual Mecca-Medina tours. Daily TikTok 1 video, IG Reels 4x/week, plus monthly long-form on YouTube. UGC from active pilgrims as testimonials.",
    results: [
      { metric: "TikTok followers", note: "10 months from scratch" },
      { metric: "TikTok bio bookings", note: "attribution form" },
      { metric: "Repeat referral rate", note: "social proof effect" },
      { metric: "Avg ticket size", note: "trust → premium choice" },
    ],
    tags: ["TikTok", "Travel", "Storytelling", "Umroh"],
  },
  "socmed-fashion-lokal": {
    title: "Local Fashion IG Editorial + TikTok Trend",
    client: "Local D2C Fashion Brand",
    industry: "Fashion & Retail",
    location: "Indonesia",
    duration: "12 months",
    summary:
      "Dual strategy: IG editorial (brand equity) + TikTok trend-jacking (sales). Brand awareness + revenue paralleled growth.",
    challenge:
      "Local D2C fashion brand with Rp 350-800k price points (mid-premium). IG editorial was beautiful but sales didn't correlate, TikTok unexplored. Founder wanted brand equity + sales growing together.",
    approach:
      "IG: high-quality editorial lookbooks + behind-designer story for brand equity. TikTok: trend-jacking with native creators + 'styled by [creator]' format. Cross-platform content repurposing with per-format adaptation. Mid-tier influencer seeding.",
    results: [
      { metric: "IG followers", note: "62k → 242k" },
      { metric: "TikTok followers", note: "from scratch" },
      { metric: "Revenue from social", note: "attributed" },
      { metric: "Brand AOV", note: "brand equity → premium" },
    ],
    tags: ["Fashion", "IG", "TikTok", "D2C"],
  },
  "socmed-fintech-linkedin": {
    title: "B2B Fintech LinkedIn Thought Leadership",
    client: "Embedded Finance Fintech",
    industry: "Finance",
    location: "Jakarta",
    duration: "8 months",
    summary:
      "LinkedIn thought leadership for B2B fintech. CEO + Head of Sales personal branding. +180% enterprise inbound.",
    challenge:
      "B2B embedded finance fintech (serving enterprise clients) needed C-level audience awareness. LinkedIn existed but generic (press releases). Sales team did active outbound but cold rates were low. Needed a warm inbound channel.",
    approach:
      "CEO + Head of Sales personal brand strategy. Content: industry insight, OJK + BI regulatory updates, (sanitized) client case studies, and opinion pieces on Indonesia's fintech landscape. Frequency: CEO 3x/week, Head 2x/week. Engagement strategy: comment to C-level on target company list.",
    results: [
      { metric: "CEO followers", note: "8 months" },
      { metric: "Enterprise demo inbound", note: "vs outbound only" },
      { metric: "Sales cycle reduction", note: "warm vs cold" },
      { metric: "Closed deals from LinkedIn", note: "Rp 4.2B ARR" },
    ],
    tags: ["LinkedIn", "B2B", "Thought Leadership", "Fintech"],
  },
  "socmed-talent-agency-influencer": {
    title: "Influencer Talent Agency Multi-Account Management",
    client: "Talent Agency (24 talents)",
    industry: "Media & Entertainment",
    location: "Jakarta",
    duration: "12 months",
    summary:
      "Manage 24 talent IG + TikTok with unified strategy + portfolio leverage. Brand deal revenue +220% YoY.",
    challenge:
      "Talent agency with 24 influencers (3-300k follower range). Each talent managed own content, quality + brand-fit varied across talents. Brand deal acquisition depended on cold outreach, no inter-talent portfolio leverage.",
    approach:
      "Centralized content strategy + per-talent personalization. Shared production studio (cost efficiency). Brand deal portfolio sales: multi-talent package deals for brand campaigns. Per-talent analytics dashboard for brand transparency. Talent development program (negotiation, content quality).",
    results: [
      { metric: "Total 24-talent reach", note: "YoY" },
      { metric: "Brand deal revenue", note: "agency commission" },
      { metric: "Talent retention", note: "1 churn vs industry 30% avg" },
      { metric: "Multi-talent deals", note: "package > single" },
    ],
    tags: ["Influencer Marketing", "Talent Mgmt", "Multi-account", "Agency"],
  },

  // ============================================================
  // SUHU DIGITAL MARKETING (10)
  // ============================================================
  "dm-properti-full-funnel-6mo": {
    title: "Property Full-Funnel — 4x Booking Fee Growth in 6 Months",
    client: "Cluster Developer in Tangerang",
    industry: "Property",
    location: "Tangerang, Banten",
    duration: "6 months",
    summary:
      "Full-funnel digital marketing for developer: SEO + Ads + Social + CRM. Booking fees from 24/month to 98/month.",
    challenge:
      "Developer with 4 active clusters had 9 separate vendors (one for SEO, another for Meta Ads, another for Google Ads, another for IG, etc). Attribution was chaos, each claimed success. Founder had no single source of truth on funnel. Booking fees stagnated at 24/month despite Rp 1.4B/month ad spend.",
    approach:
      "Consolidated all marketing in-house with Para Suhu: SEO + Meta + Google + IG/TikTok + CRM HubSpot integration. Built end-to-end attribution dashboard. Restructured funnel: awareness video → mid touring video → high-intent floor plan request → booking. Weekly strategic reviews with founder.",
    results: [
      { metric: "Booking fees/month", note: "from 24" },
      { metric: "Cost per booking", note: "vs 9-vendor era" },
      { metric: "Units sold in 6 months", note: "vs target 84" },
      { metric: "6-month revenue", note: "+220% YoY" },
    ],
    tags: ["Full Funnel", "Property", "Multi-channel", "Attribution"],
  },
  "dm-klinik-chain-multichannel": {
    title: "Clinic Chain Multi-Channel — 4 to 12 Branches in 18 Months",
    client: "Beauty Clinic Chain",
    industry: "Clinics & Healthcare",
    location: "Indonesia (7 cities)",
    duration: "18 months",
    summary:
      "Digital marketing strategy for clinic chain expansion from 4 to 12 branches. Per-new-branch digital playbook.",
    challenge:
      "Clinic chain wanted to aggressively expand from 4 to 12 branches in 18 months. Each new branch needed to ramp traffic to break-even within 4 months. No digital marketing playbook existed for launching new branches (all trial-and-error).",
    approach:
      "Built a digital playbook for launching new branches: pre-launch (4 weeks hyperlocal awareness ads + GBP build), soft-launch (2 weeks trial promo + UGC), full-launch (sustain + retargeting). Per-branch local SEO. Cross-branch loyalty program. Unified CRM across 12 branches.",
    results: [
      { metric: "Branch break-even", note: "from 6 months baseline" },
      { metric: "Active member lifetime", note: "cross-branch loyalty" },
      { metric: "Total network revenue", note: "18 months" },
      { metric: "Successful 18mo expansion", note: "0 failed expansion" },
    ],
    tags: ["Chain Expansion", "Healthcare", "Playbook", "Multi-location"],
  },
  "dm-edtech-zero-to-growth": {
    title: "EdTech 0 to Growth Stage in 12 Months",
    client: "Series Seed EdTech",
    industry: "Education",
    location: "Indonesia",
    duration: "12 months",
    summary:
      "Full digital growth for EdTech from pre-launch to 12k paying students in 12 months. Series A-ready metrics.",
    challenge:
      "EdTech founded by 2 ex-Big Tech without marketing experience. Strong product, competitive pricing, but no GTM playbook. Rp 6B (Seed) budget. Target: 12k paying students + Series A-ready metrics in 12 months.",
    approach:
      "Phase 1 (M1-3): Brand + content foundation (website, IG, TikTok, base SEO content). Phase 2 (M4-6): Performance ads scaling (Meta + Google + TikTok). Phase 3 (M7-9): Retention + referral loop. Phase 4 (M10-12): Series A material (case studies, clean attribution).",
    results: [
      { metric: "M12 paying students", note: "vs target 12k" },
      { metric: "Blended CAC", note: "vs Rp 3.4M LTV" },
      { metric: "Organic share", note: "M12 acquisition" },
      { metric: "Series A closed", note: "led by US fund" },
    ],
    tags: ["EdTech", "Growth", "Startup", "Series A"],
  },
  "dm-fnb-franchise-rollout": {
    title: "F&B Franchise Rollout — 24 Outlets in 14 Months",
    client: "Coffee Franchise F&B Brand",
    industry: "Restaurants & F&B",
    location: "Indonesia (16 cities)",
    duration: "14 months",
    summary:
      "Digital marketing strategy for coffee franchise rollout of 24 outlets in 16 cities. Per-outlet ramp-up + brand consolidation.",
    challenge:
      "F&B coffee franchise rolling out 24 outlets across 16 cities in 14 months. Challenges: zero brand awareness in tier-2-3 cities, no franchisee digital training, and cross-owner brand consistency.",
    approach:
      "Centralized brand campaign + per-outlet hyperlocal activation. Franchise playbook: pre-opening hype (6 weeks before opening), grand opening promo, sustained engagement. Cross-outlet loyalty app. Franchisee training: digital basics + on-brand content guidelines.",
    results: [
      { metric: "Outlet break-even", note: "vs SOP 5 months" },
      { metric: "Tier-2 city brand awareness", note: "post-launch survey" },
      { metric: "Cross-outlet app users", note: "loyalty engagement" },
      { metric: "Franchise inquiries", note: "scaling outlook" },
    ],
    tags: ["Franchise", "F&B", "Rollout", "Multi-city"],
  },
  "dm-travel-umroh-fullfunnel": {
    title: "Umroh Travel Full-Funnel Marketing",
    client: "Mid-tier Umroh Travel",
    industry: "Travel & Tourism",
    location: "Indonesia",
    duration: "12 months",
    summary:
      "Full-funnel umroh: awareness ads + educational content + trust building + booking flow. +180% pilgrims YoY.",
    challenge:
      "Mid-tier umroh travel (3,000 pilgrims/year) competing with larger brands (NRA, Maktour) on brand & budget. Scaling to 6,000 pilgrims/year needed acquisition channel diversification + retention strategy.",
    approach:
      "Awareness: TikTok storytelling + IG Reels. Education: SEO content (FAQ) + YouTube umroh guides. Trust: pilgrim video testimonials + group documentation. Conversion: WhatsApp Business chatbot + online booking with installment option (umroh BNPL).",
    results: [
      { metric: "2024 pilgrims", note: "from 3,100" },
      { metric: "CAC", note: "Rp 35-45M ticket" },
      { metric: "Repeat + referral", note: "loyalty effect" },
      { metric: "Channel diversity", note: "from 2 (ads only)" },
    ],
    tags: ["Travel", "Umroh", "Full Funnel", "Trust"],
  },
  "dm-otomotif-premium-brand": {
    title: "Premium Automotive Brand Digital Strategy",
    client: "Premium Car Dealer Brand",
    industry: "Automotive",
    location: "Jabodetabek + 4 cities",
    duration: "12 months",
    summary:
      "Holistic digital strategy for premium car dealer brand (Rp 800M-2.5B/unit range). Brand equity + lead gen.",
    challenge:
      "Premium car dealer (Rp 800M-2.5B price range) operated 12 locations. Strong offline brand equity (premium showroom) but weak digital presence. Poor lead quality from ads, low brand search, and unmeasured event activations.",
    approach:
      "Brand: high-quality content (cinematic video per model, lifestyle photoshoots). Performance: Google Ads bidding on 'buy [model] [city]'. Test drive funnel with online booking + concierge service. Digital extension of event activations (livestream + UGC).",
    results: [
      { metric: "Brand search volume", note: "12 months" },
      { metric: "Qualified test drives", note: "from ads" },
      { metric: "Test drive to sale", note: "industry avg 14%" },
      { metric: "Digital-attributed units sold", note: "attribution" },
    ],
    tags: ["Automotive", "Premium", "Brand + Performance", "High Ticket"],
  },
  "dm-manufacturing-b2b": {
    title: "B2B Manufacturer Inbound Marketing",
    client: "B2B Component Manufacturer",
    industry: "Manufacturing",
    location: "Cikarang + regional export",
    duration: "14 months",
    summary:
      "B2B inbound marketing for component manufacturer. Replaced outbound-heavy approach with content + SEO + LinkedIn.",
    challenge:
      "B2B component manufacturer serving OEM automotive + appliance clients via door-to-door sales reps. 6-12 month sales cycle, target market regional Southeast Asia. Acquiring new client tiers (smaller OEMs, Asian region) needed an inbound channel.",
    approach:
      "Inbound: long-tail technical SEO (per component spec + use case), LinkedIn thought leadership from engineering team, and industry-specific content (deployment case studies). Lead magnet: spec database download + RFQ form. Sales enablement: product demo video + technical FAQ.",
    results: [
      { metric: "Inbound RFQs/month", note: "from 8 (outbound only)" },
      { metric: "Asian region buyers", note: "Vietnam, Thailand" },
      { metric: "Sales cycle reduction", note: "warm inbound" },
      { metric: "Inbound revenue", note: "incremental" },
    ],
    tags: ["B2B", "Manufacturing", "Inbound", "Industrial"],
  },
  "dm-property-launch-campaign": {
    title: "Property Mega Launch Campaign — 240 Units in 60 Days",
    client: "National-scale Township Developer",
    industry: "Property",
    location: "West Java",
    duration: "60 days pre-launch + 60 days campaign",
    summary:
      "Mega launch campaign for new township cluster. 240 units sold in 60 days, oversubscribed in phase 1.",
    challenge:
      "National township developer launching a new cluster (240 units, Rp 850M-2.4B range). Target: phase 1 sold out in 90 days. Risk: internal competition between phases + clusters, plus cautious 2025 property market sentiment.",
    approach:
      "Pre-launch (60 days): hyper-targeted teaser campaign, 360 virtual tour (early access with NUP commitment), property + finance influencer partnerships. Launch (60 days): full media blitz, daily live tours, and flash promo phases. Sales orchestration: 8 broker partners + 60-person in-house marketing.",
    results: [
      { metric: "Units sold in 60 days", note: "100% phase 1 sold" },
      { metric: "Pre-launch NUP commitments", note: "oversubscribed" },
      { metric: "Cost per sold unit", note: "vs target Rp 18M" },
      { metric: "60-day revenue", note: "fastest sold-out cluster" },
    ],
    tags: ["Property Launch", "Mega Campaign", "Sold Out", "Pre-launch"],
  },
  "dm-fintech-compliance-growth": {
    title: "Fintech Compliance-First Growth Strategy",
    client: "B2B Payment Fintech",
    industry: "Finance",
    location: "Jakarta",
    duration: "12 months",
    summary:
      "Growth strategy for B2B payment fintech with compliance-first content. Enterprise inbound +280%.",
    challenge:
      "B2B payment fintech (target enterprise + SME) needed growth but the vertical is highly regulated (BI + OJK). Aggressive marketing risked compliance issues + brand damage. Needed to balance growth speed with compliance.",
    approach:
      "Compliance-first content: Bank Indonesia + OJK regulatory updates, developer integration guides, and (sanitized + compliance-approved) client case studies. Enterprise: LinkedIn thought leadership + tailored landing pages per vertical. SME: educational TikTok + organic SEO 'how to receive online payments'.",
    results: [
      { metric: "Enterprise inbound", note: "MoM 12 months" },
      { metric: "Organic SME signups", note: "12 months" },
      { metric: "Compliance issues", note: "12 months zero violations" },
      { metric: "Transaction volume processed", note: "via inbound clients" },
    ],
    tags: ["Fintech", "Compliance", "B2B", "Enterprise"],
  },
  "dm-holding-multibrand": {
    title: "Multi-Brand Holding Digital Consolidation",
    client: "FMCG Holding (6 brands)",
    industry: "FMCG",
    location: "Indonesia",
    duration: "16 months",
    summary:
      "Consolidated digital marketing for 6 FMCG brands under same holding. Shared infrastructure + per-brand strategy. Cost saving + growth.",
    challenge:
      "FMCG holding with 6 brands (snack, beverage, household care). Each brand used different agencies, cost duplication (CRM, analytics, creative production), and customer data scattered with no single view.",
    approach:
      "Consolidated to shared infrastructure: unified DMP (data management platform), shared creative production studio, and centralized analytics. Each brand kept its own strategy + tone. Cross-brand bundling for customer LTV expansion (Brand A loyal customers introduced to Brand B).",
    results: [
      { metric: "Marketing cost saving", note: "vs 6 separate agencies" },
      { metric: "Cross-brand customers", note: "LTV expansion" },
      { metric: "Total brand revenue", note: "16 months vs baseline" },
      { metric: "Unified data records", note: "single customer view" },
    ],
    tags: ["Holding", "Multi-brand", "Consolidation", "FMCG"],
  },

  // ============================================================
  // SUHU CREATIVE (10)
  // ============================================================
  "creative-rebrand-fnb-chain": {
    title: "F&B Chain Rebrand from Indonesia to International",
    client: "F&B Chain with Regional Expansion",
    industry: "Restaurants & F&B",
    location: "Indonesia + SEA",
    duration: "16 weeks",
    summary:
      "Full rebrand of Indonesian F&B chain prepping for Singapore + Malaysia expansion. Logo, guidelines, packaging, signage.",
    challenge:
      "F&B chain with 28 outlets in Indonesia was successful but its visual identity felt too local (Bahasa-centric, dated color palette). Expanding to Singapore + Malaysia required a brand that traveled well across cultures without losing its roots.",
    approach:
      "Full rebrand: cross-market positioning research, modular design system (adaptable per market), 12 SKU packaging, standardized signage per outlet type (mall, street, kiosk). Comprehensive 84-page brand book. Phased rollout: pilot 4 outlets → full 28 outlets.",
    results: [
      { metric: "Brand recall awareness", note: "post-rebrand survey" },
      { metric: "Foot traffic at new-visual outlets", note: "vs pre-rebrand" },
      { metric: "Successful SG/MY expansion", note: "Y1 post-rebrand" },
      { metric: "Premium positioning AOV", note: "perceived value" },
    ],
    tags: ["Rebranding", "F&B", "Multi-market", "Brand System"],
  },
  "creative-coffee-packaging": {
    title: "Logo + Packaging for Premium Coffee Brand",
    client: "Specialty Coffee Roastery",
    industry: "Restaurants & F&B",
    location: "Bandung",
    duration: "8 weeks",
    summary:
      "Built brand identity for coffee roastery from logo, packaging for 8 single-origin variants, through retail merchandise.",
    challenge:
      "Specialty coffee roastery in Bandung produced great coffee but packaging was still plain kraft + sticker. To enter retail (premium supermarkets + cafe partners), they needed shelf presence and per-origin storytelling.",
    approach:
      "Storytelling-first brand identity per origin (Aceh Gayo, Toraja, Bali Kintamani, etc.). Versatile logo + wordmark (1-color + multi-color). Packaging with per-origin terrain illustrations. Merchandise (tumbler, apron, tote) for cafe partners + retail.",
    results: [
      { metric: "Retail listings achieved", note: "premium supermarket + cafe" },
      { metric: "Avg price per bag", note: "premium pricing accepted" },
      { metric: "Cafe partner adoption", note: "12 months" },
      { metric: "Direct online sales", note: "post-rebrand" },
    ],
    tags: ["Packaging", "Coffee", "Brand Identity", "Retail"],
  },
  "creative-video-production-launch": {
    title: "Mega Property Launch Video Production",
    client: "Large-scale Township Developer",
    industry: "Property",
    location: "West Java",
    duration: "10 weeks production",
    summary:
      "Comprehensive video production for township mega-launch: 3-minute hero film, 12 social cuts, 3D virtual tour, drone footage.",
    challenge:
      "Developer needed comprehensive video content for the launch of a 200ha township. Previous video vendor's output was generic (drone showcase + voiceover), with no storytelling. Competitive Rp 480M budget for the full package.",
    approach:
      "Concept: 'a day in the life of the township' storytelling, morning to night from a resident family POV. Production: 5-day shooting (drone + steadicam + interior + actors), CGI integration for future phases, and 4-week post-production. Deliverables: 1 hero film + 24 social cuts.",
    results: [
      { metric: "Hero film YouTube views", note: "organic + ads" },
      { metric: "Social cut engagement", note: "vs old vendor" },
      { metric: "Post-video booking fees", note: "30 days post-launch" },
      { metric: "Vendor cost saved", note: "vs 3 separate vendors" },
    ],
    tags: ["Video Production", "Property", "Storytelling", "Drone"],
  },
  "creative-fashion-lookbook": {
    title: "Seasonal Fashion Lookbook Photoshoot",
    client: "Premium D2C Fashion Brand",
    industry: "Fashion & Retail",
    location: "Jakarta + Bali",
    duration: "6 weeks (3 seasons)",
    summary:
      "Seasonal lookbook (Spring/Summer + Resort) for D2C fashion brand. Set, styling, talent, full production.",
    challenge:
      "D2C fashion brand wanting premium brand equity but visual content was still product shots (white background). Needed seasonal lookbook for e-commerce + IG editorial to compete with established brands (Calla, Aere, Schmiley Mo).",
    approach:
      "Season-based concept: SS (urban Jakarta), Resort (Bali coastal). 3-model talent casting (representing customer range), 4-spot location scouting, styling director. 6-day per-season shooting, premium retouching post-production. Output: 60+ images per season + behind-the-scenes video.",
    results: [
      { metric: "Lookbook IG reach", note: "per season" },
      { metric: "Lookbook collection revenue", note: "vs before" },
      { metric: "Brand equity score", note: "premium perception" },
      { metric: "Editorial features", note: "Vogue ID, Tatler, etc." },
    ],
    tags: ["Photoshoot", "Fashion", "Editorial", "Seasonal"],
  },
  "creative-pitch-deck-series-a": {
    title: "Series A Pitch Deck for Logistics Startup",
    client: "Series A B2B Logistics Startup",
    industry: "Logistics",
    location: "Jakarta",
    duration: "4 weeks",
    summary:
      "Series A pitch deck for B2B logistics startup. 32-slide deck + data room visuals + investor demo video.",
    challenge:
      "B2B logistics startup raising Series A (target USD 12M). Ex-VC founder knew the content but visuals were minimal (default PowerPoint). Competitors were fundraising with very polished decks; needed visual edge.",
    approach:
      "Deck strategy: narrative-first (problem → opportunity → solution → traction → ask), minimal-impactful visuals. Custom data viz for metrics. 90-second product walkthrough demo video. Data room template for diligence. Plus 1-pager investor memo + investor FAQ deck.",
    results: [
      { metric: "Funding closed", note: "+17% vs target" },
      { metric: "Investor meetings taken", note: "from 24 outreach" },
      { metric: "Term sheets received", note: "competitive round" },
      { metric: "Diligence to close time", note: "vs industry 12 weeks" },
    ],
    tags: ["Pitch Deck", "Startup", "Fundraising", "Series A"],
  },
  "creative-motion-graphics-campaign": {
    title: "Fintech Motion Graphics Campaign",
    client: "Indonesian Payment Fintech",
    industry: "Finance",
    location: "Jakarta",
    duration: "6 weeks",
    summary:
      "16-video motion graphics series for fintech payment campaign. Feature education + how-to + brand awareness.",
    challenge:
      "Payment fintech needed educational campaign content (feature usage, security, etc.) but previous product videos were boring (screen recording + voiceover). Low engagement, completion rate <20%.",
    approach:
      "Motion graphics style: playful but professional — character-based explainers, custom illustration matching brand, and per-video storytelling (problem-solution). Deliverables: 16 videos (8 educational + 4 how-to + 4 brand) with 15-90s length per platform.",
    results: [
      { metric: "Avg completion rate", note: "from 18% screen recording" },
      { metric: "Campaign total reach", note: "16 videos combined" },
      { metric: "Post-video feature adoption", note: "in-app event" },
      { metric: "Brand sentiment", note: "social listening" },
    ],
    tags: ["Motion Graphics", "Fintech", "Animation", "Explainer"],
  },
  "creative-brand-book-corporate": {
    title: "Comprehensive Brand Book for Listed Holding",
    client: "Listed Corporate Holding",
    industry: "B2B / Corporate",
    location: "Jakarta",
    duration: "14 weeks",
    summary:
      "120-page brand book for a listed corporate holding. Identity, application, brand voice, sub-brand architecture.",
    challenge:
      "Listed holding with 8 sub-brands operated with inconsistent brand identity (logo variants differed, color palettes per division). New acquisitions added more chaos. Needed authoritative brand book as enterprise-wide reference.",
    approach:
      "Existing brand audit: collected all variants + assets. Brand architecture build (master + endorser + co-brand). Identity refresh (not total rebrand, evolution). 120-page brand book: usage guidelines, voice + tone, applications (office, signage, digital, packaging, vehicle), and sub-brand framework.",
    results: [
      { metric: "Brand consistency audit score", note: "from 38% pre" },
      { metric: "Subsidiary adoption", note: "12 months post-launch" },
      { metric: "Design ops cost saving", note: "less custom requests" },
      { metric: "Brand equity index", note: "external survey" },
    ],
    tags: ["Brand Book", "Corporate", "Brand Architecture", "Enterprise"],
  },
  "creative-skincare-packaging": {
    title: "Eco-Friendly D2C Skincare Packaging",
    client: "Sustainable D2C Skincare Brand",
    industry: "Beauty & Wellness",
    location: "Jakarta",
    duration: "10 weeks",
    summary:
      "Eco-friendly skincare packaging: refill system, sustainable materials, and unboxing experience. Award-winning packaging.",
    challenge:
      "Skincare brand positioned as sustainable but packaging was still conventional plastic (mismatched brand value). Wanted to redesign full lineup (24 SKUs) with refillable + biodegradable materials while remaining commercially viable at Rp 180-650k price point.",
    approach:
      "Material research: glass + aluminum (primary), FSC paper refill pouches (secondary), zero plastic. Modular design system: 1 primary bottle shape per category (cleanser, serum, moisturizer) to reduce SKU complexity. Unboxing experience: seed paper insert + recycled thank-you card. Prominent sustainability story.",
    results: [
      { metric: "Plastic reduction", note: "vs old lineup" },
      { metric: "Refill adoption rate", note: "repeat purchase" },
      { metric: "Premium pricing accepted", note: "vs before" },
      { metric: "Awards won", note: "incl Brand Indonesia Awards" },
    ],
    tags: ["Packaging", "Skincare", "Sustainability", "D2C"],
  },
  "creative-editorial-magazine": {
    title: "Monthly Editorial Design for Lifestyle Magazine",
    client: "Premium Lifestyle Magazine",
    industry: "Media & Entertainment",
    location: "Jakarta",
    duration: "12 months (12 issues)",
    summary:
      "Monthly editorial design for premium lifestyle magazine. Cover design, 120-page layouts, infographics, art direction.",
    challenge:
      "24-year-old lifestyle magazine used dated in-house art direction (many free fonts, symmetrical layouts, no brand visual personality). Wanted to rebrand + modernize without losing loyal audience (avg age 45+).",
    approach:
      "Art direction overhaul: modern typography system (premium serif + sans pairing), flexible grid system for editorial vs photo essay, and signature element (yellow accent recurring). Per-issue cover concept: custom 3-day photoshoot per issue, high-end retouching post-production.",
    results: [
      { metric: "Cover-to-cover read rate", note: "subscriber survey" },
      { metric: "Subscription renewal", note: "industry avg 64%" },
      { metric: "Newsstand sell-through", note: "premium positioning" },
      { metric: "Ad rate card increase", note: "premium perceived value" },
    ],
    tags: ["Editorial", "Magazine", "Art Direction", "Print"],
  },
  "creative-animation-explainer-corporate": {
    title: "Corporate Sustainability Report Animation Explainer",
    client: "Listed Energy Sector Corporate",
    industry: "B2B / Corporate",
    location: "Jakarta",
    duration: "8 weeks",
    summary:
      "4-minute animation explainer for corporate sustainability report. Translates ESG complexity to stakeholder-friendly format.",
    challenge:
      "Listed energy corporation published a dense 280-page sustainability report (ESG). Low stakeholder engagement (90% downloaded but didn't read). Needed an explainer animation summarizing key metrics + sustainability commitments with an optimistic-but-credible tone.",
    approach:
      "Storyboarding: 4-minute explainer, Now-Future-How structure (current state, 2030 vision, roadmap). Animation style: 2D motion graphics with custom illustration, no stock assets. Data visualization for ESG metrics (carbon reduction, water saving, community impact). Bilingual ID + EN voiceover narration.",
    results: [
      { metric: "Video completion rate", note: "from 18% PDF download" },
      { metric: "Stakeholder engagement", note: "report awareness" },
      { metric: "Auto-answered investor questions", note: "via video" },
      { metric: "Award recognition", note: "industry association" },
    ],
    tags: ["Animation", "Corporate", "ESG", "Explainer"],
  },

  // ============================================================
  // SUHU AI (10)
  // ============================================================
  "ai-chatbot-whatsapp-klinik": {
    title: "WhatsApp AI Chatbot for Clinic Network",
    client: "Clinic Network (18 branches)",
    industry: "Clinics & Healthcare",
    location: "Jabodetabek + Bandung",
    duration: "10 weeks",
    summary:
      "WhatsApp AI chatbot to handle bookings + FAQ + patient recalls. Replaced 6 admins, handles 12k messages/day.",
    challenge:
      "Clinic network with 18 branches got 12,000+ WhatsApp messages/day (bookings, FAQ, complaints). 6 admins weren't enough, avg response time 4 hours (lost bookings). 80% of questions were repetitive (hours, location, treatment prices).",
    approach:
      "Built AI chatbot with GPT-4 + custom knowledge base of 600+ clinic FAQs + booking system integration. Flow: classify intent (FAQ vs booking vs complaint), route to handler. For bookings: collect data → check real-time slots → confirm. For complaints: escalate to human with context summary.",
    results: [
      { metric: "Auto-handled rate", note: "FAQ + booking" },
      { metric: "Response time", note: "from 4 hours" },
      { metric: "Chatbot-completed bookings", note: "monthly" },
      { metric: "Admins redirected", note: "to high-touch tasks" },
    ],
    tags: ["AI Chatbot", "WhatsApp", "Healthcare", "GPT-4"],
  },
  "ai-customer-service-bot-ecommerce": {
    title: "AI Customer Service Bot for Fashion E-commerce",
    client: "Fashion E-commerce Brand",
    industry: "Fashion & Retail",
    location: "Indonesia",
    duration: "8 weeks",
    summary:
      "AI customer service bot for fashion e-commerce. Handles order status, returns/refunds, size recommendations.",
    challenge:
      "Fashion e-commerce brand received 4,800+ CS inquiries/day during peak season. 12-person CS team burned out, 6+ hour response time, and 24% size return rate due to customer size confusion.",
    approach:
      "AI bot stack: GPT-4 + product database + order management integration. Capability: real-time order status, size recommendations based on purchase history + body data, self-service return/refund flow, and human escalation when frustration detected (sentiment analysis).",
    results: [
      { metric: "Auto-resolved rate", note: "without human" },
      { metric: "Peak response time", note: "from 6 hours" },
      { metric: "Size return rate", note: "from 24% (size AI rec)" },
      { metric: "Customer satisfaction", note: "post-chat survey" },
    ],
    tags: ["AI", "Customer Service", "E-commerce", "GPT-4"],
  },
  "ai-content-automation-socmed": {
    title: "AI Content Automation for Social Media Agency",
    client: "Social Agency Managing 40+ Accounts",
    industry: "B2B / Agency",
    location: "Jakarta",
    duration: "12 weeks",
    summary:
      "AI workflow for social agency content production: ideation, copywriting, image generation, scheduling automation.",
    challenge:
      "Social media agency managed 40+ client accounts, producing 800+ posts/week. 18 content writers were exhausted (avg 2 hours/post), creative output growing repetitive (deadline pressure), and clients complained about visual consistency.",
    approach:
      "Built AI workflow in n8n: ideation with Claude (per client brand voice), copywriting with GPT-4 trained on client tone, image generation with Midjourney using per-brand style presets, and auto-scheduling via Buffer/Hootsuite. Human review 5 min/post (approve/edit) instead of writing from scratch.",
    results: [
      { metric: "Content production time", note: "from 2 hours" },
      { metric: "Output volume", note: "same team size" },
      { metric: "Client satisfaction", note: "consistency improvement" },
      { metric: "Margin improvement", note: "lower cost per post" },
    ],
    tags: ["AI Workflow", "Content Automation", "Agency", "n8n"],
  },
  "ai-lead-qualification-properti": {
    title: "AI Lead Qualification for Property Developer",
    client: "Large Property Developer",
    industry: "Property",
    location: "Tangerang, Banten",
    duration: "10 weeks",
    summary:
      "AI lead scoring + first-touch qualification for 320+ marketing agents. High-intent leads to senior agents, browsing to nurturing.",
    challenge:
      "Developer received 8,400+ leads/month from multi-channels. Manual routing to 320 agents wasn't optimal (top agents burned out with bad leads, junior agents got no good leads). Lead-to-booking conversion 4.2%, target 8%+.",
    approach:
      "AI lead scoring: classify intent (browsing, comparison, ready-to-buy) using NLP analysis of WhatsApp messages + on-site behavior tracking. High-intent → senior agent (priority routing), comparison → educate via WhatsApp drip + senior agent later, browsing → nurturing flow + email. Daily model retraining.",
    results: [
      { metric: "Lead-to-booking rate", note: "from 4.2%" },
      { metric: "Senior agent productivity", note: "deals/agent/month" },
      { metric: "Junior agent conversion", note: "got appropriate leads" },
      { metric: "Marketing ROI", note: "same ad spend" },
    ],
    tags: ["AI", "Lead Scoring", "Property", "Sales Routing"],
  },
  "ai-internal-gpt-legal": {
    title: "Custom Internal GPT for Law Firm",
    client: "Law Firm (80 Lawyers)",
    industry: "Legal Services",
    location: "Jakarta",
    duration: "14 weeks",
    summary:
      "Custom internal GPT for 80 lawyers with RAG knowledge base of 12k historical legal documents. PDP Law compliant.",
    challenge:
      "Law firm with 80 lawyers (junior to partner) spent 30%+ of time researching historical case law. Knowledge scattered across 12,000+ Dropbox + Sharepoint documents. Junior lawyers struggled to find precedents, partners had no time to mentor.",
    approach:
      "Custom GPT-4 with RAG (retrieval augmented generation) over 12k historical legal documents. On-premise hosting (sensitive data). Capability: query case law with citations, draft initial memos with firm templates, and compliance check against current regulations. Full audit log for compliance.",
    results: [
      { metric: "Lawyer research time", note: "vs manual search" },
      { metric: "Junior productivity", note: "billable hours" },
      { metric: "Knowledge retention", note: "departing lawyer impact -78%" },
      { metric: "12-month ROI", note: "investment vs billable saved" },
    ],
    tags: ["Custom GPT", "RAG", "Legal", "Knowledge Base"],
  },
  "ai-sales-playbook": {
    title: "AI Sales Playbook + Coach for B2B Sales",
    client: "B2B SaaS Sales Team",
    industry: "B2B SaaS",
    location: "Jakarta",
    duration: "12 weeks",
    summary:
      "AI sales coach analyzing call recordings, suggesting objection handling, and generating per-prospect follow-up emails.",
    challenge:
      "B2B SaaS sales team of 24 had 11% win rate (target 18%). Sales manager spent 6+ hours/week manually reviewing call recordings. New hire ramp-up was 4 months to target. Knowledge was tribal (top-performer-only).",
    approach:
      "Built AI sales playbook: auto-transcribed call recordings analyzed (objections raised, customer signals, talk-listen ratio). Per-call coach feedback: 'objection X handled well, missed Y signal at 14:30'. Per-prospect follow-up email generator with context. Win-pattern learning from top performers.",
    results: [
      { metric: "Team win rate", note: "from 11%" },
      { metric: "New hire ramp-up", note: "from 4 months" },
      { metric: "Manager coach hours saved", note: "AI pre-screen" },
      { metric: "Average deal size", note: "better objection handling" },
    ],
    tags: ["AI Sales", "B2B", "Coach", "Call Analysis"],
  },
  "ai-seo-content-generation": {
    title: "AI SEO Content Generation at Scale",
    client: "E-commerce (12k Products)",
    industry: "E-commerce",
    location: "Indonesia",
    duration: "10 weeks",
    summary:
      "AI workflow generating 12k SEO-optimized product descriptions for large e-commerce. Per product unique + brand voice.",
    challenge:
      "E-commerce with 12,000 products had mostly copy-paste vendor descriptions (generic, not SEO-optimized). Manual rewrite needed 12 months + 8 content writers. SEO traffic stuck, internal team had no bandwidth.",
    approach:
      "AI workflow: scrape product specs + brand info → generate unique descriptions with GPT-4 trained on brand voice (Suhu brand tone retained). Include: meta title, meta description, schema markup, and internal link suggestions. Human review on 10% sample for quality. Bulk publish via API.",
    results: [
      { metric: "Content production time", note: "vs 12 months manual" },
      { metric: "Cost saving", note: "vs hiring writers" },
      { metric: "Organic traffic", note: "6 months post-update" },
      { metric: "Product page conversion", note: "better descriptions" },
    ],
    tags: ["AI Content", "SEO", "E-commerce", "Scale"],
  },
  "ai-image-upscale-product": {
    title: "AI Image Enhancement for 8,000 Product Photos",
    client: "SME Retailer Marketplace",
    industry: "E-commerce",
    location: "Indonesia",
    duration: "6 weeks",
    summary:
      "AI workflow upscaling + cleaning 8,000 product photos from SME sellers. Consistent quality for marketplace listings.",
    challenge:
      "SME marketplace received product photos from sellers with highly variable quality (many used phone cameras, bad lighting, distracting backgrounds). Poor listing quality reduced marketplace conversion rate, but asking sellers to re-shoot wasn't feasible.",
    approach:
      "AI workflow: detect product → segment from background → enhance quality (2x upscale, denoise, lighting balance) → replace background with white/lifestyle. Stack: Segment Anything + Real-ESRGAN + Stable Diffusion inpainting. Batch processed 1,000 images/hour.",
    results: [
      { metric: "Image quality consistency", note: "passed marketplace QA" },
      { metric: "Marketplace conversion", note: "post-enhancement" },
      { metric: "Cost vs manual editing", note: "Rp 8k/image vs Rp 95k" },
      { metric: "Seller onboarding speed", note: "less photo back-and-forth" },
    ],
    tags: ["AI Image", "E-commerce", "Computer Vision", "Workflow"],
  },
  "ai-voice-call-center": {
    title: "Voice AI Call Center for Insurance",
    client: "Multifinance Insurance",
    industry: "Finance",
    location: "Jakarta",
    duration: "20 weeks",
    summary:
      "Voice AI bot handling inbound insurance calls: claim status, policy info, premium reminders. Native Bahasa Indonesia.",
    challenge:
      "Insurance with 240,000+ policies received 8,400+ inbound calls/day (mostly: claim status, policy info, premium reminders). 40-agent call center was overloaded, avg hold time 18 minutes, abandoned call rate 32%.",
    approach:
      "Voice AI with custom-trained TTS+STT model for Bahasa Indonesia (handles dialects + ID-EN code-switching). Real-time integration with core insurance system. Capability: claim status, policy info, premium payment intent, and smart routing to human (complex cases). Optional OJK voice biometric compliance.",
    results: [
      { metric: "Auto-handle rate", note: "FAQ + status queries" },
      { metric: "Avg hold time", note: "from 18 minutes" },
      { metric: "Abandoned call rate", note: "from 32%" },
      { metric: "Call center cost", note: "redirected to high-touch" },
    ],
    tags: ["Voice AI", "Insurance", "Call Center", "Bahasa Indonesia"],
  },
  "ai-rag-manufacturing-knowledge": {
    title: "RAG Knowledge Base for Manufacturing SOPs",
    client: "Tier-1 Automotive Manufacturer",
    industry: "Manufacturing",
    location: "Karawang, West Java",
    duration: "16 weeks",
    summary:
      "RAG-based knowledge assistant for 2,400 automotive manufacturer SOPs + technical docs. Replaces tribal knowledge transfer.",
    challenge:
      "Automotive manufacturer with 1,800 employees + 2,400 SOPs/technical documents (mostly PDFs + scans). Senior engineers aging (40%+ to retire in 5 years), tribal knowledge transfer wasn't structured. Junior engineers needed 18 months to ramp up.",
    approach:
      "RAG knowledge base stack: OCR for legacy scanned documents, embed all content to vector DB (Pinecone), query interface via internal Slack bot. Capability: 'how do I troubleshoot X process', 'show me SOP for Y'. Audit log + citations for traceability. On-premise hosting for security.",
    results: [
      { metric: "Engineer query response", note: "vs 2 hours manual" },
      { metric: "Junior ramp-up time", note: "from 18 months" },
      { metric: "SOP compliance audit", note: "external audit" },
      { metric: "Senior engineer time", note: "redirected to innovation" },
    ],
    tags: ["RAG", "Manufacturing", "Knowledge Base", "OCR"],
  },
};
