import data from "@/assets/data";
import { Card } from "@/components/card";

const Blogs = () => {
  if (!data.blogs.length) {
    return null;
  }
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Blogs</h2>
      <div className="flex flex-col gap-3">
        {data.blogs.map((blog) => (
          <Card
            key={blog.title?.replace(/\s/g, "-")}
            title={blog.title}
            readme={blog.markdown}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
