"use client"


import { useState } from "react"
import { FaUser } from "react-icons/fa6"
import { IoMdAddCircleOutline } from "react-icons/io"

import { useRouter } from "next/navigation"




const Statusbar = () => {

    const router = useRouter()


    return (
        <div className='w-full p-5 border shadow-md rounded-lg space-y-4'>
            <h3 className='font-bold text-md'>
                Thao tác chức năng
            </h3>

            <div className='flex items-center justify-start gap-4'>
                <div 
                    className='transition-all flex items-center justify-center border rounded-md p-5 bg-[#2c76f9] cursor-pointer hover:ring-2'
                    onClick={()=>router.push('/admins/rewards/kindOfReward')}
                >
                    <div className='flex flex-col items-center text-white gap-2'>
                        <IoMdAddCircleOutline size={30} className='font-bold' />
                        <h3 className='text-sm font-semibold' >Loại khen thưởng</h3>
                    </div>
                </div>
                <div 
                    className='transition-all flex items-center justify-center border rounded-md p-5 bg-[#6771e6] cursor-pointer hover:ring-2'
                    onClick={()=> router.push('/admins/rewards/employees')}    
                >
                    <div className='flex flex-col items-center text-white gap-2'>
                        <FaUser size={30} className='font-bold' />
                        <h3 className='text-sm font-semibold' >Khen thưởng nhân viên</h3>
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default Statusbar