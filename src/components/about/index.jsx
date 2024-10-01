"use client";
import React from "react";
import { ItemLayout } from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full ">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Software Developer
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            2+ Year of experience in Software Development with proficiency in
            designing and developing enterprise-based applications. Excellent
            technical experience on ReactJS, JavaScript, TypeScript, HTML5,
            CSS3, React Native, Tailwind. Familiar experience working with
            NodeJS, ExpressJS and MongoDb. Great exposure to write comprehensive
            Unit Test cases.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            7{" "}
            <sub className="font-semibold text-base">
              Projects Delivered with Current Company
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hrithik08-Varshney&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&text_bold=false"
            alt="HVGithub"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Hrithik08-Varshney&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&text_bold=false"
            alt="HVGithub"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=react,js,nodejs,mongodb,express,nextjs,html,css,c,cpp,redux,tailwind,ts,styledcomponents,sass,materialui,appwrite,bootstrap,bitbucket,firebase,git,github,graphql,mysql,netlify,ps,postman,vscode,threejs"
            alt="HVGithub"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Hrithik08-Varshney&theme=dark&hide_border=true"
            alt="HVGithub"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=Hrithik08-Varshney&repo=MOVIX&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&text_bold=false"
            alt="HVGithub"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
