"use client";
import { getCurrentProjectData } from "@/common";
import { ItemLayout } from "@/components/about/ItemLayout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImageNotFound from "../../../../../assets/ImageNotFound.jpg";
import Link from "next/link";
const ProjectInfo = ({ params }) => {
  const { projectName } = params;
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    setProjectData(getCurrentProjectData(projectName));
  }, [projectName]);
  return (
    <>
      <div className="flex flex-col sm:flex-col lg:flex-row w-[100%]">
        <div className="sm:w-[100%] lg:w-[50%]">
          <ItemLayout>
            {projectData?.image ? (
              <Image src={projectData?.image} alt={projectData.name} />
            ) : (
              <Image src={ImageNotFound} alt="imageNotFound" className="h-[50vh] w-[70%]"/>
            )}
          </ItemLayout>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="sm:w-[100%] lg:w-[70%] grid grid-cols-4 grid-rows-2 gap-4 p-6 sm:p-8"
        >
          <div className="p-[5px] h-[50px] text-[8px] sm:text-sm lg:h-auto flex col-span-1 items-center justify-center custom-bg rounded-xl">
            GITHUB
          </div>
          <Link
            href={projectData?.gitLink || ""}
            target={"_blank"}
            className="p-[5px] break-all h-[50px] text-xs sm:text-sm lg:h-auto flex col-span-3 items-center justify-center custom-bg rounded-xl cursor-pointer transform hover:translate-y-1 transition-transform duration-300 ease-in-out"
          >
            {projectData?.gitLink}
          </Link>
          <div className="p-[5px] h-[50px] text-[8px]  sm:text-sm lg:h-auto  flex col-span-1 items-center justify-center custom-bg rounded-xl">
            DEMO
          </div>
          <Link
            href={projectData?.deployLink || ""}
            target={"_blank"}
            className="p-[5px] break-all h-[50px] text-xs sm:text-sm lg:h-auto flex col-span-3 items-center justify-center custom-bg rounded-xl cursor-pointer transform hover:translate-y-1 transition-transform duration-300 ease-in-out"
          >
            {projectData?.deployLink}
          </Link>
        </motion.div>
      </div>
      <ItemLayout className="mt-5">{projectData?.fullDesc}</ItemLayout>
    </>
  );
};

export default ProjectInfo;
