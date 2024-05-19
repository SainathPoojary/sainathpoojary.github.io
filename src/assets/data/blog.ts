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
];
