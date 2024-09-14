import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json()

        const {
            name,
            coefficient
        } = body;

        const coefficientFloat = parseFloat(coefficient)

        const existingPosition = await db.position.findUnique({
            where:{
                positionName: name
            }
        })

        if(existingPosition){
            return NextResponse.json(existingPosition);
        }


        const newPosition = await db.position.create({
            data:{
                positionName: name,
                coefficient: coefficientFloat
            }
        })

        if(!newPosition){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }


        return NextResponse.json(newPosition);

        



    } catch (error) {
        console.log(error)
    }
}


export async function PUT(req: Request) {
    try {
        const body = await req.json()

        const {
            id,
            name,
            coefficient
        } = body;


        const coefficientFloat = parseFloat(coefficient)
        const updated = await db.position.update({
            where:{
                id: id
            },
            data:{
                positionName: name,
                coefficient: coefficientFloat
            }
        })


        if(!updated){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }

        return NextResponse.json(updated)

        



    } catch (error) {
        console.log(error)
    }
}



export async function DELETE(req: Request) {
    try {
        const body = await req.json()


        const {
            id
        } = body;

        const deleted = await db.position.delete({
            where:{
                id: id
            }
        })


        if(!deleted){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }

        return NextResponse.json(deleted);
    } catch (error) {
        console.log(error)
    }
    
}