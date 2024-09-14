import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Employee } from "@prisma/client";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import EmployeeDialog from "./EmployeeDialog";
import { useRouter } from "next/navigation";



interface EmployeesTableProps {
    employees: Employee[]
}


const EmployeesTable = ({
    employees
}: EmployeesTableProps) => {


    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

   


    return (
        <div className="w-full h-full" >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            STT
                        </TableHead>
                        <TableHead>
                            Mã nhân viên
                        </TableHead>
                        <TableHead>
                            Tên nhân viên
                        </TableHead>
                        <TableHead>
                            Hình ảnh
                        </TableHead>
                        <TableHead>
                            Giới tính
                        </TableHead>
                        <TableHead>
                            Ngày sinh
                        </TableHead>
                        
                        <TableHead>
                            Số cmnd
                        </TableHead>
                        <TableHead>
                            Xem
                        </TableHead>
                        <TableHead>
                            Sửa
                        </TableHead>
                        <TableHead>
                            Xóa
                        </TableHead>

                    </TableRow>
                </TableHeader>

                <TableBody>
                    {employees.map((employee, index) => (
                        <TableRow key={employee.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{employee.id}</TableCell>
                            <TableCell>{employee.firstName} {employee.lastName}</TableCell>
                            <TableCell>
                                <img src={employee.imageUrl} alt="imageUrl" className="w-[70px] h-[80px] rounded-md ring-2 object-cover" />
                            </TableCell>
                            <TableCell>{employee.sex}</TableCell>
                            <TableCell>{employee.dateOfBirth.toLocaleDateString()}</TableCell>
                            
                            <TableCell>{employee.identificationCode}</TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'

                                    onClick={()=> router.push(`/admins/employees/${employee.id}`)}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> router.push(`/admins/employees/${employee.id}/edit`)}
                                    
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> setIsOpen(true)}
                                    variant='ghost'
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25}  />
                                </Button>

                                <EmployeeDialog isOpen={isOpen} setIsOpen={setIsOpen} data={employee} />
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>



            </Table>


        </div>
    )
}

export default EmployeesTable




