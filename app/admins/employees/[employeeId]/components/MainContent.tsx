"use client"

import { IoIosSearch, IoMdArrowDropright } from "react-icons/io"
import SalaryTable from "./Salarytable"
import { useEffect, useState } from "react"
import { Pagination } from "@mui/material"


interface MainContentProps {
    salaries: any[],
    employee: any
}

const PAGE_SIZE = 5
const MainContent = ({
    salaries,
    employee
}: MainContentProps) => {


    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    const [currentPage, setCurrentPage] = useState(1);


    const [searchValue, setSearchValue] = useState<any[]>(salaries);
    const [searchType, setSearchType] = useState<string>("date"); // Mặc định tìm kiếm theo tên

    const totalPages = Math.ceil(searchValue.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentSalaries = searchValue.slice(startIndex, endIndex);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setSearchType("date");
    }, []);

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value.trim().toLowerCase();
        const filteredData = salaries.filter((item) => {
            const employeeDate = `${item?.createAt.toLocaleDateString()} `;
            if (searchType === 'date') {

                return employeeDate.toLowerCase().includes(value);
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
        <div className="w-full h-full">

            <div className="p-5 w-full ">
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-zinc-500">Chi tiết nhân viên</h3>

                    <span className="flex gap-2 items-center text-zinc-500" >
                        <p className="font-semibold text-sm">Nhân viên</p>
                        <IoMdArrowDropright size={20} />
                        <p className="font-semibold text-sm">Xem nhân viên</p>
                        <IoMdArrowDropright size={20} />
                        <p className="font-semibold text-sm">Xem chi tiết nhân viên</p>
                    </span>
                </div>

                <div className="w-full border rounded-xl shadow-md mt-5">
                    <div className="p-5 border-b flex items-center gap-3">
                        <h3 className="font-bold text-xl">Mã nhân viên:</h3>
                        <p className="text-md text-zinc-400">{employee?.id}</p>
                    </div>

                    <div className="w-full p-5 flex items-center gap-6">
                        <img src={employee?.imageUrl} alt="Image" className="w-[300px] h-[400px] rounded-xl ring-2" />
                        <div className="w-full grid grid-cols-2 gap-6">


                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Tên nhân viên: </h3>
                                    <p className="text-md font-semibold"> {employee?.firstName} {employee?.lastName}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Giới tính: </h3>
                                    <p className="text-md font-semibold"> {employee?.sex}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Ngày sinh: </h3>
                                    <p className="text-md font-semibold"> {employee?.dateOfBirth.toLocaleDateString()} </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Nơi sinh: </h3>
                                    <p className="text-md font-semibold"> {employee?.birthPlace}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Số chứng minh nhân dân: </h3>
                                    <p className="text-md font-semibold"> {employee?.identificationCode}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Ngày cấp: </h3>
                                    <p className="text-md font-semibold"> {employee?.dateRange.toLocaleDateString()}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Quốc tịch: </h3>
                                    <p className="text-md font-semibold"> {employee?.nationality}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Dân tộc: </h3>
                                    <p className="text-md font-semibold"> {employee?.nations[0]?.name}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Tôn giáo: </h3>
                                    <p className="text-md font-semibold"> {employee?.religion}</p>
                                </div>

                            </div>


                            <div className="flex flex-col gap-4">



                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Bằng cấp:  </h3>
                                    <p className="text-md font-semibold"> {employee?.degrees[0]?.degreeName}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Số điện thoại:  </h3>
                                    <p className="text-md font-semibold"> {employee?.phone}</p>
                                </div>



                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Địa chỉ:  </h3>
                                    <p className="text-md font-semibold"> {employee?.address}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Chuyên ngành:  </h3>
                                    <p className="text-md font-semibold"> {employee?.specialize}</p>
                                </div>

                                {employee?.experience && (
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-md">Kinh nghiệm:  </h3>
                                        <p className="text-md font-semibold"> {employee?.experience}</p>
                                    </div>
                                )}


                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Phòng ban:  </h3>
                                    <p className="text-md font-semibold"> {employee?.department?.departmentName}</p>
                                </div>


                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Chức vụ:  </h3>
                                    <p className="text-md font-semibold"> {employee?.position?.positionName}</p>
                                </div>



                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Loại nhân viên:  </h3>
                                    <p className="text-md font-semibold"> {employee?.typeOfEmployee.name}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-md">Trạng thái:  </h3>
                                    {employee.status === 'ACTIVE' && (
                                        <p className="text-md font-semibold"> Đang làm việc</p>
  
                                    )}
                                    {employee.status === 'INACTIVE' && (
                                        <p className="text-md font-semibold"> Đã nghỉ việc</p>
                                    )}
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <div className="p-5 mb-20 ">

                {salaries.length > 0 && (
                    <div className="space-y-10">


                        <div className="w-full flex justify-between">
                            <div className="flex items-center">
                                <h3 className="font-md text-zinc-500 font-medium">Bảng lương</h3>
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
                                        <option value="date">Ngày chấm</option> {/* Mặc định tìm kiếm theo tên */}

                                        <option value="id">Mã lương</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-md shadow-lg p-5">
                            <SalaryTable salaries={currentSalaries} />

                        </div>
                        <div className="w-full mb-20 flex items-center justify-center">
                            <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
                        </div>
                    </div>

                )}

                {salaries.length < 1 && (
                    <div className="rounded-md p-5 shadow-sm border">
                        <h3 className="font-medium text-xl text-zinc-500">Chưa có bảng lương</h3>
                    </div>
                )}




            </div>
        </div>
    )
}

export default MainContent