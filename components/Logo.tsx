
import { PiNotionLogoBold } from "react-icons/pi";


const Logo = () => {
  return (
    <div 
      className="
        flex
        text-center 
        box-border 
        items-center 
        justify-center 
        w-full h-[4rem] 
        border-b 
      ">
        <div className="flex items-center gap-1">
          <PiNotionLogoBold size={30} className="text-[#2c76f9]"/>
          <h2 className="font-bold text-xl text-[#2c76f9]">
              NvNv
          </h2>
        </div>
    </div>
  )
}

export default Logo