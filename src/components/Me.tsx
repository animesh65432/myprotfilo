"use client"
import React from 'react'

const Me: React.FC = () => {
    return (
        <div className='h-[80vh]'>
            <header className='text-2xl font-bold'>
                Animesh Dutta
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
        </div>
    )
}

export default Me
