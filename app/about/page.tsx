import Image from "next/image";
import { socialLinks, metaData } from "../lib/config";
import React from "react";
import JobOrganizer from "../components/job-organizer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Me",
};


export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="mb-12">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block mt-5 mb-8 mx-auto grayscale-0"
          unoptimized
          width={200}
          height={200}
          priority
        />
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Hi there! I'm {metaData.name}, better known as Armaan, a passionate technologist and tinkerer based in California.
            I specialize in building modern full-stack web applications, but also enjoy exploring emerging technologies in AI and Machine Learning.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Journey</h2>
          <p className="mb-6">
            With several years of experience in software development, I've worked on a diverse range of projects
            from web applications to system architecture. I'm particularly experienced in building user-friendly, 
            efficient, and scalable web applications through React, Node.js, and Express. I also have skills and projects using Python and Java
            from my time in college.
          </p>

          <JobOrganizer />

          <h2 className="text-2xl font-semibold mt-8 mb-4">Beyond Programming...</h2>
          <p className="mb-6">
            When I'm not coding, you can often find me searching for my next TV series to binge watch or my next video game to dabble in.
            Here is my library of what I've been consuming recently.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Let's Connect!</h2>
          <p className="mb-6">
            I'm always open to interesting conversations and collaboration opportunities,
            whether it be professional or personal. You can reach me at {socialLinks.email.slice(7) + " "}
            or through any of these platforms as well:
          </p>
          
          <div className="flex gap-4 mt-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Twitter
            </a>
            <a
              href={socialLinks.email}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
