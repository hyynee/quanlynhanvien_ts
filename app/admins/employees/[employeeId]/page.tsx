import getEmployeeById from "@/app/actions/employees/getEmployeeById";
import { IoMdArrowDropright } from "react-icons/io";
import MainContent from "./components/MainContent";
import getSalaryList from "@/app/actions/salaries/getSalaryList";



interface IParams {
  employeeId: string;
}


const EmployeeIdPage = async ({
  params
}: {
  params: IParams
}) => {

  const employee = await getEmployeeById(params.employeeId)

  
  if(!employee){
    return null;
  }



  return (
    <div>
      <MainContent employee={employee} salaries={employee?.slaries} />
    </div>
  )
}

export default EmployeeIdPage