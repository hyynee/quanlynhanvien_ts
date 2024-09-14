import getDepartmentList from "@/app/actions/departments/getDepartmentsList"
import MainContent from "./components/MainContent"
import getPositionList from "@/app/actions/positions/getPositonList"
import getDegreeList from "@/app/actions/rewards/getDegreeList"

const page = async () => {
  

  const degrees = await getDegreeList()
  return (
    <div className="w-full h-full">
      <MainContent degrees={degrees}/>
    </div>
  )
}

export default page