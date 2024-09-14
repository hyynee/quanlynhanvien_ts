


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { z } from "zod"
import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"


interface DisciplineFormProps {
    departments: any[],
    disciplineTypes: any[],
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




const DisciplineForm = ({
    departments,
    disciplineTypes
}: DisciplineFormProps) => {

    const [isMounted, setIsMounted] = useState(false)
    const [employees, setEmployees] = useState<any>()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: "",
            content: '',
            fine: '0',
            kindOfDisciplineId: ''
        },
    })




    function onSubmit(values: z.infer<typeof formSchema>) {

        axios.post('/api/disciplines',{
            ...values
        }).then((callback)=>{
            if(callback.status === 200){
                toast.success('Thêm thành công')
                form.reset()
                location.reload()
            }else{
                toast.error('Thêm thất bại')
            }
        })
        
    }

    useEffect(()=>{
        setIsMounted(true)
    },[])


    if(!isMounted){
        return null;
    }
    return (
        <div className="w-full border rounded-lg shadow-lg px-5 py-3 mb-20">
            <div className="flex items-center justify-center">
                <h3 className="text-2xl font-bold">Form kỉ luật nhân viên</h3>
            </div>
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
                            <option value=""></option>
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
                                        <option value=""></option>
                                        {employees?.employees?.map((item: any) => (
                                            <option key={item.id} value={item.id}>
                                                <div className="w-full flex gap-2 justify-between">
                                                    <p>
                                                        {item.firstName} {item.lastName}
                                                    </p>
                                                    {item.dateOfBirth && ( // Kiểm tra xem dateOfBirth có tồn tại không trước khi truy cập
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
                                            type="number" // Chỉ cho phép nhập số

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
                        Thêm kỉ luật
                    </Button>
                </form>
            </Form>

        </div>
    )
}

export default DisciplineForm