"use client"


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiNoteDuotone } from "react-icons/pi";



interface NavbarProps{
    user: any
}

const Navbar = ({
    user
}: NavbarProps) => {

    const [showDropdown, setShowDropdown] = useState(false)
    const router = useRouter()

    const toggleMenu = ()=>{
        setShowDropdown(!showDropdown)
    }

    return (
        <div
            className="
                h-[4em] 
                border-b 
                 box-border
                w-full 
                font-bold  
                shadow-sm

                "
        >
            <div className="w-full h-full px-10 py-5 flex items-center justify-end box-border">

                <div className="relative">
                    <div 
                        className="flex items-center gap-3 hover:bg-slate-300 rounded-md p-2 cursor-pointer"
                        onClick={()=>toggleMenu()}
                    >
                        <div className="relative">
                            <PiNoteDuotone size={20} className="text-gray-600 cursor-pointer" />
                            <div className="w-[10px] h-[10px] bg-rose-500 absolute -top-1 right-0 rounded-full" />
                        </div>
                        <div className="flex gap-3">
                            <Avatar>
                                <AvatarImage src={user?.employee?.imageUrl} alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-2">
                                <h2
                                    className="text-sm font-semibold"
                                >
                                    {user?.employee?.firstName} {user?.employee?.lastName}
                                </h2>
                                <IoIosArrowDown className="text-gray-600" size={16} />
                            </div>
                        </div>


                    </div>


                    {showDropdown && (
                        <div className="absolute flex flex-col gap-3 mt-2 w-full rounded-lg shadow-md bg-white animate-dropdown cursor-pointer z-50">
                            <Button variant='ghost'
                                onClick={()=> router.push(`/users`)}
                            >
                                Xem thông tin
                            </Button>
                            <Button 
                                variant='ghost'
                                onClick={()=> signOut()}    
                            >
                                Đăng xuất
                            </Button>
                        </div>

                    )}


                </div>

            </div>


        </div>
    )
}

export default Navbar