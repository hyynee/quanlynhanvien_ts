import getEmployeeList from "@/app/actions/employees/getEmployeeList"
import MainContent from "./components/MainContent"
import getCurrentUser from "@/app/actions/users/getCurrentUser"
import { redirect } from "next/navigation"


const EmployeePage = async () => {

  const employees = await getEmployeeList()
  const user = await getCurrentUser()

  if(user?.role === 'GUEST'){
    return redirect('/users')
  }


  return (
    <div className="w-full h-full">
      <MainContent employees={employees} />

    </div>
  )
}

export default EmployeePage