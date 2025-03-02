import React, { useContext } from 'react'
import { Button } from "@/components/ui/button"
import { context } from "@/context"

const Navbar: React.FC = () => {
    const { color } = useContext(context)
    return (
        <div className={`flex flex-col gap-3  sm:p-0 p-8 `} >
            <div>
                <Button variant="link" className={color ? "text-amber-50 sm:text-xl text-sm" : "text-black sm:text-xl text-sm"}>About</Button>
            </div>
            <div>
                <Button variant="link" className={color ? "text-amber-50 sm:text-xl text-sm" : "text-black sm:text-xl text-sm"}>
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Navbar