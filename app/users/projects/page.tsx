


import getProjectList from "@/app/actions/projects/getProjectList"
import MainContent from "./components/MainContent"
import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import getCurrentUser from "@/app/actions/users/getCurrentUser"
import { redirect } from "next/navigation"
import getEmployeeById from "@/app/actions/employees/getEmployeeById"

const page = async () => {


  const user = await getCurrentUser()
  if(!user || !user.employee){
    return redirect('/authentication')
  }

  if(user?.role === 'ADMIN'){
    return redirect('/admins')
  }



  const employee = await getEmployeeById(user?.employee?.id)

  
  return (
    <div className="w-full h-full">
      <MainContent projects={employee?.projects? employee.projects: []}  />
    </div>
  )
}

export default page