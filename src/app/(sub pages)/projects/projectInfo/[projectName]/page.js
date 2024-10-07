"use client";
import { getCurrentProjectData } from "@/common";
import React, { useEffect, useState } from "react";
const ProjectInfo = ({ params }) => {
  const { projectName } = params;
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    setProjectData(getCurrentProjectData(projectName));
  }, [projectName]);
  return <div>{projectData?.name}</div>;
};

export default ProjectInfo;
