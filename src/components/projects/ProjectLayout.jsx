import { getReactIcons } from "@/common";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
const NavLink = motion(Link);

const ProjectLayout = (projectData) => {
  return (
    <NavLink
      href={`/projects/projectInfo/${projectData?.urlName}`}
      variants={item}
      className="text-sm md:text-base flex cursor-pointer items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-5
       custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{projectData.name}</h2>
        <p className="text-muted hidden sm:inline-block">
          {projectData.description}
        </p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <div className="text-muted sm:text-foreground flex">
        {projectData.technology && getReactIcons(projectData.technology)}
      </div>
    </NavLink>
  );
};

export default ProjectLayout;
