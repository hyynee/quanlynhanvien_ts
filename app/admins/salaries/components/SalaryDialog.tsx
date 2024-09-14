"use client"

import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import toast from 'react-hot-toast';



interface SalaryDialogProps {
    salaryId: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


const SalaryDialog = ({
    salaryId,
    isOpen,
    setIsOpen
}: SalaryDialogProps) => {


    


    const handleDeleteButton = ()=>{
        axios.delete(`/api/salaries/${salaryId}`, {
            
        }).then((callback)=>{
            if(callback.status === 200){
                setIsOpen(false)
                toast.success('Đã xóa thành công')
                location.reload()
            }else{
                toast.error('Xóa thất bại')
            }
        })
    }



    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <h3>Bạn chắc chắn muốn xóa lương?</h3>
                <div className='w-full h-full flex justify-between p-5'>
                    <button 
                        className='transition-all text-white rounded-md px-3 py-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2'
                        onClick={()=>setIsOpen(false)}
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

export default SalaryDialog