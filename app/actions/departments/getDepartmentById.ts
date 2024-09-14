import { db } from "@/lib/db"





export default async function getDepartmentById(id:string) {
    try {
        
        const department = await db.department.findUnique({
            where:{
                id
            },
            include:{
                employees: {
                    include:{
                        position: true,
                        typeOfEmployee: true,
                        nations: true,
                        degrees: true
                    }
                },
                departmentManager: {
                    include:{
                        employee: {
                            include:{
                                position: true,
                                typeOfEmployee: true
                            }
                        }
                    }
                }
            }
        })


        if(!department){
            return null
        }

        return department
    } catch (error) {
        console.log(error)
    }
}