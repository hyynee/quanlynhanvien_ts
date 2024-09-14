import { db } from "@/lib/db";

export default async function getTotalSalary() {
    const total = await db.salary.aggregate({
        _sum: {
            salary: true,
        },
    });

    return total._sum.salary;
}
