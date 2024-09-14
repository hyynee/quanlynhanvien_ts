import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {

    try {
        
        const body = await req.json()
        
        const {
            name
        } = body;

        const existingDiscipline = await db.kindOfDiscipline.findUnique({
            where:{
                name
            }
        })


        if(existingDiscipline){
            return NextResponse.json(existingDiscipline)
        }


        const newDiscipline = await db.kindOfDiscipline.create({
            data:{
                name
            }
        })

        if(!newDiscipline){
            return new NextResponse('INTERNAL ERROR', { status: 500})
        }

        return NextResponse.json(newDiscipline)
    } catch (error) {
        console.log(error)
    }
    
}