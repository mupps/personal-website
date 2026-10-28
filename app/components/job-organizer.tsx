"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { workExperiences } from "../about/work-data";

export default function JobOrganizer() {
  const [selectedJob, setSelectedJob] = useState(0);
  const id = useId();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = (index + 1) % workExperiences.length;
        break;
      case "ArrowLeft":
        next = (index - 1 + workExperiences.length) % workExperiences.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = workExperiences.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setSelectedJob(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="experience-list not-prose">
      <div
        className="experience-tabs"
        role="tablist"
        aria-label="Work experience by year"
      >
        {workExperiences.map((experience, index) => (
          <button
            key={`${experience.company}-${experience.period}`}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            id={`${id}-tab-${index}`}
            role="tab"
            type="button"
            aria-selected={selectedJob === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={selectedJob === index ? 0 : -1}
            onClick={() => setSelectedJob(index)}
            onKeyDown={(event) => navigateTabs(event, index)}
          >
            {experience.period.replaceAll("-", "–")}
          </button>
        ))}
      </div>
      {workExperiences.map((experience, index) => (
        <section
          key={`${experience.company}-${experience.period}`}
          className="experience-panel"
          id={`${id}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${index}`}
          tabIndex={0}
          hidden={selectedJob !== index}
        >
          <div className="experience-heading">
            <h3>{experience.title}</h3>
            <span className="period">
              {experience.period.replaceAll("-", "–")}
            </span>
          </div>
          <p className="company muted">{experience.company}</p>
          <p className="muted">{experience.description}</p>
          <ul className="experience-achievements list-disc pl-5 space-y-2 muted">
            {experience.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
          <div className="tech-list mt-4">
            {experience.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
