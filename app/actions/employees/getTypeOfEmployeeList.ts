import { db } from "@/lib/db";



export default async function getTypeOfEmployeeList(){
    const typeOfEmployees = await db.typeOfEmployee.findMany()

    if(!typeOfEmployees){
        return []
    }

    return typeOfEmployees;
}