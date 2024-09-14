"use client"

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ColumnChart from "./charts/ColumnChart";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



interface ProjectSectionProps{
    newProject:any[],
    finishedProject: any[],
    unfinishedProject:any[],
    data: any[],
    projects: any[]
}


const ProjectSection = ({
    newProject,
    finishedProject,
    unfinishedProject,
    data,
    projects
}: ProjectSectionProps) => {
    const [showfilter, setShowFilter] = useState(false)
    const router = useRouter()
    const toggleFilter = () => {
        setShowFilter(!showfilter);
    }
    return (
        <div className="w-full mt-5 flex gap-6">

            <div className="w-[50%] p-3 border rounded-lg shadow-lg" >
                <div className="w-full flex justify-between items-center">
                    <h3 className="font-semibold text-md">Tổng quan dự án</h3>
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
                <ColumnChart height={250} data={data}/>

            </div>
            <div className="w-[50%] flex flex-col justify-between gap-3 p-3 border rounded-lg shadow-lg" >
                <h3 className="text-md w-full font-semibold">Tổng quan dự án</h3>
                <div className="flex gap-2 items-center">
                    <h3 className="text-xl font-bold">{projects.length}</h3>
                    <p className="text-sm font-semibold">Dự án</p>
                </div>
                <div className="w-full flex flex-col gap-4">

                    <div className="grid grid-cols-3 w-full gap-4">




                        <div className="flex flex-col gap-4">
                            <div className="h-[20px] bg-[#fc717a]">
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-[#dcdfe3] font-semibold">Dự án mới</p>

                                <div className="flex items-center gap-2">
                                    <div className="w-[15px] h-[15px] rounded-full bg-[#fc6e78]" />
                                    <p className=" text-md font-bold">{newProject.length}</p>


                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="h-[20px] bg-[#44b4fa]">
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-[#dcdfe3] font-semibold">Dự án đã hoàn thành</p>

                                <div className="flex items-center gap-2">
                                    <div className="w-[15px] h-[15px] rounded-full bg-[#3fb2fa]" />
                                    <p className=" text-md font-bold">{finishedProject.length}</p>


                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="h-[20px] bg-[#fdb657]">
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-[#dcdfe3] font-semibold">Dự án đang làm</p>

                                <div className="flex items-center gap-2">
                                    <div className="w-[15px] h-[15px] rounded-full bg-[#fdb454]" />
                                    <p className=" text-md font-bold">{unfinishedProject.length}</p>


                                </div>
                            </div>
                        </div>



                    </div>

                </div>


                <Button className="transition-all w-full bg-[#2c76f9] hover:bg-[#5c8cdd] hover:ring-2" onClick={()=> router.push('/admins/projects')}>
                    Xem tất cả
                </Button>

            </div>
        </div>
    )
}

export default ProjectSection