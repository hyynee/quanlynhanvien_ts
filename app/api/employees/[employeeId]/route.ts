import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(req: Request, context: any) {
    const { params } = context

    const employeeId = params.employeeId;

    const findEmployee = await db.employee.findUnique({
        where:{
            id: employeeId
        },
        include:{
            nations:true,
            degrees: true
        }
    })

    if(!employeeId){
        return NextResponse.json(null)
    }

  


    return NextResponse.json(findEmployee)
    
}

export async function PUT(req: Request, context: any) {
    try{
        const body = await req.json()

        const { params } = context;
        
        const employeeId = params.employeeId

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
            projectId,
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


        if(!projectId){
            const updated = await db.employee.update({
                where:{
                    id: employeeId
                },
                data:{
                    firstName,
                    lastName,
                    imageUrl,
                    sex,
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
                    DepartmentId: departmentId,
                    phone,
                    email,
                    address,
                    positionId,
                    degrees:{
                        connect:{
                            id: degreeId
                        }
                    },
                    specialize,
                    experience,
                    typeOfEmployeeId,
                    status
                }
            })
    
    
            if(!updated){
                return new NextResponse('INTERNAL ERROR', { status: 500 })
            }
    
            return NextResponse.json(updated);
        }

        const updated = await db.employee.update({
            where:{
                id: employeeId
            },
            data:{
                firstName,
                lastName,
                imageUrl,
                sex,
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
                DepartmentId: departmentId,
                projects:{
                    disconnect:{
                        id: projectId
                    }
                },
                phone,
                email,
                address,
                positionId,
                degrees:{
                    connect:{
                        id: degreeId
                    }
                },
                specialize,
                experience,
                typeOfEmployeeId,
                status
            }
        })


        if(!updated){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }

        return NextResponse.json(updated);





    }catch(error: any){
        console.log(error)
    }
}



export async function DELETE(req: Request, context: any) {


    try {
        const { params } = context;

        const  employeeId  = params.employeeId;

     


        const deleted = await db.employee.delete({
            where:{
                id: employeeId
            }
        })

        if(!deleted){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }

        return NextResponse.json(deleted);
    } catch (error) {
        console.log(error)
    }
    
}