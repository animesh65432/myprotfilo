"use client"
import { Me, Navbar, MobileNavbar } from "@/components/index";
import { context as Context } from "@/context";
import { useContext } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


export default function Home() {
  const { color, ontoggole } = useContext(Context);

  return (
    <div className="grid grid-cols-12 md:p-7 p-3 gap-8">

      <div className="col-span-2 md:col-span-2 mt-4">

        <div className="md:block hidden">
          <Navbar />
        </div>

      </div>


      <div className="md:col-span-9 col-span-11 mt-4">
        <Me />
        <div className="md:hidden block flex justify-center">
          <MobileNavbar />
        </div>
      </div>


      <div className="col-span-1  mt-4 flex justify-center">
        <DarkModeSwitch
          checked={color}
          onChange={ontoggole}
          className={`rounded-md ${color ? "bg-black" : "bg-white"} `}

        />
      </div>
    </div>
  );
}
