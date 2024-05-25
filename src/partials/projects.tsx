"use client";
import data from "@/assets/data";
import { Card } from "@/components/card";
import { useState } from "react";

const Projects = () => {
  const [more, setMore] = useState<boolean>(false);
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="flex flex-col gap-3">
        {data.projects
          .slice(0, more ? data.projects.length : 5)
          .map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              readme={project.slug}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          ))}
        <Card
          className="cursor-pointer"
          onClick={() => {
            setMore(!more);
          }}
          title={more ? "Less" : "More"}
        />
      </div>
    </section>
  );
};

export default Projects;
