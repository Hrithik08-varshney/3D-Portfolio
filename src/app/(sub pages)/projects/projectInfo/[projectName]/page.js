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
    <div>
      <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
        {projectData.image ? (
          <Image src={projectData.image} alt={projectData.name} />
        ) : (
          <Image src={ImageNotFound} alt="imageNotFound" />
        )}
      </ItemLayout>
    </div>
  );
};

export default ProjectInfo;
