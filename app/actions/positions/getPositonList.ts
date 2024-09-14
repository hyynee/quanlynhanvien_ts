import { db } from "@/lib/db";




export default async function getPositionList() {
    

    const positions = await db.position.findMany()

    if(!positions){
        return []
    }

    return positions;
}