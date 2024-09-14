
import getCurrentUser from "@/app/actions/users/getCurrentUser"
import MainContent from "./components/MainContent"
import getPositionList from "@/app/actions/positions/getPositonList"
import { redirect } from "next/navigation"

const page = async () => {

  const user = await getCurrentUser()

  if(user?.role === 'GUEST'){
    return redirect('/users')
  }

  

  const positions = await getPositionList()
  return (
    <div className="w-full h-full">
      <MainContent positions={positions}/>
    </div>
  )
}

export default page