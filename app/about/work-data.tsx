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
    title: "Full-Stack Software Engineer",
    company: "GoGo Medical Transport",
    period: "2023-Present",
    description: "Led development of ride-request portal for case managers. Translating HIPAA requirements into secure, user-friendly features.",
    achievements: [
      "Built a HIPAA-compliant full-stack platform handling 10K+ monthly ride requests",
      "Implemented RBAC, secure APIs, audit logging, and real-time workflows with Django REST + WebSockets",
      "Shipped a React/TypeScript dashboard with <250ms P95 operational updates",
      "Automated CI/CD and deployed on Docker + EKS for 99.9% uptime and 50% lower cloud costs."
    ],
    technologies: ["React", "TypeScript", "Python", "Django", "PostgreSQL", "Docker", "Kubernetes", "AWS"]
  },
  {
    title: "Software Engineer Intern",
    company: "arr[DUDE]",
    period: "2020-2021",
    description: "Developed and maintained multiple client-facing applications. Worked closely with design team to implement responsive UI/UX solutions.",
    achievements: [
      "Collaborated with a dynamic team to develop a political-themed binary puzzle game, enhancing user engagement",
      "Designed and implemented a secure login system using JWT authentication with e-mail signup in Go/React",
      "Deployed web services on AWS EC2 and Route53, ensuring high availability and scalability of the application"
    ],
    technologies: ["React", "Express", "MongoDB", "Angular", "Go", "AWS"]
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
  },
  {
    title: "Machine Learning Researach Intern",
    company: "VerifAI",
    period: "2017",
    description: "Developed a function to decode verbal inputs into key parameters in the InZone mobile app to create voice commands using Python and Natural Language Tool Kit (NLTK) library.",
    achievements: [
      "Developed a function to decode verbal inputs into key parameters in the InZone mobile app using NLTK",
      "Constructed research report comparing InZone voice commands versus competitor apps such as SnapChat",
    ],
    technologies: ["Python", "NLTK", "Jupyter Notebooks"]
  }
];
