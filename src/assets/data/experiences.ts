export interface Experience {
  slug: string;
  title: string;
  company: string;
  readme: string;
  years: string;
}

export const experiences: Experience[] = [
  {
    slug: "apna-cab",
    title: "Freelance Developer",
    company: "Apna Cab",
    readme: `### hello world`,
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
