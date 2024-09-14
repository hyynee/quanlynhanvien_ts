"use client"



import { DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';


import axios from 'axios';
import toast from 'react-hot-toast';


interface DepartmentDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    data?: any,
    departmentId: string;
}






export default function DepartmentDialog({
    isOpen,
    setIsOpen,
    data,
    departmentId
}: DepartmentDialogProps) {


    

    const handleDeleteButton = ()=> {
       
           
        axios.put(`/api/projects/${data.id}`,{
            st: 'DeleteDepartment',
            departmentId
        })
        
    }
  


    

   
        return (
            <Dialog className='' open={isOpen}>
                <DialogContent >
                    <h3>Bạn chắc chắn muốn xóa phòng ban khỏi dự án?</h3>
                    <div className='w-full h-full flex justify-between p-5'>
                        <button
                            className='transition-all text-white rounded-md px-3 py-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2'
                            onClick={() => setIsOpen(false)}
                        >
                            Hủy
                        </button>
                        <button
                            className='transition-all text-white rounded-md px-3 py-2 bg-rose-500 hover:bg-rose-600 hover:ring-2'
                            onClick={handleDeleteButton}
                        >
                            Xác nhận
                        </button>

                    </div>
                </DialogContent>

            </Dialog>
        )
    


    
}


