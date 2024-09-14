
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Department } from "@prisma/client";


interface DepartmentTableProps {
    departments: Department[],
    project: any;
}



const DepartmentTable = ({
    departments,
    project,
}: DepartmentTableProps) => {

   



    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                        <TableHead>Tên </TableHead>
                        <TableHead>Sdt</TableHead>
                        
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {departments.map((department, index) => (
                        <TableRow key={department.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{department.id}</TableCell>
                            <TableCell>{department.departmentName}</TableCell>
                            <TableCell>{department.phone}</TableCell>
                        

                            
                        </TableRow>
                    ))}




                </TableBody>
            </Table>

           
            
           

        </div>
    )
}

export default DepartmentTable