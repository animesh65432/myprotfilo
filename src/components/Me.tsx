"use client"
import React from 'react'
import { ClipboardMinus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3 } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { SiSequelize } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";


const Me: React.FC = () => {

    return (
        <div className='h-[80vh]'>
            <header className=' font-bold flex lg:gap-80 md:gap-48 sm:gap-24 gap-10'>
                <div className='md:text-2xl text-xl'>
                    Animesh Dutta
                </div>
                <div>
                    <a href='https://drive.google.com/file/d/1ElRvbsubkSu-SKbPte57BHP5RZh9AVT9/view'>
                        <Button variant="ghost" className='rounded-md flex items-center border border-black'>
                            <span><ClipboardMinus /></span>
                            <span>View Resume</span>
                        </Button >
                    </a>

                </div>
            </header>
            <div className='mt-5 md:text-xl text-xs flex flex-col gap-2'>
                <ul>I'm a developer based in India. My interests lie in</ul>
                <ul> web development and solving real-world problems with code.</ul>
            </div>
            <div className='mt-4 md:text-xl text-xs flex flex-col gap-2'>
                <ul> I wrote my first line of code in 2022. Despite coming from a</ul>
                <ul>B.A. background, I discovered my passion for coding and </ul>
                <ul> embarked on my journey as a developer.</ul>
            </div>

            <div className='mt-6 md:text-xl text-xs'>
                <ul>you can find me on

                    <a href='https://www.linkedin.com/in/animesh-dutta-ba5783273' className='ml-2'>Linkedin ,</a>

                    <a href='https://github.com/animesh65432'>Github ,</a>

                    <a href='https://x.com/animeshdut16137'>Twitter
                    </a>

                </ul>
            </div>

            <div className='mt-10 flex flex-col gap-2'>
                <div className='flex  md:text-xl text-xs gap-4'>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <FaJsSquare className='h-[3vh] w-[3vw]' />
                        Javascript
                    </ul>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <FaReact className='h-[3vh] w-[3vw]' />
                        React
                    </ul>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <FaNodeJs className='h-[3vh] w-[3vw]' />
                        Node js
                    </ul>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <IoLogoHtml5 />
                        Html
                    </ul>
                </div>
                <div className='flex  md:text-xl text-xs gap-4'>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <FaCss3 className='h-[3vh] w-[3vw]' />
                        Css
                    </ul>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <BiLogoMongodb className='h-[3vh] w-[3vw]' />
                        Mongodb
                    </ul>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <BiLogoPostgresql className='h-[3vh] w-[3vw]' />
                        Postgres
                    </ul>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <SiTailwindcss />
                        Tailwindcss
                    </ul>
                </div>
                <div className='flex  md:text-xl text-xs gap-4'>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <SiSequelize className='h-[3vh] w-[3vw]' />
                        Sequelize
                    </ul>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <FaDocker className='h-[3vh] w-[3vw]' />
                        Docker
                    </ul>
                    <ul className='rounded-md flex items-center border border-black p-2 gap-2'>
                        <FaAws className='h-[3vh] w-[3vw]' />
                        Aws
                    </ul>

                </div>
            </div>
        </div >
    )
}

export default Me
