import getNationList from "@/app/actions/nations/getNationList"
import MainContent from "./components/MainContent"


const page = async () => {
  

  const nations = await getNationList()
  return (
    <div className="w-full h-full">
      <MainContent nations={nations}/>
    </div>
  )
}

export default page