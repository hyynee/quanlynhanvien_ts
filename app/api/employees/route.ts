import { db } from "@/lib/db";

import { NextResponse } from "next/server";




 
export async function POST(req: Request) {
    try{
        const body = await req.json()

        const {
            firstName,
            lastName,
            imageUrl,
            sex,
            dateOfBirth,
            birthplace,
            identificationCode,
            dateRange,
            issuedBy,
            nationality,
            religion,
            nationId,
            departmentId,
            phone,
            email,
            address,
            positionId,
            degreeId,
            specialize,
            experience,
            typeOfEmployeeId,
            status
        } = body;


        const existingEmployee = await db.employee.findUnique({
            where:{
                email: email
            }
        })

        if(existingEmployee){
            return NextResponse.json(existingEmployee)
        }

        const newEmployee = await db.employee.create({
            data:{
                firstName,
                lastName,
                email,
                dateOfBirth,
                birthPlace: birthplace,
                identificationCode,
                dateRange,
                issuedBy,
                nationality,
                religion,
                nations:{
                    connect:{
                        id: nationId
                    }
                },
                phone,
                address,
                imageUrl,
                sex,
                degrees:{
                    connect:{
                        id:degreeId
                    }
                },
                specialize,
                experience,
                status,
                positionId: positionId,
                DepartmentId: departmentId,
                typeOfEmployeeId

            },
           
        })

        if(!newEmployee){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }


        return NextResponse.json(newEmployee)
       
        

    }catch(error: any){
        console.log(error)
    }
}





