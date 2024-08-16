"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogList = ({ blogs }) => {
  // search functionality

  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  useEffect(() => {
    setFilteredBlogs(blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase())));
  }, [search, blogs]);

  return (
    <>
      <div className="mb-10 flex items-center justify-center sm:justify-end">
        <input type="text" placeholder="Search Blogs" className="p-2 border border-gray-400 rounded w-full sm:w-1/2" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="grid  gap-4">
        {filteredBlogs.length === 0 ? (
          <p className="prose prose-neutral dark:prose-invert leading-8">No blogs found</p>
        ) : (
          filteredBlogs.map((blog) => (
            <Link
              key={blog.title}
              href={`/blog/${blog.slug}`}
              className="flex flex-col items-center py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
            >
              <div className="w-11/12">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium tracking-tighter">{blog.title}</h2>
                  <ArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
                </div>
                <p className="text-neutral-600 dark:text-neutral-400  text-base">{blog.description}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default BlogList;
