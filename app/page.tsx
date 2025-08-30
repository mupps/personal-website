import Image from "next/image";
import { socialLinks } from "./lib/config";
import React from "react";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale-0 hover:grayscale"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Greetings! I'm Armaan.</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Thanks for stopping by! It's a work in progress, but this is where I try to
          organize and centralize my thoughts, projects, work, and ideas.
        </p>
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
        {/* <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p> */}
      </div>
    </section>
  );
}
