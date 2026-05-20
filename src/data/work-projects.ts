export type ProjectType = "refinement" | "from-scratch";

export type Testimonial = {
  quote: string;
  clientName: string;
  roleCompany: string;
};

export type WorkProject = {
  id: string;
  slug: string;
  type: ProjectType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  beforeImages: string[];
  afterImages: string[];
  showcaseImages: string[];
  liveUrl: string;
  duration: string;
  testimonial?: Testimonial;
  completionDate: string;
  featuredOnHome: boolean;
  thisMonthRefinement: boolean;
  tags: string[];
  outcomes: string[];
};

export const workProjects: WorkProject[] = [
  // TODO: Replace placeholder image paths with real project screenshots from /public/work.
  {
    id: "lettrblack-edtech",
    slug: "lettrblack-edtech-website",
    type: "from-scratch",
    title: "LettrBlack — Collaborative Student Learning Platform",
    shortDescription:
      "Designed and built a full-featured edtech SaaS landing page for a collaborative student learning platform, with cinematic UI, waitlist funnel, and feature storytelling.",
    fullDescription:
      "The client needed a fast launch with premium visuals and simple content flow. We delivered a conversion-focused structure, clean UI components, and deployment-ready pages.",
    beforeImages: [],
    afterImages: [],
    showcaseImages: [],
    liveUrl: "https://lettrblack.in",
    duration: "4 days",
    completionDate: "2026-03-12",
    featuredOnHome: true,
    thisMonthRefinement: false,
    tags: ["Built from Scratch", "Edtech", "SaaS", "Website"],
    outcomes: [
      "Launch-ready in one week",
      "Cinematic, scroll-driven product storytelling",
      "Mobile-first and conversion-focused layout",
    ],
  },
  {
    id: "growth-agency-refinement",
    slug: "growth-agency-redesign",
    type: "refinement",
    title: "The Growth Agency Website Redesign",
    shortDescription:
      "Transformed a cluttered, low-converting landing page into a high-impact, conversion-focused experience with clear messaging and stronger visual hierarchy.",
    fullDescription:
      "The original website lacked clarity, strong messaging, and visual hierarchy, leading to poor user engagement. We restructured the layout, simplified the copy, improved contrast, and introduced a more persuasive flow focused on conversions.",
    beforeImages: ["/work/before-1.png"],
    afterImages: ["/work/before-2.png"],
    showcaseImages: [],
    liveUrl: "https://thegrowthagency.in",
    duration: "3 days",
    // TODO: Replace this placeholder testimonial with the final approved client quote.
    testimonial: {
      quote:
        "The new website finally reflects our mission. Visitors now understand what we do within seconds.",
      clientName: "The Growth Agency Team",
      roleCompany: "Operations, The Growth Agency",
    },
    completionDate: "2026-04-02",
    featuredOnHome: true,
    thisMonthRefinement: true,
    tags: ["Refinement", "Digital Agency", "Conversion-focused"],
    outcomes: [
      "Clearer messaging and value proposition",
      "Improved visual hierarchy and trust perception",
      "Enhanced conversion rate by 25%",
    ],
  },
  {
    id: "monkey-fitness",
    slug: "monkey-fitness-website",
    type: "from-scratch",
    title: "Monkey Fitness Website",
    shortDescription:
      "A bold, high-contrast gym website with strong typography, gallery, and clear CTAs.",
    fullDescription:
      "Designed and built a modern fitness website with clear navigation, gallery sections, and a conversion-ready contact flow. Focused on responsive layout and strong visual hierarchy.",
    beforeImages: [],
    afterImages: [],
    showcaseImages: ["/work/monkeyfitness.png"],
    liveUrl: "https://monkeyfitness.vercel.app/#/",
    duration: "2 days",
    completionDate: "2026-05-05",
    featuredOnHome: true,
    thisMonthRefinement: false,
    tags: ["Built from Scratch", "Fitness", "Website"],
    outcomes: ["Strong hero + CTAs", "Responsive gallery layout", "Fast, modern dark UI"],
  },
  {
    id: "kodak-express-usha",
    slug: "kodak-express-usha-photo-studio",
    type: "from-scratch",
    title: "Kodak Express Usha Photo Studio",
    shortDescription:
      "Built a full multi-page photography studio website for a Bengaluru-based Kodak Express franchise — showcasing wedding, newborn, maternity, graduation, and corporate photography with a bold editorial aesthetic.",
    fullDescription:
      "Built a full multi-page photography studio website for a Bengaluru-based Kodak Express franchise — showcasing wedding, newborn, maternity, graduation, and corporate photography with a bold editorial aesthetic.",
    beforeImages: [],
    afterImages: [],
    showcaseImages: [],
    liveUrl: "https://kodakexpress.vercel.app/index.html",
    duration: "5 days",
    completionDate: "2026-05-10",
    featuredOnHome: false,
    thisMonthRefinement: false,
    tags: ["Built from Scratch", "Photography", "Local Business", "Website"],
    outcomes: [
      "Multi-page site with portfolio, services, testimonials, and contact",
      "Strong visual hierarchy for a photo-first brand",
      "Mobile-optimised and fast-loading",
    ],
  },
  {
    id: "navarang-dental",
    slug: "navarang-dental-clinic",
    type: "from-scratch",
    title: "Navarang Dental Clinic & Maxillofacial Centre",
    shortDescription:
      "Designed and developed a warm, trust-building dental clinic website for a gold-medallist-led practice in Rajajinagar, Bengaluru — covering multi-speciality services, gallery, patient testimonials, and appointment booking.",
    fullDescription:
      "Designed and developed a warm, trust-building dental clinic website for a gold-medallist-led practice in Rajajinagar, Bengaluru — covering multi-speciality services, gallery, patient testimonials, and appointment booking.",
    beforeImages: [],
    afterImages: [],
    showcaseImages: [],
    liveUrl: "https://navrangdental.vercel.app/",
    duration: "4 days",
    completionDate: "2026-05-12",
    featuredOnHome: false,
    thisMonthRefinement: false,
    tags: ["Built from Scratch", "Healthcare", "Local Business", "Website"],
    outcomes: [
      "Clear service breakdown with 6 specialities",
      "Soft, trustworthy design language",
      "Appointment CTA prominently placed on every page",
    ],
  },
  {
    id: "royal-studio",
    slug: "royal-studio-photography",
    type: "from-scratch",
    title: "Royal Studio Photography & Videography",
    shortDescription:
      "Built a sleek, modern website for Royal Studio — a professional photography and videography studio — designed to showcase their portfolio and attract new client bookings.",
    fullDescription:
      "Built a sleek, modern website for Royal Studio — a professional photography and videography studio — designed to showcase their portfolio and attract new client bookings.",
    beforeImages: [],
    afterImages: [],
    showcaseImages: [],
    liveUrl: "https://royal-photo.vercel.app/",
    duration: "3 days",
    completionDate: "2026-05-15",
    featuredOnHome: false,
    thisMonthRefinement: false,
    tags: ["Built from Scratch", "Photography", "Videography", "Website"],
    outcomes: [
      "Visual-first layout that lets the work speak",
      "Strong CTA for booking sessions",
      "Clean, professional aesthetic",
    ],
  },
];

export const thisMonthRefinementProject =
  workProjects.find((project) => project.thisMonthRefinement) ?? null;

export const featuredHomeProjects = workProjects.filter(
  (project) => project.featuredOnHome,
);
