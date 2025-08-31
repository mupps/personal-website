import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my personal projects and technical work",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/projects/${project.slug}`}
            className="block p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  {project.title}
                </h2>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {project.year}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 text-sm bg-neutral-200 dark:bg-neutral-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1.5 text-sm bg-neutral-200 dark:bg-neutral-700 rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}