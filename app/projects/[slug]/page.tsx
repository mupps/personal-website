import { projects } from "../project-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Project`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          {project.description}
        </p>
        <div className="flex gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              GitHub ↗
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Live Demo ↗
            </Link>
          )}
        </div>
      </header>

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            width={800}
            height={400}
            className="w-full"
          />
        </div>
      )}

      {/* Project Details */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p>{project.longDescription}</p>
        </section>

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-neutral-700 dark:text-neutral-300">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Back Link */}
      <div className="mt-12 mb-8">
        <Link
          href="/projects"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          ← Back to Projects
        </Link>
      </div>
    </article>
  );
}
