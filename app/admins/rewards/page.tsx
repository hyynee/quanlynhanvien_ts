

import MainContent from "./components/MainContent";

import Statusbar from "./components/Statusbar";
import getBonusList from "@/app/actions/rewards/getBonusList";
import getDepartmentList from "@/app/actions/departments/getDepartmentsList";
import getKindOfRewardList from "@/app/actions/rewards/getKindOfRewardList";
import getCurrentUser from "@/app/actions/users/getCurrentUser";
import { redirect } from "next/navigation";





const RewardPage = async () => {

  const bonuses = await getBonusList()
  const departments = await getDepartmentList();
  const bonusType = await getKindOfRewardList();
  const user = await getCurrentUser()

  if(user?.role === 'GUEST'){
    return redirect('/users')
  }


  
  return (
    <div className="p-5 space-y-10">
        <Statusbar/>
        <MainContent bonuses={bonuses} departments={departments} bonusType={bonusType} />
    </div>
  )
}

export default RewardPage