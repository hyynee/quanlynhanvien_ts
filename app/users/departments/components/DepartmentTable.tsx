"use client"





import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { useState } from "react";


import { useRouter } from "next/navigation";





interface DepartmentTableProps {
    employees: any[]
}

const DepartmentTable = ({
    employees
}: DepartmentTableProps) => {


    

    const [employee, setEmployee] = useState<any>(undefined)

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div style={{maxHeight: "500px" , overflowY: "auto"}}>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
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
                    {employees.map((employee, index)=> (
                        <TableRow key={employee.id}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell >{employee?.id}</TableCell>
                            <TableCell >{employee?.firstName} {employee?.lastName}</TableCell>
                            <TableCell >
                                <img 
                                    className="w-[70px] h-[80px] rounded-md ring-2 object-cover"
                                    src={employee?.imageUrl} 
                                    alt="Image"  
                                />
                            </TableCell>
                            <TableCell >{employee?.position?.positionName}</TableCell>
                           
                           
                            <TableCell >{employee?.dateOfBirth.toLocaleDateString()}</TableCell>
                            <TableCell >{employee?.sex}</TableCell>
                            <TableCell >{employee?.status === 'ACTIVE'? 'Đang làm việc' : 'Đã nghỉ việc'}</TableCell>
                            <TableCell >{employee?.typeOfEmployee?.name}</TableCell>
                            

                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>


            

            

        </div>
    )
}

export default DepartmentTable