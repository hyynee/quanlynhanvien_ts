import Statusbar from "./components/Statusbar"



const RewardLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className="w-full h-full">
        {children}  
    </div>
  )
}

export default RewardLayout