import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {

    try {
        
        const body = await req.json()
        
        const {
            name
        } = body;

        const existingReward = await db.kindOfBonus.findUnique({
            where:{
                name
            }
        })


        if(existingReward){
            return NextResponse.json(existingReward)
        }


        const newReward = await db.kindOfBonus.create({
            data:{
                name
            }
        })

        if(!newReward){
            return new NextResponse('INTERNAL ERROR', { status: 500})
        }

        return NextResponse.json(newReward)
    } catch (error) {
        console.log(error)
    }
    
}