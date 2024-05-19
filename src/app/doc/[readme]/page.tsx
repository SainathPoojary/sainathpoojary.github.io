import { promises as fs } from "fs";
import { MarkdownRenderer } from "./markdown";

interface DocProps {
  params: {
    readme: string;
  };
}

const Doc = async ({ params }: DocProps) => {
  try {
    const markdown = await fs.readFile(
      `${process.cwd()}/src/docs/${params.readme}.md`,
      "utf8"
    );

    return (
      <main className="dark:bg-dark-background ">
        <div className="prose max-w-none w-4/5 md:w-2/5  mx-auto py-10 ">
          <MarkdownRenderer>{markdown}</MarkdownRenderer>
        </div>
      </main>
    );
  } catch (err) {
    console.error(err);
    return (
      <main className="flex justify-center items-center h-screen dark:bg-dark-background overflow-x-hidden">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Will be updated soon! 🚧
        </h1>
      </main>
    );
  }
};

export default Doc;
