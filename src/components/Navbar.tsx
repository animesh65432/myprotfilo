import React, { useContext } from 'react'
import { Button } from "@/components/ui/button"
import { context } from "@/context"
type Props = {
    onsetnavbar: (selectnavbar: "home" | "project") => void
}


const Navbar: React.FC<Props> = ({ onsetnavbar }) => {
    const { color } = useContext(context)
    return (
        <div className={`flex flex-col gap-3  sm:p-0 p-8 `} >
            <div>
                <Button variant="link" className={color ? "text-amber-50 sm:text-xl text-sm" : "text-black sm:text-xl text-sm"} onClick={() => onsetnavbar("home")}>About</Button>
            </div>
            <div>
                <Button variant="link" className={color ? "text-amber-50 sm:text-xl text-sm" : "text-black sm:text-xl text-sm"} onClick={() => onsetnavbar("project")}>
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Navbar