import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Emp Pro",
      description: "A comprehensive business management application using Node.js, Express, MongoDB, and React.",
      image: "/EmpProHome.png",
      link: "https://emp-pro-frontend.vercel.app/",
      width: 1915,
      height: 852,
    },
    {
      title: "Instabooks",
      description: "An intuitive bookkeeping application developed with Rails, MongoDB, and Bootstrap.",
      image: "/Instabooks.png",
      link: "https://instabooks.in/",
      width: 1912,
      height: 820,
    },
    {
      title: "Datyle",
      description: "An efficient tool for email verification and discovery with stripe payment integration.",
      image: "/Datyle.png",
      link: "https://app.datyle.co/",
      width: 1917,
      height: 857,
    },
    {
      title: "PMS",
      description: "A appraisal management system designed to streamline performance evaluations.",
      image: "/pms.png",
      width: 2600,
      height: 1810,
    },
  ];
  return (
    <>
      <h1 className="mb-8 text-3xl font-medium tracking-tighter">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {projectData.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            className="flex flex-col items-center py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
          >
            <div className="w-11/12">
              <div className="flex items-center justify-between">
                <h1 className="text-lg md:text-2xl">{project.title}</h1>
                <ArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
              </div>
              <p className="mt-3 prose prose-neutral dark:prose-invert leading-6 text-sm">{project.description}</p>
            </div>
            <div className="w-11/12 mt-3">
              <Image src={project.image} alt={`Project ${project.title} Home Page`} className="w-full h-52" width={project.width} height={project.height} />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
