"use client";
import { Button } from "@/components/button";

const Hero = () => {
  return (
    <section className="mt-24 flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-4xl md:text-4.5xl lg:text-6xl font-semibold">
        Hi! I&apos;m Sainath
      </h1>
      <div className="text-lg md:text-xl text-center ">
        <p>I&apos;m web and mobile app developer based in Mumbai, India.</p>
        <p> I enjoy building stuffs that works.</p>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => {
            location.href = "https://calendly.com/sainathpoojary/30min";
          }}
        >
          Let&apos;s Talk
        </Button>
        <Button
          onClick={() => {
            location.href = "https://resume.sainathpoojary.tech";
          }}
          variant={"outline"}
        >
          Resume
        </Button>
      </div>
    </section>
  );
};

export default Hero;
