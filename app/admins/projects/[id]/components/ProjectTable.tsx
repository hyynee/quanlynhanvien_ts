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

import { useRouter } from "next/navigation";
import DeleteDialog from "./DeleteDialog";




interface ProjectTableProps {
    projectId: any;
    employees: any[]
}

const ProjectTable = ({
    employees,
    projectId
}: ProjectTableProps) => {


    

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
                        
                        <TableHead>Chi tiết</TableHead>
                        <TableHead>Xóa</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {employees.map((employee, index)=> (
                        <TableRow key={employee.id}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell >{employee.id}</TableCell>
                            <TableCell >{employee.firstName} {employee.lastName}</TableCell>
                            <TableCell >
                                <img 
                                    className="w-[70px] h-[80px] rounded-md ring-2 object-cover"
                                    src={employee.imageUrl} 
                                    alt="Image"  
                                />
                            </TableCell>
                            <TableCell >{employee.position.positionName}</TableCell>
                           
                           
                            <TableCell >{employee.dateOfBirth.toLocaleDateString()}</TableCell>
                            <TableCell >{employee.sex}</TableCell>
                            <TableCell >{employee.status === 'ACTIVE'? 'Đang làm việc': "Đã nghỉ việc"}</TableCell>
                            <TableCell >{employee.typeOfEmployee.name}</TableCell>
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
                                    onClick={()=>{
                                        setIsOpen(true)
                                        setEmployee(employee)
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
                <DeleteDialog isOpen={isOpen} setIsOpen={setIsOpen} employee={employee} projectId={projectId} />
            </div>

            

        </div>
    )
}

export default ProjectTable