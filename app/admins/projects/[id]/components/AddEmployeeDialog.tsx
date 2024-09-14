"use client"

import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface AddEmployeeDialogProps {
    data: any;
    departments: any[]
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

}

const formSchema = z.object({

    departmentId: z.string().min(1, {
        message: "Vui lòng chọn một phòng ban"
    }),

    employeeId: z.string().min(1, {
        message: "Vui lòng chọn 1 nhân viên"
    }),
})



const AddEmployeeDialog = ({
    data,
    departments,
    isOpen,
    setIsOpen
}: AddEmployeeDialogProps) => {


    const [employees, setEmployees] = useState<any>()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            departmentId: '',
            employeeId: ''
        }

    })

    function onSubmit(values: z.infer<typeof formSchema>) {


       

        axios.put(`/api/projects/${data.id}`,{
            st: 'AddEmployee',
            name: data.name,
            startDate: data.startDate,
            endDate: data.endDate,
            description: data.description,
            employeeId: values.employeeId,
           
        }).then((callback)=>{
            if(callback.status === 200){
                toast.success('Thêm nhân viên thành công')
                location.reload()
            }else{
                toast.error('Thêm nhân viên thất bại')
            }
        })

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
                    <h3 className='text-md font-bold'>Thêm nhân viên</h3>
                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                                    const selectedDepartment = departments.find(department => department.id === selectedDepartmentId);
                                                    field.onChange(selectedDepartmentId)
                                                    setEmployees(selectedDepartment);
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
                            <FormField
                                control={form.control}
                                name="employeeId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Chọn nhân viên*</FormLabel>
                                        <FormControl>
                                            <select
                                                {...field}
                                                className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300">
                                                <option value=""></option>



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




                            <Button
                                className="flex w-full items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                                type="submit"
                            >
                                thêm
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddEmployeeDialog