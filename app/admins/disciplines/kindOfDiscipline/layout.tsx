import { Toaster } from "react-hot-toast"


const layout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className="w-full h-full">
        <Toaster/>
        {children}
    </div>
  )
}

export default layout