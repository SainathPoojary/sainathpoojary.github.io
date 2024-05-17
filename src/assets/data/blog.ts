export interface Blog {
  slug: string;
  title: string;
  markdown: string;
}

export const blogs: Blog[] = [
  {
    slug: "first-blog",
    title: "First Blog",
    markdown: "/blog",
  },
  {
    slug: "second-blog",
    title: "Second Blog",
    markdown: "/blog",
  },
];
