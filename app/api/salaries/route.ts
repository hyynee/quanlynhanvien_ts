import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const {
            employeeId,
            workday,
            allowance,
            description
        } = body;

        const employee = await db.employee.findUnique({
            where:{
                id: employeeId
            },
            include:{
                position: true,
                disciplines: true,
                bonuses: true
            }
        })
        
        if(!employee){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }
        
        const coefficient = employee.position?.coefficient?.toString() || '0';
        const workdayFloat = parseInt(workday || '0');
        const allowanceFloat = parseFloat(allowance || '0');

        let basicSalary = parseFloat(coefficient) * ((1800000/30)) * workdayFloat;
        let salary = basicSalary + allowanceFloat;

        if(employee.bonuses.length > 0 && employee.disciplines.length > 0){
            salary = salary + employee.bonuses[0].prizeMoney - employee.disciplines[0].fine
        }else if(employee.bonuses.length > 0){
            salary = salary + employee.bonuses[0].prizeMoney
        }else if(employee.disciplines.length > 0){
            salary = salary - employee.disciplines[0].fine
        }

        const newSalary = await db.salary.create({
            data:{
                employeeId: employeeId,
                salary,
                basicSalary,
                workday: workdayFloat,
                allowance: allowanceFloat,
                description: description
            }
        })

        if(!newSalary){
            return new NextResponse('INTERNAL ERROR', { status: 500 })
        }

        return NextResponse.json(newSalary);
    } catch (error) {
        console.log(error)
    }
}
