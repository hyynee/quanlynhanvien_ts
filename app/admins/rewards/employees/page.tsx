import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import Statusbar from "./components/Statusbar"
import MainContent from "./components/MainContent"
import getKindOfRewardList from "@/app/actions/rewards/getKindOfRewardList"






const page = async () => {

  const departments = await getDepartmentList()
  const bonusType = await getKindOfRewardList()
  return (
    <div className="p-5 space-y-10 overflow-auto">
        <Statusbar/>
        <MainContent departments={departments} bonusType={bonusType}/>
        
    </div>
  )
}

export default page