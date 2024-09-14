
import { IoMdArrowDropright } from "react-icons/io";
import SalaryForm from "./SalaryForm";
import { Department } from "@prisma/client";



interface MainContentProps{
    departments: Department[]
}


const MainContent = ({
    departments
}: MainContentProps) => {


    return (
        <div className="w-full p-5 space-y-10 mb-20">
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-zinc-500">Tính lương</h3>

                <span className="flex gap-2 items-center text-zinc-500" >
                    <p className="font-semibold text-sm">Lương</p>
                    <IoMdArrowDropright size={20}/>
                    <p className="font-semibold text-sm">Tính lương</p>
                </span>
            </div>


            <div>
                <SalaryForm departments={departments} />
            </div>

        </div>
    )
}

export default MainContent