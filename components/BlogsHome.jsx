import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Badge from "./Badge";

const BlogsHome = async () => {
  const blogs = [
    {
      title: "How to build a blog with Next.js",
      description: "Learn how to create a blog with Next.js, Tailwind CSS, and Markdown.",
      link: "how-to-build-a-blog-with-nextjs",
      image: "/blog1.png",
      width: 1915,
      height: 852,
    },
    {
      title: "How to create a portfolio with Next.js",
      description: "Learn how to create a portfolio with Next.js, Tailwind CSS, and Markdown.",
      link: "how-to-create-a-portfolio-with-nextjs",
      image: "/blog2.png",
      width: 1912,
      height: 820,
    },
    {
      title: "How to create a blog with Next.js2",
      description: "Learn how to create a blog with Next.js, Tailwind CSS, and Markdown.",
      link: "how-to-create-a-blog-with-nextjs",
      image: "/blog3.png",
      width: 1917,
      height: 857,
    },
    {
      title: "How to create a blog with Next.2",
      description: "Learn how to create a blog with Next.js, Tailwind CSS, and Markdown.",
      link: "how-to-create-a-blog-with-nextjs",
      image: "/blog3.png",
      width: 1917,
      height: 857,
    },
  ];

  if (blogs.length === 0) {
    return (
      <section className="mb-10">
        <h1 className="mb-8 text-3xl font-medium tracking-tighter">Blogs</h1>
        <p className="prose prose-neutral dark:prose-invert leading-8">I'm currently working on some interesting articles. Stay tuned!</p>
      </section>
    );
  }
  return (
    <section className="mb-10">
      <h1 className="mb-8 text-3xl font-medium tracking-tighter">Blogs</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <Link
            key={blog.title}
            href={`/blog/${blog.link}`}
            target="_blank"
            className="flex flex-col items-center py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
          >
            <div className="w-11/12">
              <div className="flex items-center justify-between">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">{blog.title}</p>

                <ArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Badge href="/blog">
          <Link href="/blog" className="p-3">
            View more
          </Link>
        </Badge>
      </div>
    </section>
  );
};

export default BlogsHome;
