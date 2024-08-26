import React from "react";
import { projectData } from "@/utils/projectList";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  if (projectData.length == 0) {
    return <div>No projects found</div>;
  }
  let tempProject = projectData[0];
  return (
    <>
      {/* <h1 className="mb-8 text-3xl font-medium tracking-tighter">{tempProject.title}</h1>
      <div className="py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 transform transition-transform duration-300 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer">
        <Link key={tempProject.title} href={`${tempProject.link}`} target="_blank">
          <Image src={tempProject.image} alt={`Project ${tempProject.title} Home Page`} className="rounded" width={tempProject.width} height={tempProject.height} />
        </Link>
      </div>
      <div className="mt-5">
        {tempProject.description}
        <div className="group flex justify-end">
          <Link
            key={tempProject.title}
            href={`${tempProject.link}`}
            target="_blank"
            className="flex items-center justify-between gap-2 w-fit py-2 px-4 mt-4 rounded border border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
          >
            Check it out <ArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
          </Link>
        </div>
      </div> */}

      {/* <div className="grid sm:grid-cols-2 gap-4">
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
              <Image src={project.image} alt={`Project ${project.title} Home Page`} className="w-full h-52" width={project.width} height={project.height} />
            </div>
          </Link>
        ))}
      </div> */}

      {projectData.map((project, index) => (
        <div key={`${project.title}${index}`}>
          <h1 className="mb-8 text-3xl font-medium tracking-tighter">{project.title}</h1>
          <div className="py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 transform transition-transform duration-300 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in ">
            {project.link ? (
              <Link href={`${project.link}`} target="_blank">
                <Image src={project.image} alt={`Project ${project.title} Home Page`} className="rounded" width={project.width} height={project.height} />
              </Link>
            ) : (
              <Image src={project.image} alt={`Project ${project.title} Home Page`} className="rounded" width={project.width} height={project.height} />
            )}
          </div>
          <div className="mt-5">
            {project.description}
            <div className="flex gap-2 items-center mt-2 flex-wrap">
              {project.stack.map((s, i) => {
                return (
                  <div
                    key={i}
                    className="p-2 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 transform transition-transform duration-300 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in "
                  >
                    {s}
                  </div>
                );
              })}
            </div>
            <div className="group flex justify-end">
              {project.link && (
                <Link
                  key={project.title}
                  href={`${project.link}`}
                  target="_blank"
                  className="flex items-center justify-between gap-2 w-fit py-2 px-4 mt-4 rounded border border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
                >
                  Check it out <ArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
                </Link>
              )}
              {/* <Link
                href={`${project.link}`}
                target="_blank"
                className="flex items-center justify-between gap-2 w-fit py-2 px-4 mt-4 rounded border border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
              >
                Check it out <ArrowRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
              </Link> */}
            </div>
          </div>
          <div className="rounded border group my-3 border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 transform transition-transform duration-300 ease-in [background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box]"></div>
        </div>
      ))}
    </>
  );
};

export default page;
