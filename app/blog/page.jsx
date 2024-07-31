import React from "react";
import { blogs } from "@/utils/blogsList";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogList from "./BlogList";
const page = () => {
  if (blogs.length === 0) {
    return (
      <section className="mb-10">
        <p className="prose prose-neutral dark:prose-invert leading-8">I'm currently working on some interesting articles. Stay tuned!</p>
      </section>
    );
  }

  return <BlogList blogs={blogs} />;
};

export default page;
