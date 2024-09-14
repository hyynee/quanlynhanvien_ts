"use client"

import { useEffect, useState } from "react"
import ColumnChart from "./charts/ColumnChart"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import './style.css'
import CircleChart from "./charts/CircleChart";

interface ChartSectionProps{
    columnData: any[]
    cicleData: any[]
}
const ChartSection = ({
    columnData,
    cicleData

}: ChartSectionProps) => {
    const [isMounted, setIsMounted]= useState(false)
    const [showfilter, setShowFilter] = useState(false)

    
    const toggleFilter = () => {
        setShowFilter(!showfilter);
    }

    useEffect(()=>{
        setIsMounted(true)
    })

    if(!isMounted){
        return null;
    }
    return (
        <div className="flex w-full mt-5 gap-6">
            <div className="w-[70%] p-3 border rounded-lg shadow-lg" >
                <div className="w-full flex justify-between items-center">
                    <h3 className="font-semibold text-md">Tổng quan nhân viên</h3>
                    <div className="" onClick={toggleFilter}>
                        <div className="relative">
                            <div className="border px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                                <p className="font-semibold text-sm">Last Year</p>

                                {showfilter ? <IoIosArrowUp /> : <IoIosArrowDown />}

                            </div>

                            {showfilter && (
                                <div className="border rounded-md w-full flex flex-col gap-2 absolute animate-dropdown z-50 bg-white">
                                    <p className="px-2 py-1 hover:bg-[#e7f1fe] cursor-pointer">2023</p>
                                    <p className="px-2 py-1 hover:bg-[#e7f1fe] cursor-pointer">2023</p>
                                    <p className="px-2 py-1 hover:bg-[#e7f1fe] cursor-pointer">2023</p>

                                </div>
                            )}
                        </div>


                    </div>
                </div>
                <ColumnChart height={350} data={columnData}/>

            </div>
            <div className="w-[30%]  p-3 border rounded-lg shadow-lg" >

                <div className="w-full h-full flex flex-col gap-10 items-center">
                    <h3 className="font-semibold text-md self-start">Tình trạng nhân viên</h3>
                    <div className="h-full w-full ">
                        <CircleChart data={cicleData}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChartSection