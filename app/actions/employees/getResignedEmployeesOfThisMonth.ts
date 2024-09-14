import { db } from '@/lib/db';


export default async function getResignedEmployeesOfThisMonth() {
  const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  const resignedEmployees = await db.employee.findMany({
    where: {
      updateAt: {
        gte: firstDayOfMonth,
      },
      status: 'INACTIVE'
    },
  });

  if(!resignedEmployees){
    return []
  }

  return resignedEmployees;
}

