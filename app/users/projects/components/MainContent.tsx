"use client"



import React, { useEffect, useState } from 'react';

import { IoIosAddCircleOutline, IoIosSearch, IoMdArrowDropright } from "react-icons/io";

import { Pagination } from "@mui/material";

import DepartmentTable from './ProjectTable';



const PAGE_SIZE = 5;

interface MainContentProps {
    projects: any[],
   
}

const MainContent = ({
    projects,
}: MainContentProps) => {


    const [isMounted, setIsMounted] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false)

    const [searchValue, setSearchValue] = useState<any[]>(projects);
    const [searchType, setSearchType] = useState<string>("name"); 

    const totalPages = Math.ceil(projects.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const currentProjects = searchValue.slice(startIndex, endIndex);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setSearchType("name");
    }, []);

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredData = projects.filter((item) => {
            const employeeName = item.name
            if (searchType === 'name') {

                return employeeName.toLowerCase().includes(value);
            }
            if (searchType === 'id') {
                return item.id.toString().includes(value);
            }
            return true;
        });
        setSearchValue(filteredData);
    };

   


    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }
    return (
        <div className="w-full h-full p-5 space-y-10 overflow-auto">



            <div className="w-full flex justify-between">
                <h3 className="text-2xl font-bold">Dự án tham gia</h3>
               
            </div>


            {projects.length < 1 && (
                <div className='w-full flex items-center justify-center'>
                    <h3 className='text-xl font-medium text-zinc-600'>Nhân viên chưa tham gia dự án nào</h3>
                </div>
            )}

            {projects.length > 0 && (
                <div className='space-y-10'>
                    <div className="border p-5 rounded-lg shadow-md">
                        <div className="w-full flex justify-between">
                            <div className="">
                                <h3 className="text-md font-semibold">
                                    Danh sách dự án
                                </h3>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-[300px] border border-solid flex items-center rounded-lg">
                                    <IoIosSearch size={25} className="ml-3" />
                                    <input
                                        onChange={handleSearchChange} 
                                        className="focus:outline-none px-3 py-2" type="text" placeholder="..." />
                                </div>
                                <div className="border flex items-center justify-center rounded-lg px-2">
                                    <select
                                        className="w-full focus:outline-none" name="category"
                                        id="category"
                                        value={searchType} // Set giá trị mặc định cho select
                                        onChange={(event) => setSearchType(event.target.value)}
                                    >
                                        <option value="name">Tên</option> {/* Mặc định tìm kiếm theo tên */}
                                        <option value="id">Mã </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <DepartmentTable projects={currentProjects} />
                        </div>

                    </div>
                    <div className="w-full mb-20 flex items-center justify-center">
                        <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
                    </div>


                </div>
            )}





            




        </div>
    );
};

export default MainContent;
