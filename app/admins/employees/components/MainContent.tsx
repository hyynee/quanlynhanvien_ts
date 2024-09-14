"use client"

import { Employee } from "@prisma/client";
import EmployeesTable from "./EmployeesTable";
import { IoIosSearch } from "react-icons/io";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";

const PAGE_SIZE = 5;

interface MainContentProps {
    employees: Employee[];
}

const MainContent = ({
    employees
}: MainContentProps) => {


    const [isMounted , setIsMounted] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState<any[]>(employees);
    const [searchType, setSearchType] = useState<string>("name"); // Default search by name

    useEffect(() => {
        setSearchType("name");
    }, []); // Run once after the initial render

    useEffect(() => {
        setSearchValue(employees);
    }, [employees]); // Update searchValue whenever employees change

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredData = employees.filter((item) => {
            const employeeName = `${item?.firstName} ${item?.lastName}`;
            if (searchType === 'name') {
                return employeeName.trim().toLowerCase().includes(value);
            }
            if (searchType === 'id') {
                return item.id.toString().includes(value);
            }
            return true;
        });
        setSearchValue(filteredData);
    };

    const totalPages = Math.ceil(searchValue.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentEmployee = searchValue.slice(startIndex, endIndex);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    useEffect(()=>{
        setIsMounted(true)
    })


    if(!isMounted){
        return null;
    }
    return (
        <div className="w-full h-full p-5 space-y-10 overflow-auto">
            <div className="w-full flex justify-between">
                <h3 className="text-2xl font-bold">Nhân viên</h3>
            </div>
            <div className="border p-5 rounded-lg shadow-md">
                <div className="w-full flex justify-between">
                    <div className="">
                        <h3 className="text-md font-semibold">
                            Danh sách nhân viên
                        </h3>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-[300px] border border-solid flex items-center rounded-lg">
                            <IoIosSearch size={25} className="ml-3" />
                            <input onChange={handleSearchChange} className="focus:outline-none px-3 py-2" type="text" placeholder="..." />
                        </div>
                        <div className="border flex items-center justify-center rounded-lg px-2">
                            <select
                                className="w-full focus:outline-none" name="category"
                                id="category"
                                value={searchType} // Set default value for select
                                onChange={(event) => setSearchType(event.target.value)}
                            >
                                <option value="name">Tên</option> {/* Default search by name */}
                                <option value="id">Mã </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <EmployeesTable employees={currentEmployee} />
                </div>
            </div>
            <div className="w-full flex items-center justify-center ">
                <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
            </div>
        </div>
    );
}

export default MainContent;
