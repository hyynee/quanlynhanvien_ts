import getPositionList from "@/app/actions/positions/getPositonList"
import EditForm from "./components/EditForm"
import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import getTypeOfEmployeeList from "@/app/actions/employees/getTypeOfEmployeeList"
import getNationList from "@/app/actions/nations/getNationList"
import getDegreeList from "@/app/actions/rewards/getDegreeList"






const EmployeeIdEditPage = async () => {


  const positions = await getPositionList()
  const departments = await getDepartmentList()
  const typeOfEmployees = await getTypeOfEmployeeList();
  const nations = await getNationList()
  const degrees = await getDegreeList()



  return (
    <div className="w-full h-full" >
    
      <EditForm positions={positions} departments={departments} typeOfEmployees={typeOfEmployees} nations={nations} degrees={degrees}/>
      
    </div>
  )
}

export default EmployeeIdEditPage