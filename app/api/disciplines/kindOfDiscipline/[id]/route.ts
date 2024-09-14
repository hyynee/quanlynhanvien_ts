import { db } from "@/lib/db";
import { NextResponse } from "next/server";






export async function PUT(req: Request, context: any) {

    const { params } = context;

    const body = await req.json();
    const {
        name
    } = body;

    const id = params.id
    
    const updated = await db.kindOfDiscipline.update({
        where:{
            id
        },
        data:{
            name
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

    const deleted = await db.kindOfDiscipline.delete({
        where:{
            id
        }
    })
    if(!deleted){
        return new NextResponse('INTERNAL ERROR', { status: 500 })
    }


    
    return NextResponse.json(deleted)
    
}