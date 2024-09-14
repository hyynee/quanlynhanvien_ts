"use client"



import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button';

import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


interface DiciplineDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    variant: "edit" | "view" | "delete",
    departments: any[],
    disciplineTypes: any[],
    data?: any,
}


const formSchema = z.object({
    employeeId: z.string().min(2, {
        message: "Vui lòng chọn nhân viên để kỉ luật"
    }),
    content: z.string().min(1, {
        message: "Nội dung kỉ luật không được để trống"
    }),
    fine: z.string(),
    kindOfDisciplineId: z.string().min(1, {
        message: "Loại kỉ luật không được để trống"
    }),


})






export default function DiciplineDialog({
    isOpen,
    setIsOpen,
    variant,
    departments,
    disciplineTypes,
    data
}: DiciplineDialogProps) {

    const [employees, setEmployees] = useState<any>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: "",
            content: '',
            fine: '',
            kindOfDisciplineId: ''
        },
    })




    function onSubmit(values: z.infer<typeof formSchema>) {




        if (variant === 'edit') {
            axios.put(`/api/disciplines/${data.id}`, {
                ...values
            }).then((callback) => {
                if (callback.status === 200) {
                    toast.success('Cập nhật thành công')
                    location.reload()
                } else {
                    toast.error('Cập nhật thất bại')
                }
            })

        }

    }

    const handleDeleteButton = () => {
        if (variant === 'delete') {
            axios.delete(`/api/disciplines/${data.id}`, {
                data: {
                    id: data.id
                }
            }).then((callback) => {
                if (callback.status === 200) {
                    toast.success('Xóa thành công')
                    location.reload()
                } else {
                    toast.error('Xóa thất bại')
                }
            })

        }
    }
    useEffect(() => {
        if (data && variant === 'edit') {
            form.setValue('employeeId', data?.employees[0]?.id);
            form.setValue('content', data?.content);
            form.setValue('fine', data?.fine);
            form.setValue('kindOfDisciplineId', data?.kindOfDiscipline[0].id);
        }
    }, [data, variant, form]);




    if (variant === 'view') {
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
                        <h3 className='text-md font-bold'>Chi tiết kỉ luật</h3>
                    </div>

                    <div className='space-y-4 mt-4'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Mã kỉ luật:</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.id}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-md font-bold'>Nhân viên kỉ luật:</h3>
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
                            <h3 className='text-md font-bold'>Loại kỉ luật</h3>
                            <p className='border rounded-md px-3 py-3'>{data?.kindOfDiscipline[0]?.name}</p>
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

    if (variant === 'delete') {
        return (
            <Dialog className='' open={isOpen}>
                <DialogContent >
                    <h3>Bạn chắc chắn muốn xóa kỉ luật?</h3>
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


    return (
        <Dialog open={isOpen} >

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
                    <h3 className='text-md font-bold'>{variant === 'edit' && 'Chỉnh sửa kỉ luật'}</h3>
                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <div className="flex flex-col gap-2">
                                <h3 className="text-md font-semibold">Chọn phòng ban</h3>
                                <select
                                    onChange={(event) => {

                                        const selectedDepartmentId = event.target.value;
                                        const selectedDepartment = departments.find(department => department.id === selectedDepartmentId);
                                        setEmployees(selectedDepartment);

                                    }}
                                    className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300">
                                    <option
                                        value={data?.employees[0]?.department?.id}
                                    >
                                        {data?.employees[0]?.department?.departmentName}
                                    </option>
                                    {departments.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.departmentName}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            <FormField
                                control={form.control}
                                name="employeeId"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-2">
                                        <h3 className="text-md font-semibold">Chọn nhân viên</h3>
                                        <FormControl>
                                            <select
                                                {...field}
                                                className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300">
                                                <option value={data?.employees[0].id}>
                                                    <div className="w-full flex gap-2 justify-between">
                                                        <p>
                                                            {data?.employees[0]?.firstName} {data?.employees[0]?.lastName}
                                                        </p>
                                                        {data?.employees[0]?.dateOfBirth && (
                                                            <p className="ml-4">({data?.employees[0]?.dateOfBirth.toLocaleDateString()})</p>
                                                        )}
                                                    </div>
                                                </option>
                                                {employees?.employees?.map((item: any) => (
                                                    <option key={item.id} value={item.id}>
                                                        <div className="w-full flex gap-2 justify-between">
                                                            <p>
                                                                {item.firstName} {item.lastName}
                                                            </p>
                                                            {item.dateOfBirth && (
                                                                <p className="ml-4">({item.dateOfBirth.toLocaleDateString()})</p>
                                                            )}
                                                        </div>
                                                    </option>
                                                ))}

                                            </select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}

                            />

                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <h3 className="text-md font-semibold">Nội dung kỉ luật</h3>
                                        <FormControl>
                                            <textarea
                                                className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300"
                                                rows={10}
                                                placeholder="..."

                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fine"
                                render={({ field }) => (
                                    <FormItem>
                                        <h3 className="text-md font-semibold">Tiền phạt</h3>
                                        <div className="w-full flex items-center gap-2">
                                            <FormControl className="flex items-center">
                                                <input
                                                    placeholder="..."
                                                    type="number"

                                                    className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <p className="font-bold text-lg">VNĐ</p>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="kindOfDisciplineId"
                                render={({ field }) => (
                                    <FormItem>
                                        <h3 className="text-md font-semibold">Chọn loại kỉ luật</h3>
                                        <FormControl>
                                            <select
                                                {...field}
                                                className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300">
                                                <option value=""></option>
                                                {disciplineTypes?.map((item: any) => (
                                                    <option key={item.id} value={item.id}>
                                                        <div className="w-full flex gap-2 justify-between">
                                                            <p>
                                                                {item.name}
                                                            </p>

                                                        </div>
                                                    </option>
                                                ))}

                                            </select>
                                        </FormControl>

                                    </FormItem>
                                )}
                            />
                            <Button
                                className="flex w-full items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                                type="submit"
                            >
                                Lưu kỉ luật
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}


