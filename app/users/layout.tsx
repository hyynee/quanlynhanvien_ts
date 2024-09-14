



import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


interface UserLayoutProps {
    children: React.ReactNode
}


const UserLayout = ({
    children
}: UserLayoutProps) => {
    return (
        <div className="w-full h-full flex">
            <main className="w-full h-full overflow-hidden flex ">   
                <Sidebar/>  
                <div className="flex flex-col w-full h-full">
                    <Header/>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default UserLayout