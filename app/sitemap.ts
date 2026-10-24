import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/contatti", "/privacy"].map((path) => ({
    url: `https://studiokobalto.com${path}`,
    changeFrequency: "monthly",
  }));
}
