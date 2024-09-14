import { db } from "@/lib/db";
import { NextResponse } from "next/server";




export async function POST(req: Request) {
    try {
        
        const body = await req.json()

        const {
            name,
            startDate,
            endDate,
            description,
            status
        } = body;


        const existingProject = await db.project.findFirst({
            where:{
                name
            }
        })


        if(existingProject){
            return NextResponse.json(existingProject)
        }


        const newProject = await db.project.create({
            data:{
                name,
                startDate,
                endDate,
                description,
                status
            }
        })


        if(!newProject){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }


        return NextResponse.json(newProject)
        
    } catch (error) {
        console.log(error)
    }
}