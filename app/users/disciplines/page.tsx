import getEmployeeList from "@/app/actions/employees/getEmployeeList"

import MainContent from "./components/MainContent";
import getDisciplineList from "@/app/actions/disciplines/getDisciplineList";


import getDepartmentList from "@/app/actions/departments/getDepartmentsList";

import getKindOfDisciplineList from "@/app/actions/disciplines/getKindOfDisciplineList";
import getCurrentUser from "@/app/actions/users/getCurrentUser";
import { redirect } from "next/navigation";
import getEmployeeById from "@/app/actions/employees/getEmployeeById";





const DeciplinePage = async () => {



  const user = await getCurrentUser()
  if(!user || !user.employee){
    return redirect('/authentication')
  }

  if(user?.role === 'ADMIN'){
    return redirect('/admins')
  }



  const employee = await getEmployeeById(user?.employee?.id)


  return (
    <div className="p-5 space-y-10">
        
        <MainContent disciplines={employee?.disciplines? employee.disciplines: []}  />
    </div>
  )
}

export default DeciplinePage