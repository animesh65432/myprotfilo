import { NextResponse } from "next/server"
import { Projects } from "@/lib/data"

export const GET = async () => {
    try {
        return NextResponse.json(Projects, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "internal server errors"
        }, {
            status: 500
        })
    }

}