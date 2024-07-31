import { blogs } from "@/utils/blogsList";
import React from "react";
const page = (slug) => {
  const blog = blogs.find((blog) => blog.link === slug.params.slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};

export default page;
