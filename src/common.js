import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiVitess } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAppwrite } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandSocketIo } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeScss } from "react-icons/bs";
import { TbSvg } from "react-icons/tb";

export const getReactIcons = (techArr) => {
  return techArr.map((item, indx) => {
    if (item === "React") {
      return <FaReact key={item + indx} />;
    } else if (item === "Js") {
      return <FaJsSquare key={item + indx} />;
    } else if (item === "Vite") {
      return <SiVitess key={item + indx} />;
    } else if (item === "Redux") {
      return <SiRedux key={item + indx} />;
    } else if (item === "ReactNative") {
      return <TbBrandReactNative key={item + indx} />;
    } else if (item === "Appwrite") {
      return <SiAppwrite key={item + indx} />;
    } else if (item === "Expo") {
      return <SiExpo key={item + indx} />;
    } else if (item === "Tailwind") {
      return <RiTailwindCssFill key={item + indx} />;
    } else if (item === "NodeJs") {
      return <FaNodeJs key={item + indx} />;
    } else if (item === "HTML") {
      return <FaHtml5 key={item + indx} />;
    } else if (item === "CSS") {
      return <FaCss3Alt key={item + indx} />;
    } else if (item === "Socket") {
      return <TbBrandSocketIo key={item + indx} />;
    } else if (item === "Firebase") {
      return <IoLogoFirebase key={item + indx} />;
    } else if (item === "SCSS") {
      return <BsFiletypeScss key={item + indx} />;
    } else if (item === "SVG") {
      return <TbSvg key={item + indx} />;
    }
  });
};
