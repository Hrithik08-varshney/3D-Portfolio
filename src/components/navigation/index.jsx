"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length; //divided the circle by the total length of the list

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="flex items-center justify-center relative animate-spin-slow hover:pause group">
        {BtnList.map((btn, index) => {
          const angleRadian = (index * angleIncrement * Math.PI) / 180; //converting the angle into radian
          const radius = "calc(20vw - 1rem)"; // calculating the radius
          const x = `calc(${radius}*${Math.cos(angleRadian)})`; //to calculate the x coordinate
          const y = `calc(${radius}*${Math.sin(angleRadian)})`; //to calculate the y coordinate

          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
