import React from "react";
import { House, FolderOpenDot } from "lucide-react";
import { useContext } from "react";
import { context } from "@/context";

const MobileNavbar: React.FC = () => {
    const { color } = useContext(context);

    return (
        <div
            className={`flex w-[90vw]  justify-around p-2 ${color ? "bg-black text-white" : "bg-white text-black"
                } h-[8vh] items-center rounded-xl shadow-md transition-all duration-300 `}
        >
            <div
                className={` rounded-full cursor-pointer transition-all duration-300 ${color ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
                    }`}
            >
                <House size={24} />
            </div>
            <div
                className={` rounded-full cursor-pointer transition-all duration-300 ${color ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
                    }`}
            >
                <FolderOpenDot size={24} />
            </div>
        </div>
    );
};

export default MobileNavbar;
