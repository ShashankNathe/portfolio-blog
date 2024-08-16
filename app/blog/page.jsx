import React from "react";
import BlogList from "./BlogList";
import { getBlogs } from "../actions/database";
export const fetchCache = "force-no-store";
const page = async () => {
  const blogs = await getBlogs();
  if (blogs.length === 0) {
    return (
      <section className="mb-10">
        <p className="prose prose-neutral dark:prose-invert leading-8">I'm currently working on some interesting articles. Stay tuned!</p>
      </section>
    );
  }

  return <BlogList blogs={JSON.parse(JSON.stringify(blogs))} />;
};

export default page;
