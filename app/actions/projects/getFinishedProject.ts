

import { db } from '@/lib/db';


export default async function getFinishedOfThisMonth() {
  
  const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  
  const newProjects = await db.project.findMany({
    where: {
      createAt: {
        gte: firstDayOfMonth,
      },
      status: 'FINISHED'
    },
  });


  if(!newProjects){
    return []
  }

  return newProjects;
}

