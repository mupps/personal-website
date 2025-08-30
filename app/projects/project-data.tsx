export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Guava",
    year: 2022,
    description: "Marketplace app for buying and selling products",
    url: "https://github.com/mupps",
  },
  {
    title: "FIFA Stats App",
    year: 2021,
    description: "Comparing game stats in FIFA 2017 VS 2022",
    url: "https://github.com/mupps",
  },
  {
    title: "PennBook",
    year: 2020,
    description: "Facebook-style social media app",
    url: "https://github.com/mupps",
  },
];
