import React from "react";

const BlogsHome = async () => {
  const blogs = [];

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
          <a
            key={blog.title}
            href={blog.link}
            target="_blank"
            className="flex flex-col items-center py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
          >
            <div className="w-11/12">
              <div className="flex items-center justify-between">
                <h1 className="text-lg md:text-2xl">{blog.title}</h1>
                <ArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
              </div>
              <p className="mt-3 prose prose-neutral dark:prose-invert leading-6 text-sm">{blog.description}</p>
            </div>
            <div className="w-11/12 mt-3">
              <Image src={blog.image} alt={`Blog ${blog.title} Home Page`} className="w-full h-52" width={blog.width} height={blog.height} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogsHome;
