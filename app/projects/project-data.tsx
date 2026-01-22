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
    title: "LeetCoach",
    slug: "leetcoach",
    year: 2025,
    description: "AI-powered LeetCode coaching platform with real-time assistance from Claude AI",
    longDescription: "LeetCoach provides an interactive coding environment where you can solve algorithmic problems with guidance from Claude 4.5 Sonnet. Get hints, explanations, code reviews, and complete solutions as you learn.",
    url: "https://github.com/mupps/leetcoach",
    technologies: ["Python", "TypeScript", "Next.js", "FastAPI", "LangChain", "Claude API", "Supabase", "Docker"],
    features: [
      "Built an AI coding coach with Claude 4.5 + LangChain to generate adaptive problems and hints in real time",
      "Loaded LeetCode problems and user code into context for personalized assistance",
      "Secure sandboxed code execution environment with resource limits using Docker containers",
      "Implemented user authentication, progress tracking, and analytics with Supabase cloud services",
      "Async and await with FastAPI backend for handling real-time AI interactions and code execution requests"
    ],
    githubUrl: "https://github.com/mupps/leetcoach",
  },
  {
    title: "NFT Market Monitoring Bot",
    slug: "opensea-explorer",
    year: 2023,
    description: "A Discord bot that provides real-time ETH network updates via web scraping and webhooks",
    longDescription: "A Discord bot that provides real-time updates on OpenSea NFT project floor prices, tracks ETH wallet activity, and converts currencies. An exploration into web scraping, Discord bot development, and real-time data delivery.",
    url: "https://github.com/mupps/opensea-explorer-rewrite",
    technologies: ["Python", "BeautifulSoup", "JavaScript", "Discord API", "MongoDB"],
    features: [
      "Information provided directly into Discord channels via bot commands",
      "Web scraping via Puppeteer/BeautifulSoup for OpenSea floor price tracking",
      "Developed wallet tracker feature using Cron jobs for updates",
      "Hosted locally with proxies using Raspberry Pi to 10+ discord communities when active"
    ],
    githubUrl: "https://github.com/mupps/opensea-explorer-rewrite",
    images: ["/library/projects/nftbot.png"]
  },
  {
    title: "Guava",
    slug: "guava",
    year: 2022,
    description: "Marketplace app for buying and selling products with real-time chat",
    longDescription: "A full-featured marketplace application that enables users to buy and sell products. Built with modern web technologies (MERN) and focused on providing a seamless user experience with real-time updates.",
    url: "https://github.com/mupps/guava-marketplace-app",
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
    technologies: ["React", "Node.js", "Express", "AWS DynamoDB", "Socket.IO", "Redux"],
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