import { db } from "@/lib/db";
import { NextResponse } from "next/server";







export async function PUT(req: Request, context: any) {

    const { params } = context;

    const body = await req.json();
    const {
        employeeId,
        content,
        prizeMoney,
        kindOfBonusId,
    } = body;

    const id = params.id

    const prizeMoneyFloat = parseFloat(prizeMoney)
    
    const updated = await db.bonus.update({
        where:{
            id
        },
        data:{
            employees:{
                connect:{
                    id:employeeId
                }
            },
            content,
            prizeMoney: prizeMoneyFloat,
            kindOfBonus:{
                connect:{
                    id: kindOfBonusId
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

    const deleted = await db.bonus.delete({
        where:{
            id
        }
    })
    if(!deleted){
        return new NextResponse('INTERNAL ERROR', { status: 500 })
    }


    
    return NextResponse.json(deleted)
    
}