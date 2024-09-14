import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const body = await req.json()
        
        const {
            name
        } = body;

        const existingNation = await db.nations.findUnique({
            where:{
                name: name
            }
        })

        if(existingNation){
            return NextResponse.json(existingNation)
        }

        const newNation = await db.nations.create({
            data:{
                name
            }
        })


        if(!newNation){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }


        return NextResponse.json(newNation);
    } catch (error) {
        console.log(error)
    }
}