import getUserList from "@/app/actions/users/getUserList"
import MainContent from "./components/MainContent"
import { redirect } from "next/navigation"
import getCurrentUser from "@/app/actions/users/getCurrentUser"






const page = async () => {

    const user = await getCurrentUser()

    if(user?.role === 'GUEST'){
      return redirect('/users')
    }
  

    const users = await getUserList();
    return (
        <div className="w-full h-full">
            <MainContent accounts={users}/>

        </div>
    )
}

export default page