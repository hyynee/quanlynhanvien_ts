
import Logo from "../../../components/Logo"
import Menu from "./menu/Menu"


const Sidebar = () => {


  return (
    <div 
      className="
        md:flex 
        hidden 
        h-full 
        w-[20rem] 
        border-r px-10
        flex-col
        items-center
        gap-4
        "
      >
      <Logo/>
      <div className="w-full">
        <Menu/>
      </div>

     
    </div>
  )
}

export default Sidebar