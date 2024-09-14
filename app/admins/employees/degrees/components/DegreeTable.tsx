import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Department, Position } from "@prisma/client";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";

import DegreeDialog from "./DegreeDialog";


interface DegreeTableProps {
    degrees: any[]
}



const DegreeTable = ({
    degrees
}: DegreeTableProps) => {

    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [currentData, setCurrentData] = useState<any>()


    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                        <TableHead>Tên </TableHead>
                        <TableHead>Ngày tạo</TableHead>
                        <TableHead>Ngày Sửa</TableHead>
                        <TableHead>Xem</TableHead>
                        <TableHead>Sửa</TableHead>
                        <TableHead>Xóa</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {degrees.map((degree, index) => (
                        <TableRow key={degree.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{degree.id}</TableCell>
                            <TableCell>{degree.degreeName}</TableCell>
                            <TableCell>{degree.createAt.toLocaleDateString()}</TableCell>
                            <TableCell>{degree.updateAt.toLocaleDateString()}</TableCell>
                           

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsViewOpen(true), setCurrentData(degree)}}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsEditOpen(true), setCurrentData(degree)}}
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> {setIsDeleteOpen(true), setCurrentData(degree)}}
                                    variant='ghost'
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

            <DegreeDialog isOpen={isViewOpen} setIsOpen={setIsViewOpen} variant="view" data={currentData} />
            <DegreeDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} variant="edit" data={currentData} />
            <DegreeDialog isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} variant="delete" data={currentData} />

        </div>
    )
}

export default DegreeTable