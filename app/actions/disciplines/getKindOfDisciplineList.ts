import { db } from "@/lib/db";



export default async function getKindOfDisciplineList() {

    const disciplines = await db.kindOfDiscipline.findMany({})
    if(!disciplines){
        return []
    }

    return disciplines
    
}