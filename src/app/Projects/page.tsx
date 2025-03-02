"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Project: React.FC = () => {
    const [Projects, setprojects] = useState([])

    const fecthdata = async () => {
        try {
            const data = await axios.get("/api/projects")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fecthdata()
    }, [])
    return (
        <div>Project </div>
    )
}

export default Project 