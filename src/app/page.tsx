"use client"
import { Me, Navbar } from "@/components/index";
import { context as Context } from "@/context";
import { useContext } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuBurger } from "react-icons/ci";

export default function Home() {
  const { color, ontoggole } = useContext(Context);

  return (
    <div className="grid grid-cols-12 sm:p-7 p-3">

      <div className="col-span-2 sm:col-span-2 mt-4">

        <div className="sm:block hidden">
          <Navbar />
        </div>

        <div className="sm:hidden block">
          <Sheet >
            <SheetTrigger>
              <CiMenuBurger className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent className={`${color ? "bg-white text-black" : "bg-black text-white"}`}
            >
              <Navbar />
            </SheetContent>

          </Sheet>
        </div>
      </div>


      <div className="sm:col-span-9 col-span-9 mt-4">
        <Me />
      </div>


      <div className="col-span-1  mt-4 flex justify-center">
        <DarkModeSwitch
          checked={color}
          onChange={ontoggole}
          className={`rounded-md ${color ? "bg-black" : "bg-white"}`}
        />
      </div>
    </div>
  );
}
