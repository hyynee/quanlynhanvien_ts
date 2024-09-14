import { db } from "@/lib/db";




export default async function charTypeEmployee() {

    const typeEs = await db.typeOfEmployee.findMany()

    const data1 = await db.employee.count({
        where:{
            typeOfEmployee:{
                name:typeEs[0].name
            }
        }
    })
    const data2 = await db.employee.count({
        where:{
            typeOfEmployee:{
                name:typeEs[1].name
            }
        }
    })
    const data3 = await db.employee.count({
        where:{
            typeOfEmployee:{
                name:typeEs[2].name
            }
        }
    })



    const data = [
        data1,
        data2,
        data3
    ]


    return data

    
    
}