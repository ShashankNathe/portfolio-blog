import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { projectData } from "@/utils/projectList";
const Projects = () => {
  return (
    <>
      <h1 className="mb-8 text-3xl font-medium tracking-tighter">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {projectData.map((project) => (
          <Link
            key={project.title}
            href={`${project.link}`}
            target="_blank"
            className="flex flex-col items-center py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
          >
            <div className="w-11/12">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium tracking-tighter">{project.title}</h2>
                <ArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-base">{project.description}</p>
            </div>
            <div className="w-11/12 mt-3">
              <img src={project.image} alt={`Project ${project.title} Home Page`} className="w-full h-52 rounded" width={project.width} height={project.height} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;
