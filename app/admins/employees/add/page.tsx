import getPositionList from "@/app/actions/positions/getPositonList"
import EmployeeForm from "./components/EmployeeForm"
import getDepartmentList from "@/app/actions/departments/getDepartmentsList";
import getTypeOfEmployeeList from "@/app/actions/employees/getTypeOfEmployeeList";
import getDegreeList from "@/app/actions/rewards/getDegreeList";
import getNationList from "@/app/actions/nations/getNationList";







const AddPage = async () => {
  const postions = await getPositionList();
  const departments = await getDepartmentList();
  const typeOfEmployees = await getTypeOfEmployeeList();
  const degrees = await getDegreeList()
  const nations = await getNationList()

  return (
    <div className="w-full h-full p-5">
        <EmployeeForm positions={postions} departments={departments} typeOfEmployees={typeOfEmployees} degrees={degrees} nations={nations}/>
    </div>
  )
}

export default AddPage