import { Toaster } from "react-hot-toast"

const layout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className="h-full w-full">
        <Toaster/>
        {children}
        
    </div>
  )
}

export default layout