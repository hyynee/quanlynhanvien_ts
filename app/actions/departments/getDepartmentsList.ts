import { db } from "@/lib/db";


export default async function getDepartmentList() {
    const departments = await db.department.findMany({
        include: {
            employees: true,
            departmentManager: {
                include:{
                    employee: true
                }
            }
        }
    })


    if(!departments){
        return []
    }

    return departments;
}