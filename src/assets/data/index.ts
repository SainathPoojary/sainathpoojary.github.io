export interface Project {
  slug: string;
  title: string;
  deployedLink?: string;
  githubLink?: string;
}

export interface Experience {
  slug: string;
  title: string;
  company: string;
  readme?: string;
  years: string;
  children?: Experience[];
}

export interface Blog {
  slug: string;
  title: string;
  markdown: string;
}

export const blogs: Blog[] = [
  {
    slug: "blog-async",
    title: "Async Javascript",
    markdown: "/blog-async",
  },
  {
    slug: "blog-learning-php",
    title: "Learning PHP",
    markdown: "/blog-learning-php",
  },
];

export const experiences: Experience[] = [
  {
    slug: "freelance-developer",
    title: "Freelance Developer",
    company: "Apna Cab",
    years: "2021 - Present",
  },
  {
    slug: "branding-catalyst",
    title: "React Native Intern",
    company: "Branding Catalyst",
    readme: `### hello world`,
    years: "2021 - 2022",
  },
];

export const projects: Project[] = [
  {
    slug: "raahi",
    title: "Raahi",
    deployedLink: "https://event-radar.netlify.app/",
    githubLink: "https://github.com/SainathPoojary/raahi.git",
  },
  {
    slug: "blockchain-certificate-generator",
    title: "Blockchain Certificate Generator",
    deployedLink: "https://event-radar.netlify.app/",
    githubLink: "https://github.com/SainathPoojary/raahi.git",
  },
  {
    slug: "docker-monitor",
    title: "Docker Monitoring Tool",
    deployedLink: "https://event-radar.netlify.app/",
    githubLink: "https://github.com/vaibhav30s/Hackniche_Code_Rizzz_PS_5.git",
  },

  {
    slug: "reserved-in",
    title: "Job Portal for Differently Abled",
    deployedLink: "https://event-radar.netlify.app/",
    githubLink: "https://github.com/vaibhav30s/Hackniche_Code_Rizzz_PS_5.git",
  },
  {
    slug: "lineup",
    title: "Lineup",
    deployedLink: "https://event-radar.netlify.app/",
    githubLink: "https://github.com/SainathPoojary/event-radar-frontend.git",
  },
  {
    slug: "image-drive",
    title: "Google Drive for Images",
    deployedLink: "https://event-radar.netlify.app/",
    githubLink: "https://github.com/SainathPoojary/node-image-drive/",
  },
  {
    slug: "event-radar",
    title: "Event Radar",
    deployedLink: "https://event-radar.netlify.app/",
    githubLink: "https://github.com/SainathPoojary/event-radar-frontend.git",
  },
];

const data = {
  projects: projects,
  blogs: blogs,
  experiences: experiences,
};

export default data;
