"use client"


import { useEffect, useState } from "react"
import { IoIosAddCircleOutline, IoIosSearch, IoMdArrowDropright } from "react-icons/io"
import DepartmentTable from "./DepartmentTable"
import { Pagination } from "@mui/material"
import { Button } from "@/components/ui/button"
import ManagerDialog from "./ManagerDialog"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface MainContentProps {
    employees: any[],
    department: any;



}


const PAGE_SIZE = 5

const MainContent = ({
    employees,
    department
}: MainContentProps) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    const [currentPage, setCurrentPage] = useState(1);

    const [isOpen, setIsOpen] = useState(false)


    const [searchValue, setSearchValue] = useState<any[]>(employees);
    const [searchType, setSearchType] = useState<string>("name"); // Mặc định tìm kiếm theo tên

    const totalPages = Math.ceil(searchValue.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentEmployee = searchValue.slice(startIndex, endIndex);


    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };


    useEffect(() => {
        setSearchType("name");


    }, []);




    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredData = employees.filter((item) => {
            const employeeName = `${item?.firstName} ${item?.lastName}`;
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


    if (!isMounted) {
        return null
    }







    return (
        <div className="w-full p-5 space-y-10">
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-zinc-500">Chi tiết phòng ban</h3>

                <span className="flex gap-2 items-center text-zinc-500" >
                    <p className="font-semibold text-sm">Phòng ban</p>
                    <IoMdArrowDropright size={20} />
                    <p className="font-semibold text-sm">Chi tiết phòng ban</p>
                </span>
            </div>


            <div className=" rounded-lg shadow-sm border p-5 flex flex-col items-center justify-center gap-4">
                <h3 className="text-xl text-center font-semibold text-[#2c76f9]">{department.departmentName}</h3>
                <p className="text-zinc-600">{department.description}</p>
            </div>


            <div className="p-5 space-y-4">
                <div className="">
                    <h3 className="text-xl font-semibold text-zinc-500">Trưởng phòng</h3>
                </div>

                {department.departmentManager && (
                    <div className="border rounded-lg p-5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    
                                    <TableHead>Mã Nhân viên</TableHead>
                                    <TableHead>Tên nhân viên</TableHead>
                                    <TableHead>Ảnh nhân viên</TableHead>
                                    <TableHead>Chức vụ</TableHead>
                                    <TableHead>Ngày sinh</TableHead>
                                    <TableHead>Giới tính</TableHead>
                                    <TableHead>Trạng thái</TableHead>
                                    <TableHead>Loại nhân viên</TableHead>


                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                
                                    <TableRow key={department.departmentManager.employee.id}>
                                        
                                        <TableCell >{department.departmentManager.employee?.id}</TableCell>
                                        <TableCell >{department.departmentManager.employee?.firstName} {department.departmentManager.employee?.lastName}</TableCell>
                                        <TableCell >
                                            <img
                                                className="w-[70px] h-[80px] rounded-md ring-2 object-cover"
                                                src={department.departmentManager.employee?.imageUrl}
                                                alt="Image"
                                            />
                                        </TableCell>
                                        <TableCell >{department.departmentManager.employee?.position?.positionName}</TableCell>


                                        <TableCell >{department.departmentManager.employee?.dateOfBirth.toLocaleDateString()}</TableCell>
                                        <TableCell >{department.departmentManager.employee?.sex}</TableCell>
                                        <TableCell >{department.departmentManager.employee?.status}</TableCell>
                                        <TableCell >{department.departmentManager.employee?.typeOfEmployee?.name}</TableCell>


                                    </TableRow>
                            

                            </TableBody>
                        </Table>
                    </div>
                )}



                {!department.departmentManager && (
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="transition-all flex items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                    >
                        <IoIosAddCircleOutline size={25} />
                        <p className="text-white font-semibold">Thêm trưởng phòng</p>
                    </Button>
                )}
            </div>


            {employees.length > 0 && (

                <div className="p-5 space-y-4">
                    <div className="w-full flex justify-between">
                        <div className="">
                            <h3 className="text-xl font-semibold text-zinc-500">Nhân viên phòng ban</h3>
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
                                    value={searchType}
                                    onChange={(event) => setSearchType(event.target.value)}
                                >
                                    <option value="name">Tên nhân viên</option>

                                    <option value="id">Mã nhân viên</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-lg p-5">
                        <DepartmentTable employees={currentEmployee} />
                    </div>

                    <div className="w-full mb-20 flex items-center justify-center">
                        <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
                    </div>

                </div>
            )}


            {employees.length < 1 && (
                <div className="w-full flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-zinc-600">Chưa có nhân viên nào trong phòng ban</h3>
                </div>
            )}



            <div>
                <ManagerDialog isOpen={isOpen} setIsOpen={setIsOpen} data={department} />
            </div>


        </div>
    )
}

export default MainContent