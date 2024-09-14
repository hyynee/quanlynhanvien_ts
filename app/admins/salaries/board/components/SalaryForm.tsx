"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Department } from "@prisma/client"
import axios from "axios"
import { now } from "next-auth/client/_utils"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

const formSchema = z.object({
    departmentId: z.string().min(1, {
        message: "Vui lòng chọn phòng ban"
    }),
    employeeId: z.string().min(1, {
        message: "Vui lòng chọn 1 nhân viên để tính lương"
    }),
    workday: z.string().min(1, {
        message: "Vui lòng nhập số ngày công"
    }),
    allowance: z.string(),
    description: z.string().min(1, {
        message: "Vui long nhập mô tả"
    })
})



interface SalaryFormProps {
    departments: Department[]
}



const SalaryForm = ({
    departments
}: SalaryFormProps) => {

    const [employees, setEmployees] = useState<any>()
    const today = new Date().toISOString().split('T')[0];

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            departmentId: "",
            employeeId: "",
            workday: "",
            allowance: '0',
            description: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {

        const data = {
            employeeId: values.employeeId,
            workday: values.workday,
            allowance: values.allowance,
            description: values.description
        }
        
        
        axios.post('/api/salaries', {
            ...data
        })
        .then((callback)=>{
            if(callback.status === 200){
                toast.success('Chấm thành công')
                form.reset()
                location.reload()
            }else{
                toast.error("Chấm thất bại")
            }
        })
    }




    return (
        <div className="border rounded-xl shadow-sm ">
            <div className="border-b px-5 py-2">
                <h3 className="font-semibold text-md">Tính lương nhân viên</h3>
            </div>




            <div className="p-5 space-y-4">


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
                            <FormField
                                control={form.control}
                                name="workday"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-2">
                                        <FormLabel>Số ngày công*</FormLabel>
                                        <FormControl>
                                            <input
                                                className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300"
                                                type="number" {...field}
                                                placeholder="..."
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="allowance"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-2">
                                        <FormLabel>Phụ cấp</FormLabel>
                                        <FormControl>
                                            <input
                                                className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300"
                                                type="number" {...field}
                                                placeholder="..."
                                            />
                                        </FormControl>

                                       
                                    </FormItem>
                                )}
                            />

                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-medium ">
                                    Ngày chấm
                                </h3>

                                <input
                                    className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300"
                                    type="date"
                                    value={today} 
                                    readOnly
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-2">
                                        <FormLabel>Mô tả*</FormLabel>
                                        <FormControl>
                                            <textarea
                                                className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300"
                                                rows={10}
                                                placeholder="..."

                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                className="flex w-full items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                                type="submit"
                            >
                                Chấm công
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SalaryForm





