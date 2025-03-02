import { NextResponse } from "next/server"


export const GET = async () => {

    try {

        return NextResponse.json({
            message: "nextjs api"
        }, { status: 200 })
    } catch (error) {


        return NextResponse.json({
            message: "internal server errors"
        }, {
            status: 400
        })

    }
}