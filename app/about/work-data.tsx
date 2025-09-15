export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    title: "Full Stack Software Engineer",
    company: "GoGo Medical Transport",
    period: "2023-Present",
    description: "Led development of scalable portal for case managers using MERN stack. Implementing CI/CD pipelines and improving system performance.",
    achievements: [
      "Developed a comprehensive MERN portal enabling case managers to efficiently request transportation rides online",
      "Applied JWT authentication for secure user access and a live updating ride queue for real-time trip info",
      "Integrated with the MediRoutes API to streamline ride information delivery to the dispatch team",
      "Enhanced scheduling efficiency and reduced wait times for ride requests"
    ],
    technologies: ["React", "Node.js", "Express", "Tailwind", "Docker", "MongoDB"]
  },
  {
    title: "Software Engineer Intern",
    company: "arr[DUDE]",
    period: "2020-2021",
    description: "Developed and maintained multiple client-facing applications. Worked closely with design team to implement responsive UI/UX solutions.",
    achievements: [
      "Collaborated with a dynamic team to develop a political-themed binary puzzle game, enhancing user engagement",
      "Designed and implemented a secure login system using JWT authentication with e-mail signup",
      "Deployed web services on AWS EC2 and Route53, ensuring high availability and scalability of the application"
    ],
    technologies: ["React", "Express", "MongoDB", "Angular", "AWS"]
  },
  {
    title: "Computer Science Research Assistant",
    company: "University of Pennsylvania",
    period: "2019",
    description: "Worked with Prof. Steve Zdancewic on the Verified LLVM (Vellvm) project to advance program reasoning techniques within the project.",
    achievements: [
      "Collaborated with team of PhD and Masters students weekly to discuss project progress and challenges",
      "Designed and implemented OCaml test cases to validate LLVM intermediate representations and transformations",
      "Enhanced framework reliability, strengthening program analysis tools within Penn Engineering"
    ],
    technologies: ["OCaml", "Git", "CLI", "Linux/Unix", "Emacs"]
  }
];
