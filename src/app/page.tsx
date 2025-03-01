"use client"
import { Me, Navbar } from "@/components/index"
import { context } from "@/context";
import { useContext } from "react"
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Home() {
  const { color, ontoggole } = useContext(context)
  return (
    <div className="grid grid-cols-12 ">
      <div className="grid-cols-3 mt-4">
        <Navbar />
      </div>
      <div className="grid-cols-7 mt-4">
        <Me />
      </div>
      <div className="grid-cols-2 mt-4">
        <DarkModeSwitch
          style={{ background: `${color ? "black" : "white"}` }}
          checked={color}
          onChange={ontoggole}
          className='rounded-md'
        />
      </div>

    </div>
  );
}
