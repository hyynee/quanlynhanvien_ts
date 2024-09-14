"use client"

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Department, KindOfBonus } from "@prisma/client";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import KindOfRewarDialog from "./KindOfRewarDialog";



interface RewardTypeTableProps {
    rewardTypes: KindOfBonus[]
}



const RewardTypeTable = ({
    rewardTypes
}: RewardTypeTableProps) => {

    
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [currentData, setCurrentData] = useState<KindOfBonus>()


    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                        <TableHead>Tên </TableHead>
                       
                        <TableHead>Ngày tạo</TableHead>
                        <TableHead>Ngày sửa</TableHead>
                        <TableHead>Sửa</TableHead>
                        <TableHead>Xóa</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rewardTypes.map((rewardType, index) => (
                        <TableRow key={rewardType.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{rewardType.id}</TableCell>
                            <TableCell>{rewardType.name}</TableCell>
                            <TableCell>{rewardType.createAt.toLocaleDateString()}</TableCell>
                            <TableCell>{rewardType.updateAt.toLocaleDateString()}</TableCell>
                            
                        

                            
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {
                                        setIsEditOpen(true)
                                        setCurrentData(rewardType)
                                    }}
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={()=> {
                                        setIsDeleteOpen(true)
                                        setCurrentData(rewardType)
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

            {/* <DepartmentDialog isOpen={isViewOpen} setIsOpen={setIsViewOpen} variant="view" data={currentData} />
            <DepartmentDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} variant="edit" data={currentData} />
            <DepartmentDialog isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} variant="delete" data={currentData} /> */}

            <KindOfRewarDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} variant="edit" data={currentData}/>
            <KindOfRewarDialog isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} variant="delete" data={currentData}/>

        </div>
    )
}

export default RewardTypeTable