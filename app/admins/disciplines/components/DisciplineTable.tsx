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
import DiciplineDialog from "./DisciplineDialog";




interface DiciplineTableProps {
    disciplines: any[],
    disciplineTypes: any[],
    departments: any[]
}



const DiciplineTable = ({
    disciplines,
    disciplineTypes,
    departments
}: DiciplineTableProps) => {

    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [currentData, setCurrentData] = useState<Department>()


    return (
        <div style={{ maxHeight: "400px", overflowY: "auto" }} >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                        <TableHead>Tên nhân viên</TableHead>
                        <TableHead>Ảnh nhân viên </TableHead>
                        <TableHead>Loại kỉ luật</TableHead>
                        <TableHead>Xem</TableHead>
                        <TableHead>Sửa</TableHead>
                        <TableHead>Xóa</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {disciplines.map((discipline, index) => (
                        <TableRow key={discipline.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{discipline.id}</TableCell>
                            <TableCell>{discipline?.employees[0]?.firstName} {discipline?.employees[0]?.lastName}</TableCell>
                            <TableCell>
                                {discipline?.employees[0]?.imageUrl? (
                                    <img src={discipline?.employees[0]?.imageUrl} alt="" className="w-[70px] h-[80px] rounded-md ring-2 object-cover" />
                                ): ''}
                                
                            </TableCell>
                            <TableCell>{discipline?.kindOfDiscipline[0]?.name}</TableCell>
                        

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsViewOpen(true), setCurrentData(discipline)}}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsEditOpen(true), setCurrentData(discipline)}}
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> {setIsDeleteOpen(true), setCurrentData(discipline)}}
                                    variant='ghost'
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

            <DiciplineDialog isOpen={isViewOpen} setIsOpen={setIsViewOpen} variant="view" data={currentData} departments={departments} disciplineTypes={disciplineTypes}/>
            <DiciplineDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} variant="edit" data={currentData} departments={departments} disciplineTypes={disciplineTypes} />
            <DiciplineDialog isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} variant="delete" data={currentData} departments={departments} disciplineTypes={disciplineTypes} />

        </div>
    )
}

export default DiciplineTable