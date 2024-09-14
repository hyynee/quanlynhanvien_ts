


import getProjectList from "@/app/actions/projects/getProjectList"
import MainContent from "./components/MainContent"
import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import getCurrentUser from "@/app/actions/users/getCurrentUser"
import { redirect } from "next/navigation"

const page = async () => {
  const projects = await getProjectList()

  const departments = await getDepartmentList()

  const user = await getCurrentUser()

  if(user?.role === 'GUEST'){
    return redirect('/users')
  }

  
  return (
    <div className="w-full h-full">
      <MainContent projects={projects} departments={departments} />
    </div>
  )
}

export default page