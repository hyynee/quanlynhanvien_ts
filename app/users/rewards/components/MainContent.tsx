"use client"



import React, { useEffect, useState } from 'react';

import { IoIosSearch } from "react-icons/io";

import RewardTable from './RewardTable';
import { Pagination } from '@mui/material';


const PAGE_SIZE = 5;




interface MainContentProps {
    bonuses: any[],

}
const MainContent = ({
    bonuses,

}: MainContentProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [searchValue, setSearchValue] = useState<any[]>(bonuses);
    const [searchType, setSearchType] = useState<string>("name");

    const totalPages = Math.ceil(searchValue.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentBonus = searchValue.slice(startIndex, endIndex);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setSearchType("name");
    }, []);

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredData = bonuses.filter((item) => {
            const employeeName = `${item?.employees[0]?.firstName} ${item?.employees[0]?.lastName}`;
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







    return (
        <div className="w-full space-y-10 overflow-auto">

            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-zinc-500">Khen thưởng của nhân viên</h3>

                <span className="flex gap-2 items-center text-zinc-500" >
                    <p className="font-semibold text-sm">Khen thưởng</p>
                   

                </span>
            </div>

            {bonuses.length > 0 && (
                <div className='space-y-10'>
                    <div className="border p-5 rounded-lg shadow-md">
                        <div className="w-full flex justify-between">
                            <div className="">
                                <h3 className="text-md font-semibold">
                                    Danh sách khen thưởng
                                </h3>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-[300px] border border-solid flex items-center rounded-lg">
                                    <IoIosSearch size={25} className="ml-3" />
                                    <input
                                        className="focus:outline-none px-3 py-2"
                                        type="text"
                                        placeholder="..."
                                        onChange={handleSearchChange}
                                    />
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
                            <RewardTable bonuses={currentBonus} />
                        </div>



                    </div>
                    <div className="w-full mb-20 flex items-center justify-center">
                        <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
                    </div>

                </div>
            )}


            {bonuses.length < 1 && (
                <div className='w-full flex items-center justify-center'>
                    <h3 className='font-bold text-2xl'>Chưa có khen thưởng nào nào</h3>
                </div>
            )}




        </div>
    );
};

export default MainContent;
