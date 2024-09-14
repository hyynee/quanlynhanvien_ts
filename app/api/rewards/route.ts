import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {

    try {
        
        const body = await req.json()
        
        const {
            employeeId,
            content,
            prizeMoney,
            kindOfBonusId
        } = body;

        const prizeMoneyFloat = parseFloat(prizeMoney);

       
        const newReward = await db.bonus.create({
            data:{
                employees:{
                    connect:{
                        id: employeeId
                    }
                },
                content,
                prizeMoney: prizeMoneyFloat,
                kindOfBonus:{
                    connect:{
                        id:kindOfBonusId
                    }
                }
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