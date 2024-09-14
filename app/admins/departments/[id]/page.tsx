import getDepartmentById from "@/app/actions/departments/getDepartmentById";
import MainContent from "./components/MainContent"



interface IParams{
  id: string
}



const DepartmentIdPage = async ({
  params
}:{
  params: IParams
}) => {

  const department = await getDepartmentById(params.id)
  

  if(!department){
    return null;
  }
  
  return (
    <div>
      <MainContent employees={department?.employees} department={department}/>
    </div>
  )
}

export default DepartmentIdPage