import Link from "next/link";
import { socialLinks } from "../lib/config";
import JobOrganizer from "../components/job-organizer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A little about Armaan, my work in software engineering, and life outside of code.",
};

export default function AboutPage() {
  return (
    <section className="reading-page">
      <header className="page-heading">
        <h1>About Me</h1>
      </header>
      <div className="prose max-w-none">
        <p>
          I’m Armaan, also known as mupps. I’m a software engineer and tinkerer
          from Southern California, now based in Frisco, Texas.
        </p>
        <p>
          I specialize in full-stack web applications and secure, reliable
          distributed systems. I’m interested in the intersection of
          entrepreneurship and technology, and I enjoy turning new ideas into
          working software.
        </p>
        <h2>My Work</h2>
        <p>
          I’ve worked on everything from political campaigns to healthcare
          platforms and ground control applications. Much of that work involves
          making complex systems feel straightforward for the people using them.
        </p>
        <JobOrganizer />
        <h2>Beyond Programming</h2>
        <p>
          When I’m not coding, I’m often looking for a new TV series or a game
          to get into. My <Link href="/library">library</Link> has some recent
          interests and all-time favorites.
        </p>
        <p>
          I also share occasional{" "}
          <a
            href={socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
          >
            writing on Medium
          </a>
          .
        </p>
        <h2>Let’s Connect</h2>
        <p>
          I’m always open to interesting conversations and collaboration. You
          can reach me at{" "}
          <a href={socialLinks.email}>{socialLinks.email.slice(7)}</a> or find
          me through the links below.
        </p>
      </div>
    </section>
  );
}
