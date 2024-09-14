import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Department } from "@prisma/client";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import DepartmentDialog from "./ProjectDialog";
import { useRouter } from "next/navigation";


interface DepartmentTableProps {
    projects: any[],
    departments: any[]
}



const DepartmentTable = ({
    projects,
    departments
}: DepartmentTableProps) => {

    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [currentData, setCurrentData] = useState<Department>()
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
                        <TableHead>Sửa</TableHead>
                        <TableHead>Xóa</TableHead>
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
                                    onClick={()=> router.push(`/admins/projects/${project.id}`)}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsEditOpen(true), setCurrentData(project)}}
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> {setIsDeleteOpen(true), setCurrentData(project)}}
                                    variant='ghost'
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

            
            <DepartmentDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} variant="edit" data={currentData} departments={departments} />
            <DepartmentDialog isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} variant="delete" data={currentData} departments={departments} />

        </div>
    )
}

export default DepartmentTable