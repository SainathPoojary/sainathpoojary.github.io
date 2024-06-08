import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getDocs, getDocsBySlug } from "./fetcher";
import remarkGfm from "remark-gfm";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getDocs();
}

async function Page({ params }: Props) {
  const content = getDocsBySlug(params.slug);

  if (!content) {
    return (
      <main className="flex justify-center items-center h-screen dark:bg-dark-background overflow-x-hidden">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-dark-text">
          Will be updated soon! 🚧
        </h1>
      </main>
    );
  }

  return (
    <main className="dark:bg-dark-background">
      <div className="prose max-w-none w-4/5 md:w-2/5 mx-auto dark:prose-p:text-dark-text dark:prose-strong:text-dark-text prose-pre:rounded-lg  prose-figure:my-0 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-code:text-white py-20">
        <MDXRemote
          options={{
            mdxOptions: {
              rehypePlugins: [rehypePrettyCode],
              remarkPlugins: [remarkGfm],
            },
          }}
          components={{}}
          source={content}
        />
      </div>
    </main>
  );
}

export default Page;
