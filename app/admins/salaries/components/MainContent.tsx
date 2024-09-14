"use client"

import { IoIosSearch, IoMdArrowDropright } from "react-icons/io"
import SalaryTable from "./SalaryTable"
import { Pagination } from "@mui/material"
import { useEffect, useState } from "react"



interface MainContentProps {
    salaries: any[]
}

const PAGE_SIZE = 5

const MainContent = ({
    salaries
}: MainContentProps) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])
    const [currentPage, setCurrentPage] = useState(1);
    

    const [searchValue, setSearchValue] = useState<any[]>(salaries);
    const [searchType, setSearchType] = useState<string>("name"); // Mặc định tìm kiếm theo tên

    const totalPages = Math.ceil(searchValue.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentSalaries = searchValue.slice(startIndex, endIndex);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setSearchType("name");
    }, []);

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredData = salaries.filter((item) => {
            const employeeName = `${item?.employee?.firstName} ${item?.employee?.lastName}`;
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


    if(!isMounted){
        return null
    }

    


    return (
        <div className="w-full p-5 space-y-10 mb-20" >
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-zinc-500">Xem lương nhân viên</h3>

                <span className="flex gap-2 items-center text-zinc-500" >
                    <p className="font-semibold text-sm">Lương</p>
                    <IoMdArrowDropright size={20} />
                    <p className="font-semibold text-sm">Xem lương</p>
                </span>
            </div>

            <div className="w-full flex justify-end">
                
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
                            value={searchType}
                            onChange={(event) => setSearchType(event.target.value)}
                        >
                            <option value="name">Tên nhân viên</option> 

                            <option value="id">Mã lương</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className="border shadow-md rounded-md ">
                <SalaryTable salaries={currentSalaries} />
            </div>

            <div className="w-full mb-20 flex items-center justify-center">
                <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
            </div>
        </div>
    )
}

export default MainContent