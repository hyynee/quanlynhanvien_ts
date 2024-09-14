import { db } from '@/lib/db';

export default async function getNewEmployeesOfThisMonth() {
  
  const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  
  const newEmployees = await db.employee.findMany({
    where: {
      createAt: {
        gte: firstDayOfMonth,
      },
    },
  });


  if(!newEmployees){
    return []
  }

  return newEmployees;
}

