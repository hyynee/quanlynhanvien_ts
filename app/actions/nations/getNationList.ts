import { db } from "@/lib/db";



export default async function getNationList() {
    const nations = await db.nations.findMany()

    if(!nations){
        return []
    }

    return nations
}