
import getEmployeeById from "../actions/employees/getEmployeeById"
import getCurrentUser from "../actions/users/getCurrentUser"

import MainContent from "./components/MainContent"

import { redirect } from 'next/navigation'






const UserPage = async () => {

  

  const user = await getCurrentUser()
  let employee;
  if(!user){
    return redirect('/authentication')
  }
  
  if(user?.role === 'ADMIN'){
    return redirect('/admins')
  }

  
  if(user.employee?.id){
    employee = await getEmployeeById(user?.employee?.id)
  }
  


  return (
    <div className="w-full h-full p-5 overflow-auto">
        <MainContent employee={employee} salaries={employee?.slaries? employee.slaries : []}/>
    </div>
  )
}

export default UserPage