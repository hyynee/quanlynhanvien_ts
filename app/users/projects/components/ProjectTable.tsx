import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { IoMdEye } from "react-icons/io";
import { useState } from "react";

import { useRouter } from "next/navigation";


interface DepartmentTableProps {
    projects: any[],
  
}



const DepartmentTable = ({
    projects,

}: DepartmentTableProps) => {

  
    
    
    const router = useRouter()


    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                        <TableHead>Tên </TableHead>
                        <TableHead>Ngày bắt đầu </TableHead>
                        <TableHead>Ngày kết thúc </TableHead>
                        <TableHead>Ngày tạo </TableHead>
                        <TableHead>Ngày sửa </TableHead>
                        
                        <TableHead>Xem</TableHead>
                        
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project, index) => (
                        <TableRow key={project.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{project.id}</TableCell>
                            <TableCell>{project.name}</TableCell>
                            <TableCell>{project.startDate.toLocaleDateString()}</TableCell>
                            <TableCell>{project.endDate.toLocaleDateString()}</TableCell>
                            <TableCell>{project.createAt.toLocaleDateString()}</TableCell>
                            <TableCell>{project.updateAt.toLocaleDateString()}</TableCell>
                           
                        

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> router.push(`/users/projects/${project.id}`)}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                           
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

  

        </div>
    )
}

export default DepartmentTable