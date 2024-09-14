"use client"



import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Employee } from '@prisma/client';

interface ProjectDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    variant: "create" | "edit" | "delete",
    data?: any,
    departments: any[]
}


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Tên dự án không được để trống"
    }),
    startDate: z.date(),
    endDate: z.date(),
    description: z.string(),
    status: z.string(),
    departmentId: z.string(),
})





export default function ProjectDialog({
    isOpen,
    setIsOpen,
    variant,
    data,
    departments
}: ProjectDialogProps) {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            startDate: undefined,
            endDate: undefined,
            status: 'UNFINISHED',
            departmentId: ''
        }

    })


    function onSubmit(values: z.infer<typeof formSchema>) {


        if (variant === 'create') {
            axios.post('/api/projects', {
                ...values
            }).then((callback) => {
                if (callback.status === 200) {
                    toast.success('Tạo dự án thành công')
                    form.reset()
                } else {
                    toast.error('Tạo dự án thất bại')
                }
            })
        }

        if (variant === 'edit') {
            axios.put(`/api/projects/${data.id}`, {
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
            axios.delete(`/api/projects/${data.id}`, {
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
            form.setValue('endDate', new Date(data.endDate.toLocaleDateString()));
            form.setValue('startDate', new Date(data.startDate.toLocaleDateString()));
            form.setValue('name', data.name);
            form.setValue('description', data.description);
            form.setValue('status', data.status)
        }
    }, [data, variant, form]);






    if (variant === 'delete') {
        return (
            <Dialog className='' open={isOpen}>
                <DialogContent >
                    <h3>Bạn chắc chắn muốn xóa dự án?</h3>
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
                    <h3 className='text-md font-bold'>{variant === 'edit' ? 'Chỉnh sửa dự án' : 'Thêm dự án mới'}</h3>
                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>

                                        <div className='flex items-center gap-1'>
                                            <h3>Tên dự án</h3>
                                            <p className='text-rose-500'>*</p>
                                        </div>
                                        <FormControl>
                                            <Input placeholder="Tên dự án" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            {variant === 'create' && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="startDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex items-center gap-1'>
                                                    <h3>Ngày bắt đầu</h3>
                                                    <p className='text-rose-500'>*</p>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        type='date'
                                                        onChange={(event) => {
                                                            const selectedDate = event.target.value;
                                                            if (selectedDate) {
                                                                field.onChange(new Date(selectedDate));
                                                            } else {
                                                                field.onChange(null);
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="endDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex items-center gap-1'>
                                                    <h3>Ngày kết thúc</h3>
                                                    <p className='text-rose-500'>*</p>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        type='date'
                                                        onChange={(event) => {
                                                            const selectedDate = event.target.value;
                                                            if (selectedDate) {
                                                                field.onChange(new Date(selectedDate));
                                                            } else {
                                                                field.onChange(null);
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                            {variant === 'edit' && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="startDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex items-center gap-1'>
                                                    <h3>Ngày bắt đầu</h3>
                                                    <p className='text-rose-500'>*</p>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        type='date'
                                                        value={
                                                            field.value instanceof Date && !isNaN(field.value.getTime())
                                                                ? field.value.toISOString().split('T')[0]
                                                                : '' // Set to empty string if value is not a Date
                                                        }
                                                        onChange={(event) => {
                                                            const selectedDate = event.target.value;
                                                            if (selectedDate) {
                                                                field.onChange(new Date(selectedDate));
                                                            } else {
                                                                field.onChange(null);
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="endDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex items-center gap-1'>
                                                    <h3>Ngày kết thúc</h3>
                                                    <p className='text-rose-500'>*</p>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        type='date'
                                                        value={
                                                            field.value instanceof Date && !isNaN(field.value.getTime())
                                                                ? field.value.toISOString().split('T')[0]
                                                                : '' // Set to empty string if value is not a Date
                                                        }
                                                        onChange={(event) => {
                                                            const selectedDate = event.target.value;
                                                            if (selectedDate) {
                                                                field.onChange(new Date(selectedDate));
                                                            } else {
                                                                field.onChange(null);
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}



                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='flex items-center gap-1'>
                                            <h3>Mô tả</h3>

                                        </div>

                                        <FormControl>
                                            <Textarea placeholder="Mô tả" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            {variant === 'edit' && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex items-center gap-1'>
                                                    <h3>Trạng thái</h3>

                                                </div>
                                                <FormControl>
                                                    <select name="status" id="status"
                                                        className='px-3 py-2 border rounded-md w-full'
                                                        value={field.value}
                                                        onChange={(value) => field.onChange(value)}
                                                    >
                                                        <option value="FINISHED">Đã hoàn thành</option>
                                                        <option value="UNFINISHED">Chưa hoàn thành</option>
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </>
                            )}


                            <FormField
                                control={form.control}
                                name="departmentId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Chọn phòng ban*</FormLabel>
                                        <FormControl>
                                            <select
                                                onChange={(event) => {
                                                    const selectedDepartmentId = event.target.value;

                                                    field.onChange(selectedDepartmentId)

                                                }}
                                                className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300">
                                                <option value=""></option>
                                                {departments.map((item) => (
                                                    <option key={item.id} value={item.id}>
                                                        {item.departmentName}
                                                    </option>
                                                ))}
                                            </select>
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <Button
                                className="flex w-full items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                                type="submit"
                            >
                                {variant === 'edit' ? 'Cập nhật' : 'Thêm'}
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}


