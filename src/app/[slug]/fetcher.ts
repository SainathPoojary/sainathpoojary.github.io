import fs from "fs";
import path from "path";

const DOCS_PATH = `${process.cwd()}/src/assets/data/markdown`;

export function getDocs() {
  const files = fs.readdirSync(DOCS_PATH, "utf-8");
  return files.map((file) => {
    return {
      slug: file.replace(/\.mdx$/, ""),
    };
  });
}

export function getDocsBySlug(slug: string) {
  const fileName = `${slug}.mdx`;
  const fullPath = path.join(DOCS_PATH, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  return fileContents;
}
