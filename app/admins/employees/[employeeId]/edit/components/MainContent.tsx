"use client"

import getEmployeeById from "@/app/actions/employees/getEmployeeById";
import useEmployee from "@/hooks/useEmployee"




const MainContent = async () => {

    const  { employeeId }  = useEmployee();


    

   
  return (
    <div className="w-full h-full">

    </div>
  )
}

export default MainContent