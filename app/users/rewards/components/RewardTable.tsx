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
   
}



const RewardTable = ({
    bonuses,
   
}: RewardTableProps) => {

    const [isViewOpen, setIsViewOpen] = useState(false);
    

    const [currentData, setCurrentData] = useState<Department>()


    function formattedSalary(salary: any){
        return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salary);

    }
    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                        
                        <TableHead>loại khen thưởng</TableHead>
                        <TableHead>Tiền thưởng</TableHead>
                        <TableHead>Xem</TableHead>
                        
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bonuses.map((bonus, index) => (
                        <TableRow key={bonus.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{bonus.id}</TableCell>
                            <TableCell>{bonus.kindOfBonus[0].name}</TableCell>
                            <TableCell>
                               {formattedSalary(bonus.prizeMoney)}
                                
                            </TableCell>
                           
                        

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={()=> {setIsViewOpen(true), setCurrentData(bonus)}}
                                >
                                    <IoMdEye size={25} />
                                </Button>
                            </TableCell>
                            
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

            <RewardDialog isOpen={isViewOpen} setIsOpen={setIsViewOpen} data={currentData} />
            

        </div>
    )
}

export default RewardTable