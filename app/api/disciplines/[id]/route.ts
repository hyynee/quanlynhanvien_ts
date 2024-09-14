import { db } from "@/lib/db";
import { NextResponse } from "next/server";







export async function PUT(req: Request, context: any) {

    const { params } = context;

    const body = await req.json();
    const {
        employeeId,
        content,
        fine,
        kindOfDisciplineId
    } = body;

    const fineFloat = parseFloat(fine);

    const id = params.id

   
    
    const updated = await db.discipline.update({
        where:{
            id
        },
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


    if(!updated){
        return new NextResponse('INTERNAL ERROR', { status: 500 })
    }



    return NextResponse.json(updated)
    
}


export async function DELETE(req: Request, context: any) {
    const { params } = context;
    const id = params.id

    const deleted = await db.discipline.delete({
        where:{
            id
        }
    })
    if(!deleted){
        return new NextResponse('INTERNAL ERROR', { status: 500 })
    }


    
    return NextResponse.json(deleted)
    
}