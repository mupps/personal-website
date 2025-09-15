export interface Project {
  title: string;
  slug: string;
  year: number;
  description: string;
  longDescription: string;
  url: string;
  technologies: string[];
  features: string[];
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  youtubeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Guava",
    slug: "guava",
    year: 2022,
    description: "Marketplace app for buying and selling products with real-time chat",
    longDescription: "A full-featured marketplace application that enables users to buy and sell products. Built with modern web technologies (MERN) and focused on providing a seamless user experience with real-time updates.",
    url: "https://github.com/mupps",
    technologies: ["React", "React Native", "Node.js", "MongoDB", "JWT", "Socket.IO"],
    features: [
      "Secure login and registration with JWT",
      "Real-time chat and notifications between buyers and sellers using Socket.IO",
      "Product search and filtering",
      "User ratings and reviews",
      "Image upload and management"
    ],
    githubUrl: "https://github.com/mupps/guava-marketplace-app",
  },
  {
    title: "FIFA Stats App",
    slug: "fifa-stats",
    year: 2021,
    description: "Comparing game and player stats in FIFA 2017 VS 2022",
    longDescription: "An interactive web application that visualizes and compares player statistics between FIFA 2017 and FIFA 2022. Features detailed analytics, player comparisons, and trend analysis between the two datasets.",
    url: "https://github.com/mupps/fifa-stats-app",
    technologies: ["React", "Recharts", "D3.js", "Python", "pandas", "MySQL", "MongoDB"],
    features: [
      "MySQL database populated from FIFA 2017 and 2022 datasets using Pandas",
      "User authentication and session management using cookies",
      "Data visualization using Recharts/D3.js library in React",
      "Player stat comparisons and trend analysis",
      "RESTful API endpoints for data retrieval"
    ],
    githubUrl: "https://github.com/mupps/fifa-stats-app",
    youtubeUrl: "https://www.youtube.com/watch?v=AmsKZljD1Eo"
  },
  {
    title: "PennBook",
    slug: "pennbook",
    year: 2020,
    description: "Facebook-style social networking platform",
    longDescription: "A social networking platform with modern features like real-time chat, news integration, and social network visualization.",
    url: "https://github.com/mupps",
    technologies: ["React", "Node.js", "Express", "AWS DynamoDB", "Socket.IO", "Redux" ],
    features: [
      "User authentication and profiles",
      "News feed with real-time updates",
      "Friend network visualization using JavaScript Infovis Toolkit",
      "Comment and reaction system",
      "Real-time chat functionality using Socket.IO",
    ],
    // images: ["/projects/pennbook/feed.png"],
    githubUrl: "https://github.com/mupps"
  }
];