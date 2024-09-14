import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        
        const body = await req.json()

        const {
            name,
            description,
            phone,
        } = body;


        const existingDepartment = await db.department.findUnique({
           where:{
                departmentName: name
           }
        })

        if(existingDepartment){
            return NextResponse.json(existingDepartment);
        }


      

        const newDepartment = await db.department.create({
            data:{
                departmentName: name,
                description: description,
                phone:phone,
            }
        })

        if(!newDepartment){
            return new NextResponse('INTERNAL ERROR', {status: 500})
        }

        
        return NextResponse.json(newDepartment);



    } catch (error) {
        console.log(error)
    }
}



export async function PUT(req: Request) {

    try {
        const body = await req.json()

        const {
            name,
            description,
            phone,
            managerId
        } = body;




        const updated = await db.department.update({
            where:{
                departmentName: name
            },
            data:{
                departmentName: name,
                description,
                phone,
                departmentManager:{
                    create:{
                        employeeId: managerId
                    }
                }
            }
        })

        if(!updated){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }

        return NextResponse.json(updated)
    } catch (error) {
        console.log(error)
    }
    
}


export async function DELETE(req: Request) {
    try {
        const body = await req.json()
        
        
        const { id } = body;

        const deleted = await db.department.delete({
            where:{
                id: id
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