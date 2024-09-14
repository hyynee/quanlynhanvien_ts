"use client"


import { useEffect, useState } from "react"
import { IoIosAddCircleOutline, IoIosSearch, IoMdArrowDropright } from "react-icons/io"

import { Pagination } from "@mui/material"
import ProjectTable from "./ProjectTable"
import { Button } from "@/components/ui/button"

import DepartmentTable from "./DepartmentTable"




interface MainContentProps {
    departments: any[],
    project: any

}


const PAGE_SIZE = 5

const MainContent = ({
    departments,
    project
}: MainContentProps) => {


    

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    const [currentPageE, setCurrentPageE] = useState(1);
    const [currentPageD, setCurrentPageD] = useState(1);


    const [searchValueE, setSearchValueE] = useState<any[]>(project.employees);
    const [searchValueD, setSearchValueD] = useState<any[]>(project.departments);
    const [searchTypeE, setSearchTypeE] = useState<string>("name");
    const [searchTypeD, setSearchTypeD] = useState<string>("name");

    const totalPagesE = Math.ceil(searchValueE.length / PAGE_SIZE);
    const startIndex = (currentPageE - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentEmployee = searchValueE.slice(startIndex, endIndex);

    const totalPagesD = Math.ceil(searchValueD.length / PAGE_SIZE);
    const startIndexD = (currentPageD - 1) * PAGE_SIZE;
    const endIndexD = startIndexD + PAGE_SIZE;
    const currentDepartment = searchValueD.slice(startIndexD, endIndexD);

    const handleChangePageE = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPageE(page);
    };
    const handleChangePageD = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPageD(page);
    };

    useEffect(() => {
        setSearchTypeE("name");
        setSearchTypeD("name")
    }, []);

    const handleSearchChangeE: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredDataE = project.employees.filter((item: any) => {
            const employeeName = `${item?.firstName} ${item?.lastName}`;
            if (searchTypeE === 'name') {

                return employeeName.toLowerCase().includes(value);
            }
            if (searchTypeE === 'id') {
                return item.id.toString().includes(value);
            }
            return true;
        });
        setSearchValueE(filteredDataE);
    };
    const handleSearchChangeD: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredDataE = project.departments.filter((item: any) => {
            const employeeName = item?.departmentName;
            if (searchTypeD === 'name') {

                return employeeName.toLowerCase().includes(value);
            }
            if (searchTypeD === 'id') {
                return item.id.toString().includes(value);
            }
            return true;
        });
        setSearchValueD(filteredDataE);
    };


    if (!isMounted) {
        return null
    }


    return (
        <div className="w-full p-5 space-y-10">
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-zinc-500">Chi tiết dự án</h3>

                <span className="flex gap-2 items-center text-zinc-500" >
                    <p className="font-semibold text-sm">Dự án</p>
                    <IoMdArrowDropright size={20} />
                    <p className="font-semibold text-sm">Chi tiết dự án</p>
                </span>
            </div>

            <div className=" rounded-lg shadow-sm border p-5 flex flex-col items-center justify-center gap-4">
                <h3 className="text-xl text-center font-semibold text-[#2c76f9]">{project.name}</h3>
                <p className="text-zinc-600">{project.description}</p>
            </div>

            
            {project.departments.length > 0 && (

                <div className="p-5 space-y-4">
                    <div className="w-full flex justify-between">
                        <div className="">
                            <h3 className="text-xl font-semibold text-zinc-500">Phòng ban trong dự án</h3>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-[300px] border border-solid flex items-center rounded-lg">
                                <IoIosSearch size={25} className="ml-3" />
                                <input
                                    className="focus:outline-none px-3 py-2"
                                    type="text"
                                    placeholder="..."
                                    onChange={handleSearchChangeD}
                                />
                            </div>
                            <div className="border flex items-center justify-center rounded-lg px-2">
                                <select
                                    className="w-full focus:outline-none" name="category"
                                    id="category"
                                    value={searchTypeD}
                                    onChange={(event) => setSearchTypeD(event.target.value)}
                                >
                                    <option value="name">Tên phòng ban</option>

                                    <option value="id">Mã phòng ban</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-lg p-5">
                        <DepartmentTable departments={currentDepartment} project={project} />
                    </div>

                    <div className="w-full mb-20 flex items-center justify-center">
                        <Pagination count={totalPagesD} page={currentPageD} onChange={handleChangePageD} />
                    </div>

                </div>
            )}

            {project.departments.length < 1 && (
                <div className="w-full flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-zinc-600">Chưa có phòng ban nào trong dự án</h3>
                </div>
            )}


           


            {project.employees.length > 0 && (

                <div className="p-5 space-y-4">
                    <div className="w-full flex justify-between">
                        <div className="">
                            <h3 className="text-xl font-semibold text-zinc-500">Nhân viên trong dự án</h3>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-[300px] border border-solid flex items-center rounded-lg">
                                <IoIosSearch size={25} className="ml-3" />
                                <input
                                    className="focus:outline-none px-3 py-2"
                                    type="text"
                                    placeholder="..."
                                    onChange={handleSearchChangeE}
                                />
                            </div>
                            <div className="border flex items-center justify-center rounded-lg px-2">
                                <select
                                    className="w-full focus:outline-none" name="category"
                                    id="category"
                                    value={searchTypeE}
                                    onChange={(event) => setSearchTypeE(event.target.value)}
                                >
                                    <option value="name">Tên nhân viên</option>

                                    <option value="id">Mã nhân viên</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-lg p-5">
                        <ProjectTable employees={currentEmployee}/>
                    </div>

                    <div className="w-full mb-20 flex items-center justify-center">
                        <Pagination count={totalPagesE} page={currentPageE} onChange={handleChangePageE} />
                    </div>

                </div>
            )}


            {project.employees.length < 1 && (
                <div className="w-full flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-zinc-600">Chưa có nhân viên nào trong dự án</h3>
                </div>
            )}


            
           






        </div>
    )
}

export default MainContent