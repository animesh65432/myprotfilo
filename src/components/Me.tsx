"use client"
import React from 'react'
import { ClipboardMinus } from "lucide-react"
import { Button } from "@/components/ui/button"


const Me: React.FC = () => {

    return (
        <div className='h-[80vh]'>
            <header className=' font-bold flex lg:gap-80 md:gap-48 sm:gap-24 gap-10'>
                <div className='sm:text-2xl text-xl'>
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
            <div className='mt-5 sm:text-xl text-xs flex flex-col gap-2'>
                <ul>I'm a developer based in India. My interests lie in</ul>
                <ul> web development and solving real-world problems with code.</ul>
            </div>
            <div className='mt-4 sm:text-xl text-xs flex flex-col gap-2'>
                <ul> I wrote my first line of code in 2022. Despite coming from a</ul>
                <ul>B.A. background, I discovered my passion for coding and </ul>
                <ul> embarked on my journey as a developer.</ul>
            </div>

            <div className='mt-6 sm:text-xl text-xs'>
                <ul>you can find me on

                    <a href='https://www.linkedin.com/in/animesh-dutta-ba5783273' className='ml-2'>Linkedin ,</a>

                    <a href='https://github.com/animesh65432'>Github ,</a>

                    <a href='https://x.com/animeshdut16137'>Twitter
                    </a>

                </ul>
            </div>
        </div >
    )
}

export default Me
