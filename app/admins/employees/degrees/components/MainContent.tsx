"use client"



import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline, IoIosSearch } from "react-icons/io";

import { Pagination } from "@mui/material";
import { Department } from '@prisma/client';
import DepartmentDialog from './DegreeDialog';
import DegreeTable from './DegreeTable';


const PAGE_SIZE = 5;

interface MainContentProps {
    degrees: any[]
}

const MainContent = ({
    degrees
}: MainContentProps) => {

    const [isMounted, setIsMounted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false)

    const totalPages = Math.ceil(degrees.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const currentDegree = degrees.slice(startIndex, endIndex);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const toggleButton = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        setIsMounted(true);
    })

    if (!isMounted) {
        return null;
    }

    return (

        <div>


            <div className="w-full h-full p-5 space-y-10 overflow-auto">
                <div className="w-full flex justify-between">
                    <h3 className="text-2xl font-bold">Bằng cấp</h3>
                    <Button
                        onClick={toggleButton}
                        className="transition-all flex items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                    >
                        <IoIosAddCircleOutline size={25} />
                        <p className="text-white font-semibold">Thêm bằng cấp mới</p>
                    </Button>
                </div>

                {degrees.length > 0 && (
                    <div className='space-y-10'>
                        <div className="border p-5 rounded-lg shadow-md">
                            <div className="w-full flex justify-between">
                                <div className="">
                                    <h3 className="text-md font-semibold">
                                        Danh sách bằng cấp
                                    </h3>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-[300px] border border-solid flex items-center rounded-lg">
                                        <IoIosSearch size={25} className="ml-3" />
                                        <input className="focus:outline-none px-3 py-2" type="text" placeholder="..." />
                                    </div>
                                    <div className="border flex items-center justify-center rounded-lg px-2">
                                        <select className="w-full focus:outline-none" name="category" id="caregory">
                                            <option value=""></option>
                                            <option value="email">Tên bằng cấp</option>
                                            <option value="id">Mã bằng cấp</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <DegreeTable degrees={currentDegree} />
                            </div>

                        </div>
                        <div className="w-full mb-20 flex items-center justify-center">
                            <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
                        </div>


                    </div>

                )}

                {degrees.length < 1 && (
                    <div className='w-full flex items-center justify-center'>
                        <h3 className='font-bold text-2xl'>Chưa có bằng cấp nào</h3>
                    </div>
                )}

                <div>
                    <DepartmentDialog isOpen={isOpen} setIsOpen={setIsOpen} variant='create' />
                </div>


            </div>


        </div>
    );
};

export default MainContent;
