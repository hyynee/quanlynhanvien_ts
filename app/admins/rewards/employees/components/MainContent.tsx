import RewardForm from "./RewardForm"



interface MainContentProps{
    departments: any[],
    bonusType: any[]
}


const MainContent = ({
    departments,
    bonusType
}: MainContentProps) => {
    
  return (
    <div className="w-full overflow-auto">
        <RewardForm departments={departments} bonusType={bonusType}/>
    </div>
  )
}

export default MainContent