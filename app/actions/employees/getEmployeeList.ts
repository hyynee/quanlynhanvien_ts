import { db } from "@/lib/db";


export default async function getEmployeeList() {
    const employees = await db.employee.findMany({
        include:{
            departmentManager:{
                include:{
                    department: true
                }
            },
            slaries: true
        }
    })


    if(!employees){
        return []
    }

    return employees
    
}