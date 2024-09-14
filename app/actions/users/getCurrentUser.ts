import { db } from "@/lib/db"
import { getServerSession } from "next-auth"





const getCurrentUser = async () => {

    const session = await getServerSession()


    if(!session){
        return null  
    }

    const currentUser = await db.user.findUnique({
        where:{
            email: `${session.user?.email}`
        },
        include:{
            employee: true
        }
    })

    if(!currentUser){
        return null;
    }

    return currentUser;
    
    
}

export default getCurrentUser