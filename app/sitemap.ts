import { MetadataRoute } from "next";
import { metaData } from "./lib/config";
import { projects } from "./projects/project-data";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let routes = ["", "about", "projects", "library"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [
    ...routes,
    ...projects.map((project) => ({
      url: `${BaseUrl}projects/${project.slug}`,
    })),
  ];
}
