import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import MainContent from "./components/MainContent"
import getCurrentUser from "@/app/actions/users/getCurrentUser"
import { redirect } from "next/navigation"
import getDepartmentById from "@/app/actions/departments/getDepartmentById"

const page = async () => {
  const user = await getCurrentUser()
  
  if(!user || !user.employee){
    return redirect('/authentication')
  }
  if(user?.role === 'ADMIN'){
    return redirect('/admins')
  }




  if(!user.employee.DepartmentId){
    return (
      <div className="p-5 w-full h-ful flex items-center justify-center">
        Nhân viên chưa ở phòng ban nào
      </div>
    )
  }


  
  
  const department = await getDepartmentById(user?.employee?.DepartmentId) 





  
  return (
    <div className="w-full h-full">
      <MainContent department={department} employees={department?.employees?  department?.employees: []}/>
    </div>
  )
}

export default page