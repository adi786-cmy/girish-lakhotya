// Centralized Content Data Layer for Girish Lakhotya — The Bondsman of India

export interface FounderProfile {
  name: string;
  positioning: string;
  tagline: string;
  portraitImage: string;
  heroImage: string;
  experienceYears: string;
  entrepreneursGuided: string;
  bioSummary: string;
  fullBioHtml: string;
  philosophy: string[];
  threePillars: { title: string; description: string }[];
  visionStatement: string;
  prachayGroup: {
    title: string;
    description: string;
    url: string;
  };
  prachayFoundation: {
    title: string;
    description: string;
  };
  socialLinks: {
    youtube: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    calendly: string;
    website: string;
  };
}

export interface BondSmartFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  status: "active" | "roadmap" | "placeholder";
}

export interface BondSmartContent {
  headline: string;
  subheadline: string;
  overview: string;
  problemStatement: string;
  visionText: string;
  features: BondSmartFeature[];
  faq: { question: string; answer: string }[];
  ctaUrl: string;
}

export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  // Phase 10 will add real IDs — keep schema ready, do not ship dummy youtubeId values.
  youtubeId?: string;
  youtubeUrl?: string;
  thumbnailUrl?: string;
  category: "Bail Reform" | "Legal Rights" | "Bond Smart" | "Finance & Business";
  publishedDate: string;
  duration: string;
  featured: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: "Bail Bonds" | "Legal Insights" | "Fintech & Justice" | "Leadership";
  author: string;
  publishedDate: string;
  readTime: string;
  featuredImage: string;
  featured: boolean;
  tags: string[];
}

export interface PodcastEpisode {
  id: string;
  slug: string;
  episodeNumber: number;
  title: string;
  description: string;
  guest?: string;
  guestRole?: string;
  publishedDate: string;
  duration: string;
  audioUrl?: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  featured: boolean;
}

export interface MediaMention {
  id: string;
  title: string;
  publication: string;
  date: string;
  pdfUrl?: string;
  summary: string;
  featured: boolean;
}

// -------------------------------------------------------------
// VERIFIED & EXTRACTED DATA FROM GIRISHLAKHOTIYA.COM
// -------------------------------------------------------------

export const founderProfile: FounderProfile = {
  name: "Girish Lakhotya",
  positioning: "The Bondsman of India",
  tagline: "Empowering business growth & building the future of bail bond access.",
  portraitImage: "/images/girish/banner2.png",
  heroImage: "/images/girish/banner2.png",
  experienceYears: "15+",
  entrepreneursGuided: "300+",
  bioSummary: "Girish Lakhotya is a financial expert, founder, and philanthropist with over 15 years of industry experience. Known as 'The Bondsman of India', his work bridges ground-level financial expertise with Bond Smart, the digital platform he is building for India's bail ecosystem.",
  fullBioHtml: `
    <p>Girish Lakhotya firmly believes that entrepreneurs are the backbone of our nation's economy. Having guided over <strong>300+ entrepreneurs towards growth</strong> over his 15+ years in financial services, Girish recognized that legal and financial complexity often leaves citizens and business owners stranded during critical moments.</p>
    <p>As the founder of <strong>Prachay Group</strong> and head of <strong>Prachay Foundation</strong>, he has dedicated his work to fostering financial empowerment, transparency, and practical knowledge. Today, known as <strong>"The Bondsman of India"</strong>, Girish is extending this mission to the legal sector by founding <strong>Bond Smart</strong>.</p>
    <p>His mandate with <strong>Bond Smart</strong> is simple: to establish an enabling ecosystem offering equitable, transparent, and fast access during bail bond proceedings across India.</p>
  `,
  philosophy: [
    "An empowered entrepreneur paves the way for a powerful economy.",
    "Embracing transparency, trust, and open-mindedness unleashes business potential.",
    "Direct, practical guidance over unnecessary complexity.",
    "Building software to make statutory legal access predictable."
  ],
  threePillars: [
    {
      title: "Identify",
      description: "A good business or statutory opportunity isn't always obvious. Learn to spot beneficial decisions early."
    },
    {
      title: "Understand",
      description: "Recognize the exact benefits, risks, and procedural requirements before making a financial or legal move."
    },
    {
      title: "Articulate",
      description: "Communicate your offering and statutory rights clearly to secure positive outcomes."
    }
  ],
  visionStatement: "Building Bond Smart so families, legal counsel, and sureties have clear, transparent access during bail bond proceedings.",
  prachayGroup: {
    title: "Prachay Group",
    description: "A financial solutions company dedicated to helping mid to large Indian businesses lead their next growth story.",
    url: "https://prachay.com"
  },
  prachayFoundation: {
    title: "Prachay Foundation",
    description: "Empowering small business owners and the less privileged through practical financial knowledge and guidance.",
  },
  socialLinks: {
    youtube: "https://www.youtube.com/@girish-lakhotiya",
    linkedin: "https://www.linkedin.com/in/girishlakhotiya/",
    twitter: "https://twitter.com/girishlakhotiya",
    facebook: "https://www.facebook.com/girish.lakhotiya",
    instagram: "https://www.instagram.com/girish_lakhotiya/",
    calendly: "https://calendly.com/girishl/30min",
    website: "https://girishlakhotiya.com"
  }
};

export const bondSmartData: BondSmartContent = {
  headline: "What Girish Is Building With Bond Smart",
  subheadline: "Bond Smart is the digital platform initiative designed by Girish Lakhotya to make India's bail bond process clear, structured, and fast.",
  overview: "Bond Smart brings together legal requirements, bond verification, and direct communication into one clear platform.",
  problemStatement: "The traditional bail process in India is filled with delays, paperwork confusion, and lack of clear guidance during emergencies.",
  visionText: "Bond Smart connects families, legal counsel, and sureties with real-time status and clear steps.",
  features: [
    {
      id: "transparency",
      title: "Step-by-Step Bail Guidance",
      description: "Clear instructions on required documents, court steps, and surety obligations.",
      iconName: "ShieldCheck",
      status: "active"
    },
    {
      id: "digital-assistance",
      title: "Digital Process Coordination",
      description: "Organized workflows for counsel and sureties to track filings and verification.",
      iconName: "FileText",
      status: "roadmap"
    },
    {
      id: "rapid-support",
      title: "Emergency Support Routing",
      description: "Direct contact routing during urgent bail emergency situations.",
      iconName: "Zap",
      status: "active"
    },
    {
      id: "institutional-trust",
      title: "Verified Compliance Network",
      description: "Standardized verification guidelines for legal bond processing.",
      iconName: "Building2",
      status: "roadmap"
    }
  ],
  faq: [
    {
      question: "What is Bond Smart?",
      answer: "Bond Smart is a platform being built by Girish Lakhotya to simplify and digitize the bail bond process in India."
    },
    {
      question: "How does Bond Smart help families?",
      answer: "Bond Smart provides clear guidance on bail eligibility, required paperwork, and direct next steps during legal emergencies."
    },
    {
      question: "When will Bond Smart be available?",
      answer: "Bond Smart is currently in rollout preparation. You can join the waitlist for updates."
    }
  ],
  ctaUrl: "/contact?subject=BondSmartInquiry"
};

export const sampleVideos: Video[] = [
  {
    id: "v-lEvUdbqm3M0",
    slug: "keynote-business-leadership-broadcast",
    title: "Girish Lakhotya — Keynote & Business Leadership Broadcast",
    description: "Watch Girish Lakhotya share perspectives on business growth, financial discipline, and leadership.",
    youtubeId: "lEvUdbqm3M0",
    youtubeUrl: "https://www.youtube.com/watch?v=lEvUdbqm3M0",
    thumbnailUrl: "https://i.ytimg.com/vi/lEvUdbqm3M0/maxresdefault.jpg",
    category: "Finance & Business",
    publishedDate: "Verified Broadcast",
    duration: "Watch Video",
    featured: true,
  },
  {
    id: "v-6gTfYLhx_X4",
    slug: "financial-strategy-capital-insights",
    title: "Girish Lakhotya — Financial Strategy & Capital Insights",
    description: "Insights on capital structuring, working capital management, and building resilient Indian enterprises.",
    youtubeId: "6gTfYLhx_X4",
    youtubeUrl: "https://www.youtube.com/watch?v=6gTfYLhx_X4",
    thumbnailUrl: "https://i.ytimg.com/vi/6gTfYLhx_X4/maxresdefault.jpg",
    category: "Finance & Business",
    publishedDate: "Verified Broadcast",
    duration: "Watch Video",
    featured: true,
  },
  {
    id: "v-HNXCpVVFEJ8",
    slug: "why-do-some-businesses-grow-while-others-remain-stuck",
    title: "Why do some businesses grow while others remain stuck?",
    description: "Girish Lakhotya discusses entrepreneurship fundamentals, scaling obstacles, and financial clarity for business leaders.",
    youtubeId: "HNXCpVVFEJ8",
    youtubeUrl: "https://www.youtube.com/watch?v=HNXCpVVFEJ8",
    thumbnailUrl: "https://i.ytimg.com/vi/HNXCpVVFEJ8/maxresdefault.jpg",
    category: "Finance & Business",
    publishedDate: "Verified Broadcast",
    duration: "Watch Video",
    featured: true,
  },
  {
    id: "v-M024q8m1pO8",
    slug: "what-does-it-take-to-build-a-500-crore-business",
    title: "What does it really take to build a ₹500+ crore business?",
    description: "Key principles of business expansion, sustainable financing, and long-term vision from founder Girish Lakhotya.",
    youtubeId: "M024q8m1pO8",
    youtubeUrl: "https://www.youtube.com/watch?v=M024q8m1pO8",
    thumbnailUrl: "https://i.ytimg.com/vi/M024q8m1pO8/maxresdefault.jpg",
    category: "Finance & Business",
    publishedDate: "Verified Broadcast",
    duration: "Watch Video",
    featured: true,
  },
  {
    id: "v-_2gCuuh8Atg",
    slug: "bond-smart-and-reform-perspective",
    title: "Girish Lakhotya — Bond Smart & Reform Perspective",
    description: "Perspectives on bail bonds reform, statutory rights, and building software for India's legal ecosystem.",
    youtubeId: "_2gCuuh8Atg",
    youtubeUrl: "https://www.youtube.com/watch?v=_2gCuuh8Atg",
    thumbnailUrl: "https://i.ytimg.com/vi/_2gCuuh8Atg/maxresdefault.jpg",
    category: "Bond Smart",
    publishedDate: "Verified Broadcast",
    duration: "Watch Video",
    featured: true,
  },
  {
    id: "v-elb45yfvb0c",
    slug: "how-to-start-a-business-after-your-9-5",
    title: "How to Start a Business After Your 9-5? | Rise With Rahul Podcast",
    description: "Girish Lakhotya, Founder & Chairman of Prachay Group, on scaling businesses, passive income, and wealth creation.",
    youtubeId: "elb45yfvb0c",
    youtubeUrl: "https://www.youtube.com/watch?v=elb45yfvb0c",
    thumbnailUrl: "https://i.ytimg.com/vi/elb45yfvb0c/maxresdefault.jpg",
    category: "Finance & Business",
    publishedDate: "Verified Broadcast",
    duration: "Watch Video",
    featured: true,
  },
];

export const sampleArticles: Article[] = [
  {
    id: "article-1",
    slug: "the-case-for-bail-reform-in-india",
    title: "Why Bail Bonds Need Clarity in India",
    excerpt: "Why legal clarity, simple steps, and software assistance are critical for protecting citizen rights.",
    body: `
      <h2>The Reality of Indian Bail Procedures</h2>
      <p>Bail is a constitutional right. Yet many families face confusion and delays simply because information is hard to find.</p>
      <h2>Making Information Accessible</h2>
      <p>When families face an emergency, knowing what documents are needed is the first step. Standardized guidelines protect everyone.</p>
      <h2>What We Are Doing</h2>
      <p>Through open video commentary and Bond Smart, we are making these steps clear for everyone.</p>
    `,
    category: "Bail Bonds",
    author: "Girish Lakhotya",
    publishedDate: "2026-08-10",
    readTime: "4 min read",
    featuredImage: "",
    featured: true,
    tags: ["Bail Reform", "Legal Rights", "Bond Smart"]
  },
  {
    id: "article-2",
    slug: "fintech-meets-justice-the-future-of-sureties",
    title: "How Software Can Simplify Legal Sureties",
    excerpt: "Exploring how digital workflows and structured verification can speed up legal bond processing.",
    body: `
      <h2>Software in the Legal Sector</h2>
      <p>Technology has simplified banking and payments across India. Legal bond coordination is the next natural step.</p>
      <h2>The Role of Bond Smart</h2>
      <p>Bond Smart is designed to give families and lawyers clear status updates and fast coordination.</p>
    `,
    category: "Fintech & Justice",
    author: "Girish Lakhotya",
    publishedDate: "2026-07-28",
    readTime: "5 min read",
    featuredImage: "",
    featured: true,
    tags: ["Fintech", "Software", "Bond Smart"]
  }
];

export const samplePodcasts: PodcastEpisode[] = [];
// Episode records cannot be verified from girishlakhotiya.com; Phase 10 will add real IDs.

// REAL MEDIA IMPRESSIONS EXTRACTED FROM GIRISHLAKHOTIYA.COM
export const verifiedMediaMentions: MediaMention[] = [
  {
    id: "media-1",
    title: "Prachay Advisors is Just the Right Finance Partner",
    publication: "The CEO Magazine",
    date: "July 2022",
    pdfUrl: "https://girishlakhotiya.com/wp-content/uploads/2023/05/20-Most-Valuable-Consulting-Companies-in-India-in-2022.pdf",
    summary: "Featured as one of the 20 Most Valuable Consulting Companies in India.",
    featured: true
  },
  {
    id: "media-2",
    title: "The People's Banker Revitalizing the BFSI Sector",
    publication: "CEO Insights",
    date: "Top 10 Leaders in BFSI - 2022",
    pdfUrl: "https://girishlakhotiya.com/wp-content/uploads/2023/05/CEO-Insight.pdf",
    summary: "Recognized among the Top 10 Leaders in BFSI (Banking, Financial Services, and Insurance).",
    featured: true
  },
  {
    id: "media-3",
    title: "A Perceptive Leader Who Drives Business Prospects With Financial Innovation",
    publication: "The CEO Magazine",
    date: "July 2022",
    pdfUrl: "https://girishlakhotiya.com/wp-content/uploads/2023/05/Top-10-leaders-in-BFSI-Banking-Financial-Services-and-Insurance-2022.pdf",
    summary: "Feature article on Girish Lakhotya's approach to financial innovation and business leadership.",
    featured: true
  }
];

export const getContentData = () => ({
  founder: founderProfile,
  bondSmart: bondSmartData,
  videos: sampleVideos,
  articles: sampleArticles,
  podcasts: samplePodcasts,
  media: verifiedMediaMentions,
});
