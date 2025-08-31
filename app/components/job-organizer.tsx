"use client";
import React, { useState } from "react";
import { workExperiences } from "../about/work-data";

export default function JobOrganizer() {
  const [selectedJob, setSelectedJob] = useState(0);
  return (
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
  );
}