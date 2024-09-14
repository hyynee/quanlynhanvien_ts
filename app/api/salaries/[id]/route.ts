import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function DELETE(req: Request, context: any) {

    try {
        const { params } = context;
        const id = params.id

        const deleted = await db.salary.delete({
            where:{
                id
            }
        })


        if(!deleted){
            return new NextResponse('ERROR DELETE SALARY', { status: 500 })
        }


        return NextResponse.json(deleted);
    } catch (error) {
        console.log(error)
    }
    
}