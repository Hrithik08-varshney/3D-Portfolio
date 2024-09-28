import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});
export default function About() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover opacity-25"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[50%] sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
          <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent">
            Hrithik Varshney
          </h1>
          <p className="font-light text-foreground text-lg">
            Hi! I am a Software Developer
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}

//1:52:49
