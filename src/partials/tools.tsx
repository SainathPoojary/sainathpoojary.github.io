import data from "@/assets/data";
import { Card } from "@/components/card";

const Tools = () => {
  if (!data.tools.length) {
    return null;
  }
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Tools</h2>
      <div className="flex flex-col gap-3">
        {data.tools.map((tool) => (
          <Card
            key={tool.title?.replace(/\s/g, "-")}
            title={tool.title}
            deployedLink={tool.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Tools;
