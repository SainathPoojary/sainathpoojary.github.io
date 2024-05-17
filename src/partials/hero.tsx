"use client";

import { Button } from "@/components/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section className="mt-24 flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-4xl md:text-6xl font-semibold ">
        Hi! I&apos;m Sainath
      </h1>
      <p className="text-lg md:text-xl text-center ">
        I&apos;m web and mobile developer based in Mumbai, India. I enjoy
        building stuffs that works.
      </p>
      <div className="flex gap-4">
        <Button> Let&apos;s Talk</Button>
        <Button variant={"outline"}> Resume </Button>
      </div>
    </motion.section>
  );
};

export default Hero;
