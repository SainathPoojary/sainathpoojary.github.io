import data from "@/assets/data";
import { Card } from "@/components/card";

const Experiences = () => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Experiences</h2>
      <div className="flex flex-col gap-3">
        {data.experiences.map((experience) => (
          <Card
            key={experience.slug}
            title={experience.title}
            text={experience.years}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
