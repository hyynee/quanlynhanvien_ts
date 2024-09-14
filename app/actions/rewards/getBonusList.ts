import { db } from "@/lib/db";



export default async function getBonusList() {
    const bonuses = await db.bonus.findMany({
        include:{
            employees: {
                include:{
                    department: true
                }
            },
            kindOfBonus: true,
        }
    })


    if(!bonuses){
        return []
    }

    return bonuses;
    
}