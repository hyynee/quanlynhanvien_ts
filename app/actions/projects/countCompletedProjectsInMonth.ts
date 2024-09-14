import { db } from '@/lib/db';



async function generateCompletedProjectsData() {
   
        
        const completedProjects = await db.project.findMany({
            where: {
                status: 'FINISHED',
            },
           
        });

        // Khởi tạo mảng để lưu trữ số dự án hoàn thành của từng tháng
        const data = new Array(12).fill(0);

        // Lọc và đếm số dự án hoàn thành cho từng tháng
        completedProjects.forEach(project => {
            if(project.startDate){
                const updateAt = new Date(project.startDate);
                const month = updateAt.getMonth();
                data[month]++;
            }
        });

        // Format dữ liệu thành định dạng bạn yêu cầu
        const formattedData = [{
            name: 'Dự án hoàn thành',
            data: data,
            color: '#2c76f9'
        }];

        return formattedData;
   
}

export default generateCompletedProjectsData;
