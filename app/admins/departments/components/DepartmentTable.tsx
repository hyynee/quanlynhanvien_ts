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
import DepartmentDialog from "./DepartmentDialog";
import { useRouter } from "next/navigation";


interface DepartmentTableProps {
    departments: Department[]
}



const DepartmentTable = ({
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
                        <TableHead>Sdt</TableHead>
                        <TableHead>Xem</TableHead>
                        <TableHead>Sửa</TableHead>
                        <TableHead>Xóa</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {departments.map((department, index) => (
                        <TableRow key={department.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{department.id}</TableCell>
                            <TableCell>{department.departmentName}</TableCell>
                            <TableCell>{department.phone}</TableCell>
                        

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> router.push(`/admins/departments/${department.id}`)}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsEditOpen(true), setCurrentData(department)}}
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> {setIsDeleteOpen(true), setCurrentData(department)}}
                                    variant='ghost'
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

            <DepartmentDialog isOpen={isViewOpen} setIsOpen={setIsViewOpen} variant="view" data={currentData} />
            <DepartmentDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} variant="edit" data={currentData} />
            <DepartmentDialog isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} variant="delete" data={currentData} />

        </div>
    )
}

export default DepartmentTable