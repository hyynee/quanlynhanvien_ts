import { db } from "@/lib/db";


export default async function charData() {
    try {
        
        
        const resignedEmployees = await db.employee.findMany({
            where:{
                status: 'INACTIVE'
            },
            select: {
                updateAt: true
            }
        });

        const newEmployees = await db.employee.findMany({
            
            select: {
                createAt: true
            }
        });

       
        const resignedCountByMonth = Array(12).fill(0);
        
        const newEmployeesCountByMonth = Array(12).fill(0);

        
        resignedEmployees.forEach(employee => {
            const month = getMonthFromDate(employee.updateAt);
            resignedCountByMonth[month - 1]++;
        });

       
        newEmployees.forEach(employee => {
            const month = getMonthFromDate(employee.createAt);
            newEmployeesCountByMonth[month - 1]++;
        });

        
        const dataE = [
            {
                name: 'Nhân viên nghỉ việc',
                data: resignedCountByMonth,
                color: '#45b4fa'
            },
            {
                name: 'Nhân viên mới',
                data: newEmployeesCountByMonth,
                color: '#2d77f9'
            }
        ];

        return dataE;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } finally {
        await db.$disconnect();
    }
}

// Hàm lấy tháng từ một đối tượng Date
function getMonthFromDate(date:Date) {
    return date.getMonth() + 1; // Trả về tháng từ 1 đến 12
}
