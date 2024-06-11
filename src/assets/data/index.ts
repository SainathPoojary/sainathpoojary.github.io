export interface Project {
  title: string;
  live?: string;
  github?: string;
  figma?: string;
  video?: string;
  markdown?: string;
}

export interface Experience {
  title: string;
  company?: string;
  duration: string;
  markdown?: string;
}

export interface Blog {
  title: string;
  markdown: string;
}

const data: {
  projects: Project[];
  experiences: Experience[];
  blogs: Blog[];
} = {
  projects: [
    {
      title: "Blockchain Certificate Generator",
      github:
        "https://github.com/SainathPoojary/blockchain-certificate-generator",
      video: "https://www.youtube.com/watch?v=i7EffvY1pNs",
      markdown: "blockchain-certificate-generator",
    },
    {
      title: "Raahi",
      github: "https://github.com/SainathPoojary/Raahi",
      figma: "https://www.figma.com/design/mDXMl4mZb5rSdInmVRJEao/moband",
      markdown: "raahi",
    },
    {
      title: "Image Drive",
      github: "https://github.com/SainathPoojary/node-image-drive/",
      figma: "https://www.figma.com/design/1MxufFoaDU1MNbuAUIuyYT/Image-Drive",
      live: "https://node-image-drive.vercel.app/",
      markdown: "node-image-drive",
    },
    {
      title: "LineUp",
      live: "https://lineup-hackoverflow.vercel.app/",
      github: "https://github.com/sainathPoojary/lineup",
      markdown: "lineup",
    },
  ],
  experiences: [
    {
      title: "Freelance Software Developer",
      duration: "2021 - Present",
    },
    {
      title: "React Native Intern",
      company: "Branding Catalyst",
      duration: "2020 - 2021",
    },
  ],
  blogs: [
    {
      title: "Async Javascript",
      markdown: "blog-async",
    },
  ],
};

export default data;
