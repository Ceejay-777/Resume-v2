import React from "react";
import { skills } from "../../data";
import Header from "../../components/Title";
import Marquee from "react-fast-marquee";
import nextjs from "../../assets/Icons/nextjs.svg"

export const SectionSkillset = () => {
  return (
    <section className="w-screen py-6 h-screen bg-background dark:bg-dark-background transition-all duration-500 relative overflow-hidden">
      {/* <div className="bg-primary dark:bg-dark-primary min-w-screen h-24">

     </div> */}
      <div className="flex flex-col gap-6">
        <Marquee speed={120}>
          <div className="bg-primary dark:bg-dark-primary min-w-screen h-24  top-0 left-0 p-4 flex gap-8 items-center ">
            <div className="flex justify-between items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="h-full rounded-lg w-fit bg-secondary dark:bg-dark-secondary px-2 py-1 flex justify-between items-center">
                <img src={nextjs} alt="" className="h-full" />
                <p className="font-bold text-lg">NEXTJS</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="h-full rounded-lg w-fit bg-secondary dark:bg-dark-secondary px-2 py-1 flex justify-between items-center">
                <img src={nextjs} alt="" className="h-full" />
                <p className="font-bold text-lg">NEXTJS</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="h-full rounded-lg w-fit bg-secondary dark:bg-dark-secondary px-2 py-1 flex justify-between items-center">
                <img src={nextjs} alt="" className="h-full" />
                <p className="font-bold text-lg">NEXTJS</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="h-full rounded-lg w-fit bg-secondary dark:bg-dark-secondary px-2 py-1 flex justify-between items-center">
                <img src={nextjs} alt="" className="h-full" />
                <p className="font-bold text-lg">NEXTJS</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-6">
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="h-full rounded-lg w-fit bg-secondary dark:bg-dark-secondary px-2 py-1 flex justify-between items-center">
                <img src={nextjs} alt="" className="h-full" />
                <p className="font-bold text-lg">NEXTJS</p>
              </div>
            </div>
            
          </div>
        </Marquee>
        <Marquee direction="right" speed={120}>
          <div className="bg-primary dark:bg-dark-primary min-w-screen h-24">
            <div className="w-6 h-6 bg-red-600"></div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};
