"use client";
import { getCurrentProjectData } from "@/common";
import { ItemLayout } from "@/components/about/ItemLayout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageNotFound from "../../../../../assets/ImageNotFound.jpg";
const ProjectInfo = ({ params }) => {
  const { projectName } = params;
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    setProjectData(getCurrentProjectData(projectName));
  }, [projectName]);
  return (
    <div className="flex">
      <ItemLayout className="w-[600px] h-[400px]">
        {projectData?.image ? (
          <Image src={projectData?.image} alt={projectData.name} />
        ) : (
          <Image src={ImageNotFound} alt="imageNotFound" />
        )}
      </ItemLayout>
      <div className="grid grid-cols-2 grid-rows-2 gap-1 custom-bg p-6 sm:p-8 rounded-xl">
      <div className=" h-auto flex items-center justify-center custom-bg">GITHUB</div>
      <div className=" h-auto flex items-center justify-center custom-bg">{projectData?.gitLink}</div>
      <div className=" h-auto flex items-center justify-center custom-bg">DEMO</div>
      <div className=" h-auto flex items-center justify-center custom-bg">{projectData?.deployLink}</div>
      </div>
    </div>
  );
};

export default ProjectInfo;
