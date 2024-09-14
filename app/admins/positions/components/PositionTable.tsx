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
import DepartmentDialog from "./PositionDialog";


interface PositionTableProps {
    positions: Position[]
}



const PositionTable = ({
    positions
}: PositionTableProps) => {

    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [currentData, setCurrentData] = useState<Position>()


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
                    {positions.map((position, index) => (
                        <TableRow key={position.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{position.id}</TableCell>
                            <TableCell>{position.positionName}</TableCell>
                            <TableCell>{position.createAt.toLocaleDateString()}</TableCell>
                            <TableCell>{position.updateAt.toLocaleDateString()}</TableCell>
                           

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsViewOpen(true), setCurrentData(position)}}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsEditOpen(true), setCurrentData(position)}}
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> {setIsDeleteOpen(true), setCurrentData(position)}}
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

export default PositionTable