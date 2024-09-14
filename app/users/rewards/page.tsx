

import MainContent from "./components/MainContent";


import getCurrentUser from "@/app/actions/users/getCurrentUser";
import { redirect } from "next/navigation";
import getEmployeeById from "@/app/actions/employees/getEmployeeById";





const RewardPage = async () => {

 
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
        
        <MainContent bonuses={employee?.bonuses? employee.bonuses : []}  />
    </div>
  )
}

export default RewardPage