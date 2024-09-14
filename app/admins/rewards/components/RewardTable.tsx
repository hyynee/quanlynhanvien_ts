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
import RewardDialog from "./RewardDialog";



interface RewardTableProps {
    bonuses: any[],
    bonusType: any[],
    departments: any[]
}



const RewardTable = ({
    bonuses,
    bonusType,
    departments
}: RewardTableProps) => {

    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [currentData, setCurrentData] = useState<Department>()


    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                        <TableHead>Tên nhân viên </TableHead>
                        <TableHead>Ảnh nhân viên </TableHead>
                        <TableHead>loại khen thưởng</TableHead>
                        <TableHead>Xem</TableHead>
                        <TableHead>Sửa</TableHead>
                        <TableHead>Xóa</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bonuses.map((bonus, index) => (
                        <TableRow key={bonus.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{bonus.id}</TableCell>
                            <TableCell>{bonus.employees[0].firstName} {bonus.employees[0].lastName}</TableCell>
                            <TableCell>
                                {bonus?.employees[0]?.imageUrl? (
                                    <img src={bonus.employees[0].imageUrl} alt="" className="w-[70px] h-[80px] rounded-md ring-2 object-cover" />
                                ): ''}
                                
                            </TableCell>
                            <TableCell>{bonus.kindOfBonus[0].name}</TableCell>
                        

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsViewOpen(true), setCurrentData(bonus)}}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsEditOpen(true), setCurrentData(bonus)}}
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> {setIsDeleteOpen(true), setCurrentData(bonus)}}
                                    variant='ghost'
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

            <RewardDialog isOpen={isViewOpen} setIsOpen={setIsViewOpen} variant="view" data={currentData} departments={departments} bonusType={bonusType}/>
            <RewardDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} variant="edit" data={currentData} departments={departments} bonusType={bonusType} />
            <RewardDialog isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} variant="delete" data={currentData} departments={departments} bonusType={bonusType} />

        </div>
    )
}

export default RewardTable