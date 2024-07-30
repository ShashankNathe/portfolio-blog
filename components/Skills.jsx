import React from "react";
import Badge from "./Badge";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { name: "Next.js", logo: "/next-logo.svg" },
    { name: "Node Js", logo: "/node.svg" },
    { name: "React", logo: "/react.svg" },
    { name: "Express", logo: "/expressjs.svg" },
    { name: "MongoDB", logo: "/mongodb.svg" },
    { name: "Ruby", logo: "/ruby.svg" },
    { name: "Ruby on Rails", logo: "/rails.svg" },
    { name: "Tailwind", logo: "/tailwind.svg" },
    { name: "Bootstrap", logo: "/bootstrap.svg" },
  ];
  return (
    <>
      <h1 className="mb-8 text-3xl font-medium tracking-tighter">Skills</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <Badge key={skill.name}>
            <div className="flex flex-col items-center justify-center w-full text-lg md:text-2xl py-4 md:py-6">
              <Image alt={skill.name} src={skill.logo} className="!mr-1 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" width="54" height="54" />
              <h2 className="text-lg font-medium tracking-tighter mt-4">{skill.name}</h2>
            </div>
          </Badge>
        ))}
      </div>
    </>
  );
};

export default Skills;
