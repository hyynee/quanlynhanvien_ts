"use client"





import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";




interface SalaryTableProps {
    salaries: any[]
}

const SalaryTable = ({
    salaries
}: SalaryTableProps) => {


    function formattedSalary(salary: any){
        return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salary);

    }
     
    return (
        <div style={{maxHeight: "500px" , overflowY: "auto"}}>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã Lương</TableHead>
                        <TableHead>Tên nhân viên</TableHead>
                        
                        <TableHead>Chức vụ</TableHead>
                        <TableHead>Lương tháng</TableHead>
                        <TableHead>Ngày công</TableHead>
                        <TableHead>Thực lãnh</TableHead>
                        <TableHead>Ngày chấm</TableHead>
                        
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {salaries.map((salary, index)=> (
                        <TableRow key={salary.id}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell >{salary.id}</TableCell>
                            <TableCell >{salary.employee.firstName} {salary.employee.lastName}</TableCell>
                           
                            <TableCell >{salary.employee.position.positionName}</TableCell>
                            <TableCell >{formattedSalary(salary.basicSalary)}</TableCell>
                            <TableCell >{salary.workday}</TableCell>
                            <TableCell >{formattedSalary(salary.salary)} </TableCell>
                            <TableCell >{salary.createAt.toLocaleDateString()}</TableCell>
                            

                           

                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>

            

        </div>
    )
}

export default SalaryTable