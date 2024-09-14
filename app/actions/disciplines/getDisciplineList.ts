import { db } from "@/lib/db";



export default async function getDisciplineList() {

    const disciplines = await db.discipline.findMany({
        include:{
            employees: {
                include:{
                    department: true
                }
            },
            kindOfDiscipline: true
        }
    })


    if(!disciplines){
        return []
    }


    return disciplines
    
}