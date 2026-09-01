import { Metadata } from "next";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
}

const DEFAULT_TITLE = "Girish Lakhotya — The Bondsman of India | Bond Smart";
const DEFAULT_DESCRIPTION = "Official platform of Girish Lakhotya ('The Bondsman of India'). Discover insights on bail bonds reform, legal rights, and Bond Smart — the future of bail bonds in India.";
const SITE_URL = "https://girishlakhotiya.com";
const DEFAULT_OG_IMAGE = "https://girishlakhotiya.com/images/girish/banner2.png";

export function generatePageMetadata({
  title,
  description,
  canonical,
  ogImage,
  type = "website",
}: SEOProps = {}): Metadata {
  const metaTitle = title ? `${title} | Girish Lakhotya` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Girish Lakhotya — The Bondsman of India",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      type: type,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      creator: "@girishlakhotya",
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Girish Lakhotya",
    alternateName: "The Bondsman of India",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    jobTitle: "Founder & Legal Innovator",
    worksFor: {
      "@type": "Organization",
      name: "Bond Smart",
    },
    sameAs: [
      "https://www.youtube.com/@girish-lakhotiya",
      "https://www.linkedin.com/in/girish-lakhotya",
      "https://x.com/girishlakhotya",
    ],
    description: DEFAULT_DESCRIPTION,
  };
}

export function generateBondSmartJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bond Smart",
    founder: {
      "@type": "Person",
      name: "Girish Lakhotya",
    },
    url: `${SITE_URL}/bond-smart`,
    description: "Bond Smart is the digital platform designed to bring transparency, speed, and intelligence to India's bail ecosystem.",
  };
}
