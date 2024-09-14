


import Sidebar from "@/app/admins/components/Sidebar"
import Header from "./components/Header"


interface AdminLayoutProps {
    children: React.ReactNode
}


const AdminLayout = ({
    children
}: AdminLayoutProps) => {
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

export default AdminLayout