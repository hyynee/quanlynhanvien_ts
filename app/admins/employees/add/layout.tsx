import { Toaster } from "react-hot-toast"



const AddLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className="w-full h-full ">
        {children}
        <Toaster/>
    </div>
  )
}

export default AddLayout