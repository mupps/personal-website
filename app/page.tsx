import Image from "next/image";
import { socialLinks } from "./lib/config";
import React from "react";
import { FadeIn } from "./components/fade-in";

export default function Page() {
  return (
    <section>
      <FadeIn>
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 mb-12">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
              Greetings! I'm Armaan.
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Thanks for stopping by! It's a work in progress, but this is where I try to
              organize and centralize my thoughts, projects, work, and ideas.
            </p>
          </div>
          <a href={socialLinks.linkedin} target="_blank" className="shrink-0 transition-transform hover:scale-105 duration-300">
            <Image
              src="/profile.png"
              alt="Profile photo"
              className="rounded-full bg-gray-100 grayscale-0 hover:grayscale transition-all duration-300 border-2 border-neutral-200 dark:border-neutral-800"
              unoptimized
              width={140}
              height={140}
              priority
            />
          </a>
        </div>
        <div className="prose prose-neutral dark:prose-invert max-w-none delay-100">
          <p>
            You can find more about me and some of my work experiences{" "}
            <a
              href="/about"
            >
              here
            </a>
            .{" "}👋
          </p>
          <p>
            Take a look at my some of my favorite {" "}
            <a
              href="/projects"
            >
              projects
            </a>
            ! {" "}🤖
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
