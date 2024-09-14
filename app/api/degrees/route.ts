import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const body = await req.json()
        
        const {
            name
        } = body;

        const existingDegree = await db.degree.findUnique({
            where:{
                degreeName: name
            }
        })

        if(existingDegree){
            return NextResponse.json(existingDegree)
        }

        const newDegree = await db.degree.create({
            data:{
                degreeName: name
            }
        })


        if(!newDegree){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }


        return NextResponse.json(newDegree);
    } catch (error) {
        console.log(error)
    }
}