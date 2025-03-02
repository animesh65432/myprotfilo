import React, { useState } from 'react'
import { context } from "@/context/index"

type Props = {
    children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
    const [color, setcolor] = useState<boolean>(true)
    const [navbar, setnabvar] = useState<"home" | "project">("home")

    const ontoggole = () => {
        setcolor((prev) => !prev)
    }
    const onsetnavbar = (selectnavbar: "home" | "project") => {
        setnabvar(selectnavbar)
    }
    return (
        <context.Provider value={{ color, ontoggole, navbar, onsetnavbar }}>
            {children}
        </context.Provider>
    )
}

export default Provider