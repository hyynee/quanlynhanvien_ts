"use client"





import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import SalaryDialog from "./SalaryDialog";
import { useRouter } from "next/navigation";




interface SalaryTableProps {
    salaries: any[]
}

const SalaryTable = ({
    salaries
}: SalaryTableProps) => {


    

    const [salaryId, setSalaryId] = useState('')

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    function formattedSalary(salary: any){
        return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salary);

    }


    return (
        <div style={{maxHeight: "500px" , overflowY: "auto"}}>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã Lương</TableHead>
                        <TableHead>Tên nhân viên</TableHead>
                        <TableHead>Ảnh nhân viên</TableHead>
                        <TableHead>Chức vụ</TableHead>
                        <TableHead>Lương tháng</TableHead>
                        <TableHead>Ngày công</TableHead>
                        <TableHead>Thực lãnh</TableHead>
                        <TableHead>Ngày chấm</TableHead>
                        <TableHead>Chi tiết</TableHead>
                        <TableHead>Xóa</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {salaries.map((salary, index)=> (
                        <TableRow key={salary.id}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell >{salary.id}</TableCell>
                            <TableCell >{salary.employee.firstName} {salary.employee.lastName}</TableCell>
                            <TableCell >
                                <img 
                                    className="w-[70px] h-[80px] rounded-md ring-2 object-cover"
                                    src={salary.employee.imageUrl} 
                                    alt="Image"  
                                />
                            </TableCell>
                            <TableCell >{salary.employee.position.positionName}</TableCell>
                            <TableCell >{formattedSalary(salary.basicSalary)} </TableCell>
                            <TableCell >{salary.workday}</TableCell>
                            <TableCell >{formattedSalary(salary.salary)}</TableCell>
                            <TableCell >{salary.createAt.toLocaleDateString()}</TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> router.push(`/admins/employees/${salary.employee.id}`)}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>

                            <TableCell>
                                <Button
                                    onClick={()=>{
                                        setIsOpen(true)
                                        setSalaryId(salary.id)
                                    }}
                                    variant='ghost'
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25} />
                                </Button>
                            </TableCell>

                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>

            <div>
                <SalaryDialog isOpen={isOpen} setIsOpen={setIsOpen} salaryId={salaryId}/>
            </div>

        </div>
    )
}

export default SalaryTable