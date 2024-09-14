import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {

    try {
        
        const body = await req.json()
        
        const {
            employeeId,
            content,
            fine,
            kindOfDisciplineId
        } = body;

        const fineFloat = parseFloat(fine);

       
        const newDiscipline = await db.discipline.create({
            data:{
                employees:{
                    connect:{
                        id: employeeId
                    }
                },
                content,
                fine: fineFloat,
                kindOfDiscipline:{
                    connect:{
                        id: kindOfDisciplineId
                    }
                }
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