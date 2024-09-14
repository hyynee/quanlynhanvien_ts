import { db } from "@/lib/db";

export default async function getDegreeList() {
    

    const degrees = await db.degree.findMany()


    if(!degrees){
        return []
    }


    return degrees
}