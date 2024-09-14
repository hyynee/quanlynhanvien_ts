import { db } from "@/lib/db";
import { NextResponse } from "next/server";







export async function POST(req: Request) {
    try {
        const body = await req.json()

        const {
            email,
            password,
            role,
            employeeId
        } = body;



        const existingUser = await db.user.findUnique({
            where: {
                email
            }
        })

        if (existingUser) {
            return NextResponse.json(existingUser)
        }



        if (employeeId === '') {
            const newUser = await db.user.create({
                data: {
                    email,
                    password,
                    role,

                }
            })

            if (!newUser) {
                return new NextResponse('CREATE FAILED', { status: 500 })
            }

            return NextResponse.json(newUser);
        }

        const newUser = await db.user.create({
            data: {
                email,
                password,
                role,
                employee: {
                    connect: {
                        id: employeeId
                    }
                }

            }
        })

        if (!newUser) {
            return new NextResponse('EMPLOYEEID IS NULL', { status: 500 })
        }

        return NextResponse.json(newUser);


    } catch (error) {
        throw new Error('INTERNAL ERROR')
    }
}



export async function PUT(req: Request) {
    try {

        const body = await req.json()
        const {
            id,
            email,
            password,
            role,
            employeeId
        } = body;

      

        if (employeeId === '') {
            const newUser = await db.user.update({
                where:{
                    id
                },
                data: {
                    email,
                    password,
                    role,

                }
            })

            if (!newUser) {
                return new NextResponse('CREATE FAILED', { status: 500 })
            }

            return NextResponse.json(newUser);
        }

        const newUser = await db.user.update({
            where:{
                id
            },
            data: {
                email,
                password,
                role,
                employee: {
                    connect: {
                        id: employeeId
                    }
                }

            }
        })

        if (!newUser) {
            return new NextResponse('EMPLOYEEID IS NULL', { status: 500 })
        }

        return NextResponse.json(newUser);


    } catch (error) {
        console.log(error)
    }

}



export async function DELETE(req: Request) {
    try {
        const body = await req.json()
        const { userId } = body;


        const userDelete = await db.user.delete({
            where:{
                id: userId
            }
        })

        if(!userDelete){
            return new NextResponse('Internal Error', { status: 500 })
        }


        return NextResponse.json(userDelete);
    } catch (error) {
        console.log(error);        
    }
    
}