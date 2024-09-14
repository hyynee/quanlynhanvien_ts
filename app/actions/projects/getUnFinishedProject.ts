

import { db } from '@/lib/db';

export default async function getUnFinishedOfThisMonth() {
  
  const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  
  const newProjects = await db.project.findMany({
    where: {
      createAt: {
        gte: firstDayOfMonth,
      },
      status: 'UNFINISHED'
    },
  });


  if(!newProjects){
    return []
  }

  return newProjects;
}

