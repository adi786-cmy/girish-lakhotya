import { MetadataRoute } from "next";
import { sampleArticles, sampleVideos, samplePodcasts } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://girishlakhotiya.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/bond-smart",
    "/videos",
    "/thoughts",
    "/podcast",
    "/media",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route === "/bond-smart" ? 0.9 : 0.8,
  }));

  const safeDate = (dateStr?: string) => {
    if (!dateStr) return new Date();
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? new Date() : d;
  };

  const articleRoutes: MetadataRoute.Sitemap = sampleArticles.map((article) => ({
    url: `${baseUrl}/thoughts/${article.slug}`,
    lastModified: safeDate(article.publishedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const videoRoutes: MetadataRoute.Sitemap = sampleVideos.map((video) => ({
    url: `${baseUrl}/videos/${video.slug}`,
    lastModified: safeDate(video.publishedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const podcastRoutes: MetadataRoute.Sitemap = samplePodcasts.map((podcast) => ({
    url: `${baseUrl}/podcast/${podcast.slug}`,
    lastModified: safeDate(podcast.publishedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes, ...videoRoutes, ...podcastRoutes];
}
