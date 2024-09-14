import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import MainContent from "./components/MainContent"
import getCurrentUser from "@/app/actions/users/getCurrentUser"
import { redirect } from "next/navigation"

const page = async () => {
  const departments = await getDepartmentList()

  const user = await getCurrentUser()

  if(user?.role === 'GUEST'){
    return redirect('/users')
  }


  
  return (
    <div className="w-full h-full">
      <MainContent departments={departments}/>
    </div>
  )
}

export default page