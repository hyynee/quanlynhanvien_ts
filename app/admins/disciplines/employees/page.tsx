import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import Statusbar from "./components/Statusbar"
import MainContent from "./components/MainContent"
import getKindOfDisciplineList from "@/app/actions/disciplines/getKindOfDisciplineList"






const page = async () => {

  const departments = await getDepartmentList()
  const disciplineTypes = await getKindOfDisciplineList()
  return (
    <div className="p-5 space-y-10 overflow-auto">
        <Statusbar/>
        <MainContent departments={departments} disciplineTypes={disciplineTypes}/>
        
    </div>
  )
}

export default page