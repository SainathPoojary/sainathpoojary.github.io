"use client";
import data from "@/assets/data";
import { Card } from "@/components/card";
import { useState } from "react";

const Projects = () => {
  const [more, setMore] = useState<boolean>(false);

  if (!data.projects.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="flex flex-col gap-3">
        {data.projects
          .slice(0, more ? data.projects.length : 5)
          .map((project) => (
            <Card
              key={project.title?.replace(/\s/g, "-")}
              title={project.title}
              readme={project.markdown}
              deployedLink={project.live}
              githubLink={project.github}
              videoLink={project.video}
              figmaLink={project.figma}
            />
          ))}
        {data.projects.length > 5 && (
          <Card
            className="cursor-pointer"
            onClick={() => {
              setMore(!more);
            }}
            title={more ? "Less" : "More"}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
