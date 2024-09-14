import getSalaryList from "@/app/actions/salaries/getSalaryList"
import MainContent from "./components/MainContent"




const SalaryPage = async () => {


  const salaries = await getSalaryList()
  return (
    <div>
      <MainContent salaries={salaries}/>
    </div>
  )
}

export default SalaryPage