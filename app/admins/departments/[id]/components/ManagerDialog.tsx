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

interface ManagerDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
   
    data?: any
}


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Tên phòng ban không được để trống"
    }),
    description: z.string(),
    phone: z.string().min(1, {
        message: "Số điện thoại không được để trống"
    }),
    managerId: z.string(),
})





export default function ManagerDialog({
    isOpen,
    setIsOpen,
    data
}: ManagerDialogProps) {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            phone: '',
            managerId: ''
        }

    })


    function onSubmit(values: z.infer<typeof formSchema>) {





        axios.put('/api/departments', {
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


    useEffect(() => {

        form.setValue('name', data.departmentName);
        form.setValue('description', data.description);
        form.setValue('phone', data.phone);

    }, [data, form]);






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
                    <h3 className='text-md font-bold'>Thêm trưởng phòng</h3>
                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


                            <FormField
                                control={form.control}
                                name="managerId"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='flex items-center gap-1'>
                                            <h3>Kết nối với trưởng phòng </h3>
                                            <p className='text-rose-500'>*</p>
                                        </div>

                                        <FormControl>
                                            <select
                                                onChange={(value) => field.onChange(value)}
                                                className='w-full border rounded-md px-3 py-2'
                                            >
                                                <option value=""></option>
                                                {data?.employees.map((employee: Employee) => (
                                                    <option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>
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
                                Thêm
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}


