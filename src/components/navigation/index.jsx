"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length; //divided the circle by the total length of the list

  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <div className="w-max flex items-center justify-center relative animate-spin-slow hover:pause group">
              {BtnList.map((btn, index) => {
                const angleRadian = (index * angleIncrement * Math.PI) / 180; //converting the angle into radian
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)"; // calculating the radius

                const x = `calc(${radius}*${Math.cos(angleRadian)})`; //to calculate the x coordinate
                const y = `calc(${radius}*${Math.sin(angleRadian)})`; //to calculate the y coordinate

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </div>
          ) : (
            <>
              <div className=" w-full xs:w-max gap-[10px] px-2.5 xs:p-0 flex flex-col items-start xs:items-center justify-center relative group">
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </div>
              <div className="w-full xs:w-max px-2.5 gap-[10px] xs:p-0 flex flex-col items-end xs:items-center justify-center relative group">
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;


//3:03:36