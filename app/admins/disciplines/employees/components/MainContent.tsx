import DisciplineForm from "./DisciplineForm"
import RewardForm from "./DisciplineForm"



interface MainContentProps{
    departments: any[],
    disciplineTypes: any[]
}


const MainContent = ({
    departments,
    disciplineTypes
}: MainContentProps) => {
    
  return (
    <div className="w-full overflow-auto">
        <DisciplineForm departments={departments} disciplineTypes={disciplineTypes}/>
    </div>
  )
}

export default MainContent