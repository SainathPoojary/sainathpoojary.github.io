"use client";
import { motion } from "framer-motion";
import data from "@/assets/data";
import { Card } from "@/components/card";

const Blogs = () => {
  return (
    <motion.section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Blogs</h2>
      <div className="flex flex-col gap-3">
        {data.blogs.map((blog) => (
          <Card key={blog.slug} title={blog.title} readme={blog.markdown} />
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;
