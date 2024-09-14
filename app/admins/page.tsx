import charData from "../actions/employees/charData"
import charTypeEmployee from "../actions/employees/charTypeEmployee"
import generateCompletedProjectsData from "../actions/projects/countCompletedProjectsInMonth"
import getFinishedOfThisMonth from "../actions/projects/getFinishedProject"
import getNewProjectsOfThisMonth from "../actions/projects/getNewProjectsOfThisMonth"
import getProjectList from "../actions/projects/getProjectList"
import getUnFinishedOfThisMonth from "../actions/projects/getUnFinishedProject"
import getCurrentUser from "../actions/users/getCurrentUser"
import ChartSection from "./components/ChartSection"
import Logout from "./components/Logout"
import ProjectSection from "./components/ProjectSection"
import StatusBar from "./components/StatusBar"
import { redirect } from 'next/navigation'






const AdminPage = async () => {
  const newProject = await getNewProjectsOfThisMonth()
  const finishedProject = await getFinishedOfThisMonth();
  const unfinishedProject = await getUnFinishedOfThisMonth();
  const projectData = await generateCompletedProjectsData()
  const projects = await getProjectList();

  

  const user = await getCurrentUser()

  if(user?.role === 'GUEST'){
    return redirect('/users')
  }

  // if(user?.role === 'ADMIN'){
  //   return redirect('/admins')
  // }

  

  const ChartSectionData = await charData()
  const chartType = await charTypeEmployee()
  return (
    <div className="w-full h-full p-5 overflow-auto">
        <StatusBar/>
        <ProjectSection newProject={newProject} finishedProject={finishedProject} unfinishedProject={unfinishedProject} data={projectData} projects={projects} />
        <ChartSection columnData={ChartSectionData} cicleData={chartType}/>
       
    </div>
  )
}

export default AdminPage