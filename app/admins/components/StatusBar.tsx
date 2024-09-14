


import GroupIcon from '@mui/icons-material/Group';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import getNewEmployeesOfThisMonth from '@/app/actions/employees/getNewEmployeesOfThisMonth';
import getEmployeeList from '@/app/actions/employees/getEmployeeList';
import getResignedEmployeesOfThisMonth from '@/app/actions/employees/getResignedEmployeesOfThisMonth';
import getTotalSalaryOfEmployeesThisMonth from '@/app/actions/salaries/getTotalSalaryOfEmployeesThisMonth';
import getNewProjectsOfThisMonth from '@/app/actions/projects/getNewProjectsOfThisMonth';
import getTotalSalary from '@/app/actions/salaries/getTotalSalary';




const StatusBar = async () => {

    const newEmployees = await getNewEmployeesOfThisMonth();
    const employees = await getEmployeeList()
    const resignedEmployees = await getResignedEmployeesOfThisMonth()
    const totalSalary = await getTotalSalary()
   


    function formattedSalary(salary: any){
        return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salary);

    }

    return (
        <div className='flex items-center w-full p-5 border shadow-sm rounded-lg'>
            <div className="w-full flex flex-col gap-5">
                <h2 className="font-bold text-black text-xl">Thống kê nhân viên</h2>
                <div className="w-full grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-4">


                    <div className='transition-all bg-[#6771e6] p-4 rounded-xl cursor-pointer hover:ring-2'>
                        <div className='w-full flex items-center gap-4 '>
                            <div className=" flex items-center justify-center bg-white w-[50px] h-[50px] border rounded-xl">
                                <GroupIcon
                                    className="h-[25px] w-[25px] text-[#2c76f9]"
                                />
                            </div>
                            <div className='h-full flex flex-col items-start gap-1'>
                                <h3 className='text-md  text-white'>Tổng số nhân viên</h3>
                                <p className='text-2xl text-white '>{employees.length}</p>
                            </div>
                        </div>
                    </div>


                    <div className='transition-all bg-[#fc717a] p-4 rounded-xl cursor-pointer hover:ring-2'>
                        <div className='w-full flex items-center gap-4 '>
                            <div className=" flex items-center justify-center bg-white w-[50px] h-[50px] border rounded-xl">
                                <AccessibilityNewIcon
                                    className="h-[25px] w-[25px] text-[#2c76f9]"
                                />
                            </div>
                            <div className='h-full flex flex-col items-start gap-1'>
                                <h3 className='text-md  text-white'>Số nhân viên mới</h3>
                                <p className='text-2xl text-white '>{newEmployees.length}</p>
                            </div>
                        </div>
                    </div>


                    <div className='transition-all bg-[#44b4fa] p-4 rounded-xl cursor-pointer hover:ring-2'>
                        <div className='w-full flex items-center gap-4 '>
                            <div className=" flex items-center justify-center bg-white w-[50px] h-[50px] border rounded-xl">
                                <WaterDamageIcon
                                    className="h-[25px] w-[25px] text-[#2c76f9]"
                                />
                            </div>
                            <div className='h-full flex flex-col items-start gap-1'>
                                <h3 className='text-md  text-white'>Số nhân viên nghỉ việc</h3>
                                <p className='text-2xl text-white '>{resignedEmployees.length}</p>
                            </div>
                        </div>
                    </div>


                    <div className='transition-all bg-[#fdb657] p-4 rounded-xl cursor-pointer hover:ring-2'>
                        <div className='w-full flex items-center gap-4 '>
                            <div className=" flex items-center justify-center bg-white w-[50px] h-[50px] border rounded-xl">
                                <AttachMoneyIcon
                                    className="h-[25px] w-[25px] text-[#2c76f9]"
                                />
                            </div>
                            <div className='h-full flex flex-col items-start gap-1'>
                                <h3 className='text-md  text-white'>Tổng lương</h3>
                                <p className='text-xl text-white '>{formattedSalary(totalSalary)}</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default StatusBar