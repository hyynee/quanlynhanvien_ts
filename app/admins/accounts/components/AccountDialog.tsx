"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { IoMdClose } from "react-icons/io";
import axios from 'axios'
import { useEffect } from 'react';
import toast from 'react-hot-toast';


interface AccountDialogProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void;
    variant: 'create' | 'edit';
    data?: any;
}



const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: 'Mật khẩu phải trên 8 kí tự'
    }),
    role: z.string().min(1, {
        message: 'Hãy chọn quyền hợp lệ'
    }),
    employeeId: z.string()
})


export default function AccountDialog({
    isOpen,
    setIsOpen,
    variant,
    data
}: AccountDialogProps) {



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            role: 'GUEST' || 'ADMIN',
            employeeId: ''
        },
    })


    useEffect(() => {
        if (data && variant === 'edit') {
            form.setValue('email', data.email);
            form.setValue('password', data.password);
            form.setValue('role', data.role);
            form.setValue('employeeId', data?.employee?.id);
            
        }
    }, [data, variant, form]);
    


    function onSubmit(values: z.infer<typeof formSchema>) {

        if (variant === 'create') {
            axios.post('/api/users', {
                ...values
            })
                .then((callback) => {
                    if (callback.status === 200) {
                        toast.success('Thêm tài khoản thành công')
                        setIsOpen(false)
                        location.reload()
                    } else {
                        toast.error('Thêm tài khoản thất bại')
                    }
                })
        }

        if (variant === 'edit') {
            axios.put('/api/users', {
                id: data.id,
                ...values
            })
                .then((callback) => {
                    if (callback.status === 200) {
                        toast.success('Cập nhật thành công')
                        setIsOpen(false)
                        location.reload()
                    } else {
                        toast.error('Cập nhật thất bại')
                    }
                })

            
        }
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
                    <h3 className='text-md font-bold'>{variant === 'edit' ? 'Chỉnh sửa tài khoản' : 'Thêm tài khoản mới'}</h3>
                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Password" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='flex w-full items-center justify-between'>
                                            <FormLabel className='text-sm font-bold'>Role</FormLabel>
                                            <FormControl>
                                                <select
                                                    value={field.value}
                                                    className='p-2 border rounded-md'
                                                    onChange={(value) => field.onChange(value)}
                                                >
                                                    <option value="GUEST">GUEST</option>
                                                    <option value="ADMIN">ADMIN</option>
                                                </select>
                                            </FormControl>
                                        </div>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="employeeId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>EmployeeId</FormLabel>
                                        <FormControl>
                                            <Input placeholder="EmployeeId" {...field} />
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
