import { db } from "@/lib/db";

export default async function getTotalSalaryOfEmployeesThisMonth() {
    const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const salaries = await db.salary.aggregate({
      _avg:{
        salary: true
      }
    });
  
  
    return salaries;
  }
  