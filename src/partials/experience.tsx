import data from "@/assets/data";
import { Card } from "@/components/card";

const Experiences = () => {
  if (!data.experiences.length) {
    return null;
  }
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Experiences</h2>
      <div className="flex flex-col gap-3">
        {data.experiences.map((experience) => (
          <Card
            key={experience.title?.replace(/\s/g, "-")}
            title={experience.title}
            text={experience.duration}
            company={experience.company}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
