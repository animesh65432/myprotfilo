import React, { useContext } from 'react'
import { Button } from "@/components/ui/button"
import { context } from "@/context"

const Navbar: React.FC = () => {
    const { color } = useContext(context)
    return (
        <div className='flex flex-col'>
            <div>
                <Button variant="link" className={color ? "text-black" : "text-white"}>About</Button>
            </div>
            <div>
                <Button variant="link" className={color ? "text-black" : "text-white"}>
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Navbar