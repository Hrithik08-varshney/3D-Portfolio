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
    <div className="flex w-[100%]">
    <div className="w-[50%]">

      <ItemLayout>
        {projectData?.image ? (
          <Image src={projectData?.image} alt={projectData.name} />
        ) : (
          <Image src={ImageNotFound} alt="imageNotFound" />
        )}
      </ItemLayout>
    </div>
      <div className=" w-[60%] grid grid-cols-4 grid-rows-2 gap-4 p-6 sm:p-8">
      <div className=" h-auto flex col-span-1 items-center justify-center custom-bg rounded-xl">GITHUB</div>
      <div className=" h-auto flex col-span-3 items-center justify-center custom-bg rounded-xl cursor-pointer">{projectData?.gitLink}</div>
      <div className=" h-auto flex col-span-1 items-center justify-center custom-bg rounded-xl">DEMO</div>
      <div className=" h-auto flex col-span-3 items-center justify-center custom-bg rounded-xl cursor-pointer">{projectData?.deployLink}</div>
      </div>
    </div>
  );
};

export default ProjectInfo;
