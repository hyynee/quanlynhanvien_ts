
import getProjectById from "@/app/actions/projects/getProjectById"
import MainContent from "./components/MainContent"
import getDepartmentList from "@/app/actions/departments/getDepartmentsList"



interface IParams{
  id: string
}



const ProjectIdPage = async ({
  params
}:{
  params: IParams
}) => {

  const project = await getProjectById(params.id)
  const departments = await getDepartmentList();
  

  if(!project){
    return null;
  }
  
  return (
    <div>
      <MainContent departments={departments} project={project}/>
    </div>
  )
}

export default ProjectIdPage