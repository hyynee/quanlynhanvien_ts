import getEmployeeList from "@/app/actions/employees/getEmployeeList"

import MainContent from "./components/MainContent";
import getDisciplineList from "@/app/actions/disciplines/getDisciplineList";
import Statusbar from "./components/Statusbar";

import getDepartmentList from "@/app/actions/departments/getDepartmentsList";

import getKindOfDisciplineList from "@/app/actions/disciplines/getKindOfDisciplineList";
import getCurrentUser from "@/app/actions/users/getCurrentUser";
import { redirect } from "next/navigation";





const DeciplinePage = async () => {

  const disciplines = await getDisciplineList()
  const departments = await getDepartmentList();
  const disciplineTypes = await getKindOfDisciplineList();

  const user = await getCurrentUser()

  if(user?.role === 'GUEST'){
    return redirect('/users')
  }


  return (
    <div className="p-5 space-y-10">
        <Statusbar/>
        <MainContent disciplines={disciplines} departments={departments} disciplineTypes={disciplineTypes} />
    </div>
  )
}

export default DeciplinePage