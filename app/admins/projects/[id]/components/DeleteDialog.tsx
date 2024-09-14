"use client"

import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import toast from 'react-hot-toast';



interface DeleteDialogProps {
    employee: any;
    projectId: any;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


const DeleteDialog = ({
    employee,
    projectId,
    isOpen,
    setIsOpen
}: DeleteDialogProps) => {


    


    const handleDeleteButton = ()=>{
        
        const data = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            imageUrl: employee.imageUrl,
            sex: employee.sex,
            dateOfBirth: employee.dateOfBirth,
            birthplace: employee.birthPlace,
            identificationCode: employee.identificationCode,
            dateRange: employee.dateRange,
            issuedBy: employee.issuedBy,
            nationality: employee.nationality,
            religion: employee.religion,
            nationId: employee?.nations[0]?.id,
            departmentId: employee.DepartmentId,
            projectId: projectId,
            phone: employee.phone,
            email: employee.email,
            address: employee.address,
            positionId:employee.positionId,
            degreeId: employee.degrees[0].id,
            specialize: employee.specialize,
            experience: employee.experience,
            typeOfEmployeeId: employee.typeOfEmployeeId,
            status:employee.status
        } 

        axios.put(`/api/employees/${employee.id}`, {
            ...data
        }).then((callback)=>{
            if(callback.status === 200){
                setIsOpen(false)
                toast.success('Đã xóa nhân viên khỏi phòng ban')
                location.reload()
            }else{
                toast.error('Xóa thất bại')
            }
        })


        
    }



    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <h3>Bạn chắc chắn muốn xóa nhân viên khỏi dự án?</h3>
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

export default DeleteDialog