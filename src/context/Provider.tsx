import React, { useState } from 'react'
import { context } from "@/context/index"

type Props = {
    children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
    const [color, setcolor] = useState<boolean>(true)

    const ontoggole = () => {
        setcolor((prev) => !prev)
    }
    return (
        <context.Provider value={{ color, ontoggole }}>
            {children}
        </context.Provider>
    )
}

export default Provider