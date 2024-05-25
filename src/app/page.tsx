import Projects from "@/partials/projects";
import Hero from "../partials/hero";
import Blogs from "@/partials/blog";
import Experiences from "@/partials/experience";

export default function Home() {
  return (
    <main className="dark:bg-dark-background dark:text-dark-text transition-all duration-500 ease-in-out">
      <div className="w-4/5 lg:w-1/2 xl:w-2/5 mx-auto flex flex-col py-10 gap-16 ">
        <Hero />
        <section className="flex flex-col gap-10">
          <Projects />
          <Experiences />
          <Blogs />
        </section>
      </div>
    </main>
  );
}
