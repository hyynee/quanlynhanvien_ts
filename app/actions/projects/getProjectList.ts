import { db } from "@/lib/db";


export default async function getProjectList() {
    
    const projects = await db.project.findMany({})

    if(!projects){
        return []
    }

    return projects
}