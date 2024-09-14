import { db } from "@/lib/db"





export default async function getProjectById(id:string) {
    try {
        
        const project = await db.project.findUnique({
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
                departments: true
            }
        })


        if(!project){
            return null
        }

        return project
    } catch (error) {
        console.log(error)
    }
}