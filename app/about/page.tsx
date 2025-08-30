"use client";
import Image from "next/image";
import { socialLinks, metaData } from "../lib/config";
import React, { useState } from "react";
import { workExperiences } from "./work-data";


export default function AboutPage() {
  const [selectedJob, setSelectedJob] = useState(0);
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

          {/* Work Experience Section */}
          <div className="mt-8 mb-12">
            {/* Experience Tabs */}
            <div className="flex justify-center gap-2 mb-6">
              {workExperiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedJob(index)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedJob === index
                      ? 'bg-neutral-800 text-white dark:bg-white dark:text-neutral-800'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300'
                  }`}
                >
                  {exp.period}
                </button>
              ))}
            </div>

            {/* Experience Details */}
            <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-6 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{workExperiences[selectedJob].title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{workExperiences[selectedJob].company}</p>
              </div>
              
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                {workExperiences[selectedJob].description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-400">
                  {workExperiences[selectedJob].achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {workExperiences[selectedJob].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Beyond Programming...</h2>
          <p className="mb-6">
            When I'm not coding, you can often find me searching for my next TV series to binge watch or my next video game to dabble in.
            Here is my library of what I've been consuming recently.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Let's Connect!</h2>
          <p className="mb-6">
            I'm always open to interesting conversations and collaboration opportunities,
            whether it be professional or personal. My email is {socialLinks.email.slice(7)}.
            Feel free to reach out through any of these platforms:
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
