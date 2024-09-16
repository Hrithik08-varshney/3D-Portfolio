import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-6",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full ">
        <ItemLayout className="col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-2xl text-left w-full capitalize">
            Software Developer
          </h2>
          <p className="font-light">
            2+ Year of experience in Software Development with proficiency in
            designing and developing enterprise-based applications. Excellent
            technical experience on ReactJS, JavaScript, TypeScript, HTML5,
            CSS3, React Native, Tailwind. Familiar experience working with
            NodeJS, ExpressJS and MongoDb. Great exposure to write comprehensive
            Unit Test cases.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-4">
          <div>25+ Clients</div>
        </ItemLayout>
        <ItemLayout className="col-span-4">
          <div>2+ Years of Experience</div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
