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
    
}



const DiciplineTable = ({
    disciplines,
   
}: DiciplineTableProps) => {

    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    function formattedSalary(salary: any){
        return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salary);

    }

    const [currentData, setCurrentData] = useState<Department>()


    return (
        <div style={{ maxHeight: "400px", overflowY: "auto" }} >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                       
                        <TableHead>Loại kỉ luật</TableHead>
                        <TableHead>Tiền phạt</TableHead>
                        
                        <TableHead>Xem</TableHead>
                        
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {disciplines.map((discipline, index) => (
                        <TableRow key={discipline.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{discipline.id}</TableCell>
                            <TableCell>{discipline.kindOfDiscipline[0].name}</TableCell>
                            <TableCell>{formattedSalary(discipline.fine)}</TableCell>
                            
                        

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsViewOpen(true), setCurrentData(discipline)}}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

            <DiciplineDialog isOpen={isViewOpen} setIsOpen={setIsViewOpen} data={currentData} />
           

        </div>
    )
}

export default DiciplineTable