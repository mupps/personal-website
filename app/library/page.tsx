import Image from "next/image";
import { libraryItems } from "./library-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description: "Games, shows, movies, and books I enjoy.",
};

const currentLabels = {
  game: "Playing",
  show: "Watching",
  movie: "Watching",
  book: "Reading",
};

export default function Library() {
  return (
    <section>
      <header className="page-heading">
        <h1>My Library</h1>
        <p>
          What I’ve been enjoying lately, alongside a few favorites I keep
          coming back to.
        </p>
      </header>
      <div className="library-grid">
        {libraryItems.map((item) => (
          <article key={item.title} className="library-item">
            <div className="library-cover">
              <Image
                src={item.coverImage}
                alt={`${item.title} cover`}
                fill
                className="object-cover"
                sizes="(max-width: 600px) calc((100vw - 66px) / 2), (max-width: 880px) calc((100vw - 128px) / 3), 251px"
              />
            </div>
            <h2>{item.title}</h2>
            <div className="library-meta">
              <span
                className={item.status === "current" ? "current" : undefined}
              >
                {item.status === "current"
                  ? currentLabels[item.type]
                  : "Completed"}
              </span>
              <span aria-hidden="true"> · </span>
              <time dateTime={item.startDate}>
                {new Date(`${item.startDate}-01T00:00:00Z`).toLocaleDateString(
                  "en-US",
                  { month: "short", year: "numeric", timeZone: "UTC" },
                )}
              </time>
            </div>
            {item.thoughts && <p>{item.thoughts}</p>}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                View details ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
