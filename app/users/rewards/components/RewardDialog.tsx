"use client"

import { DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { IoMdClose } from 'react-icons/io';


interface RewardDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

    data?: any,
}








export default function RewardDialog({
    isOpen,
    setIsOpen,
    data
}: RewardDialogProps) {

   

    

  



   
        return (
            <Dialog className='' open={isOpen}>
                <DialogContent className='w-[35rem]'>
                    <div className='w-full flex justify-end items-center'>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='transition-all p-2 bg-rose-500 rounded-lg shadow-2xl hover:bg-rose-600 hover:ring-1 hover:ring-rose-800 text-white'
                        >
                            <IoMdClose />
                        </button>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <h3 className='text-md font-bold'>Chi tiết khen thưởng</h3>
                    </div>

                    <div className='space-y-4 mt-4'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Mã khen thưởng:</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.id}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Nhân viên khen thưởng:</h3>
                            <div className='w-full flex'>
                                <div className='w-1/2'>
                                    {data?.employees[0]?.imageUrl ? (
                                        <img src={data?.employees[0]?.imageUrl} alt="Image" className='w-[100px] h-[110px] object-cover rounded-md ring-2' />
                                    ) : ''}
                                </div>
                                <div className='w-1/2 space-y-2'>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='font-semibold textmd'>Mã nhân viên:</h3>
                                        <p className='text-zinc-400 text-sm'>{data?.employees[0]?.id} </p>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='font-semibold textmd'>Tên:</h3>
                                        <p className='text-zinc-400 text-sm'>{data?.employees[0]?.firstName} {data?.employees[0]?.lastName}</p>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='font-semibold textmd'>Ngày sinh:</h3>
                                        <p className='text-zinc-400 text-sm'>{data?.employees[0]?.dateOfBirth.toLocaleDateString()}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Nội dung:</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.content}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Tiền thưởng:</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.prizeMoney}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Loại khen thưởng:</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.kindOfBonus[0]?.name}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Ngày tạo:</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.createAt.toLocaleDateString()}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Ngày sửa:</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.updateAt.toLocaleDateString()}</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        )


    
}


