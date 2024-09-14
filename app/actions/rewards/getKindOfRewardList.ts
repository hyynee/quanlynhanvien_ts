import { db } from "@/lib/db";





export default async function getKindOfRewardList() {
    const rewards = await db.kindOfBonus.findMany()


    if(!rewards){
        return [];
    }


    return rewards
    
}