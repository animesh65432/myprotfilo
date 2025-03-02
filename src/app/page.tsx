"use client"
import { Me, Navbar, MobileNavbar } from "@/components/index";
import { context as Context } from "@/context";
import { useContext } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Home() {
  const { color, ontoggole } = useContext(Context);

  return (
    <div className={`grid grid-cols-12 md:p-7 p-3 gap-8 ${color ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen transition-colors`}>
      <div className="md:col-span-2 mt-4 ">
        <div className="md:block hidden">
          <Navbar />
        </div>
      </div>

      <div className="md:col-span-9 col-span-9 mt-4">
        <Me />
        <div className="md:hidden block flex justify-center">
          <MobileNavbar />
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