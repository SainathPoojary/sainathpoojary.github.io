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
      <main className="prose max-w-none w-4/5 md:w-2/5  mx-auto py-10 ">
        <div>
          <MarkdownRenderer>{markdown}</MarkdownRenderer>
        </div>
      </main>
    );
  } catch (err) {
    return (
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Will be updated soon! 🚧
        </h1>
      </main>
    );
  }
};

export default Doc;
