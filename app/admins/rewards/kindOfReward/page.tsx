
import getKindOfRewardList from "@/app/actions/rewards/getKindOfRewardList"
import MainContent from "./components/MainContent"
import Statusbar from "./components/Statusbar"




const page = async () => {

  const rewardType = await getKindOfRewardList();
  return (
    <div className="p-5 space-y-10">
      <Statusbar/>
      <MainContent rewardTypes={rewardType}/>
    </div>
  )
}

export default page