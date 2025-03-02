"use client"
import { Me, Navbar, MobileNavbar, Project } from "@/components/index";
import { context as Context } from "@/context";
import { useContext } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Home() {
  const { color, ontoggole, navbar, onsetnavbar } = useContext(Context);
  return (
    <div className={`grid grid-cols-12 md:p-7 p-3  h-[100vh] ${color ? "bg-gray-900 text-white" : "bg-white text-black"} transition-colors`}>
      <div className="md:col-span-2 mt-4 ">
        <div className="md:block hidden">
          <Navbar onsetnavbar={onsetnavbar} />
        </div>
      </div>

      <div className="md:col-span-9 col-span-9 mt-4">
        {navbar === "home" && <Me />}
        {navbar === "project" && <Project />}
        <div className="flex justify-center md:hidden block">
          <MobileNavbar onsetnavbar={onsetnavbar} />
        </div>
      </div>

      <div className="  md:col-span-1 col-span-2 md:mt-4 md:flex md:justify-center md:h-[6vh] w-[6vw] ">
        <div
          className={`p-3  `}
        >
          <DarkModeSwitch
            checked={color}
            onChange={ontoggole}
            size={24}
            sunColor="#f59e0b"
            moonColor="#f3f4f6"
          />
        </div>
      </div>
    </div>
  );
}