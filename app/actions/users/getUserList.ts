import { db } from "@/lib/db"





async function getUserList() {
    const users = await db.user.findMany({
       include:{
        employee: true
       }
    })
    
    if(!users){
        return []
    }

    return users
}

export default getUserList