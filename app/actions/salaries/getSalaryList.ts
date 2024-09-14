import { db } from "@/lib/db";



export default async function getSalaryList() {
    
    const salaries = await db.salary.findMany({
        include:{
            employee: {
                include:{
                    position: true
                }
            }
        }
    })


    if(!salaries){
        return []
    }


    return salaries

}