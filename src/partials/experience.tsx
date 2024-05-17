"use client";
import { motion } from "framer-motion";
import data from "@/assets/data";
import { Card } from "@/components/card";

const Experiences = () => {
  return (
    <motion.section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Experiences</h2>
      <div className="flex flex-col gap-3">
        {data.experiences.map((experience) => (
          <Card
            key={experience.slug}
            title={experience.title}
            // readme={experience.readme}
            text={experience.years}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Experiences;
