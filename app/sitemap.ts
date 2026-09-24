import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/approach",
    "/resume",
    "/results",
    "/contact",
    "/clients",
    "/services",
    "/services/contact",
    "/legal/privacy",
  ];
  return routes.map((route) => ({
    url: `https://ethanteng.com${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/legal/privacy" ? 0.3 : 0.7,
  }));
}
