
import MainContent from "./components/MainContent"
import Statusbar from "./components/Statusbar"
import getKindOfDisciplineList from "@/app/actions/disciplines/getKindOfDisciplineList";




const page = async () => {

  const disciplineTypes = await getKindOfDisciplineList();
  return (
    <div className="p-5 space-y-10">
      <Statusbar/>
      <MainContent disciplineTypes={disciplineTypes}/>
    </div>
  )
}

export default page