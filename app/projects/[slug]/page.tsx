import { projects } from "../project-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { YouTubeComponent } from "../../components/youtube";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug }: { slug: string } = await params;
  const project = projects.find((p) => p.slug === slug);
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

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="reading-page">
      <Link href="/projects" className="inline-block mt-8 mb-8 text-link">
        ← Back to Projects
      </Link>
      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-5">{project.title}</h1>
        <p className="muted leading-relaxed mb-5">{project.description}</p>
        <div className="flex gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub ↗
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
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
            className="w-full h-auto"
            sizes="(max-width: 728px) calc(100vw - 48px), 680px"
          />
        </div>
      )}

      {/* Project Video */}
      {project.youtubeUrl && (
        <div className="mb-8">
          <YouTubeComponent
            videoId={project.youtubeUrl.split("v=")[1]?.split("&")[0]}
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
          <div className="tech-list not-prose">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
