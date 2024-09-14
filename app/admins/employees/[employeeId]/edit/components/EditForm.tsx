"use client"


import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useEffect, useState } from "react"
import { Degree, Department, Employee, Nations, Position, TypeOfEmployee } from "@prisma/client"
import axios from "axios"
import toast from "react-hot-toast"
import Upload from "./Upload"
import useEmployee from "@/hooks/useEmployee"


interface EditFormProps {
    positions: Position[];
    departments: Department[];
    typeOfEmployees: TypeOfEmployee[];
    nations: Nations[],
    degrees: Degree[]
}

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Họ và tên đệm phải trên 2 kí tự",
    }),
    lastName: z.string().min(2, {
        message: "Tên phải trên hai kí tự"
    }),
    imageUrl: z.string().min(1, {
        message: 'Ảnh không được để trống'
    }),
    sex: z.string(),
    dateOfBirth: z.date().refine((value) => {
        if (!value) {
            throw new Error("Ngày sinh không được để trống");
        }
        return true;
    }),
    birthplace: z.string(),
    identificationCode: z.string().length(9, {
        message: "Số chứng minh phải đủ 9 chữ số"
    }),
    dateRange: z.date(),
    issuedBy: z.string(),
    nationality: z.string().min(1, {
        message: 'Quốc tịch không được để trống'
    }),
    religion: z.string(),
    nationId: z.string(),
    departmentId: z.string().min(1, {
        message: 'phòng ban không được để trống'
    }),
    phone: z.string().min(10, {
        message: 'Số điện thoại không được để trống'
    }),
    email: z.string().email({
        message: "nhập đúng định dạng email"
    }),
    address: z.string().min(1, {
        message: 'địa chỉ không được để trống'
    }),
    positionId: z.string().min(1, {
        message: "Chức vụ không được để trống"
    }),
    degreeId: z.string(),
    specialize: z.string(),
    experience: z.string(),
    typeOfEmployeeId: z.string(),
    status: z.string()

})


const EditForm = ({
    positions,
    departments,
    typeOfEmployees,
    nations,
    degrees

}: EditFormProps) => {

    const [isMounted, setIsMounted] = useState(false);



    const { employeeId } = useEmployee()







    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: '',
            imageUrl: '',
            sex: '',
            dateOfBirth: undefined,
            birthplace: '',
            identificationCode: '',
            dateRange: undefined,
            issuedBy: '',
            nationality: '',
            religion: '',
            nationId: '',
            departmentId: '',
            phone: '',
            email: '',
            address: '',
            positionId: '',
            degreeId: '',
            specialize: '',
            experience: '',
            typeOfEmployeeId: '',
            status: 'active' || 'inactive'


        },

    })

    useEffect(() => {
        axios.get(`/api/employees/${employeeId}`, {
            data: {
                id: employeeId
            }
        }).then((response) => {
            form.setValue('firstName', response.data.firstName)
            form.setValue('lastName', response.data.lastName)
            form.setValue('imageUrl', response.data.imageUrl)
            form.setValue('sex', response.data.sex)
            form.setValue('dateOfBirth', response.data.dateOfBirth)
            form.setValue('birthplace', response.data.birthPlace)
            form.setValue('identificationCode', response.data.identificationCode)
            form.setValue('dateRange', response.data.dateRange)
            form.setValue('issuedBy', response.data.issuedBy)
            form.setValue('nationality', response.data.nationality)
            form.setValue('religion', response.data.religion)
            form.setValue('nationId', response.data.nations[0].id)
            form.setValue('nationId', response.data.nation)
            form.setValue('departmentId', response.data.DepartmentId)
            form.setValue('phone', response.data.phone)
            form.setValue('email', response.data.email)
            form.setValue('address', response.data.address)
            form.setValue('address', response.data.address)
            form.setValue('positionId', response.data.positionId)
            form.setValue('degreeId', response.data.degrees[0].id)
            form.setValue('specialize', response.data.specialize)
            form.setValue('experience', response.data.experience)
            form.setValue('typeOfEmployeeId', response.data.typeOfEmployeeId)
            form.setValue('status', response.data.status)


        })
    }, [employeeId])






    function onSubmit(values: z.infer<typeof formSchema>) {

        axios.put(`/api/employees/${employeeId}`, {
            ...values
        }).then((callback) => {
            if (callback.status === 200) {
                toast.success('Sửa thành công')
                form.reset()
                location.reload()
            } else {
                toast.error("Sửa thất bại")
            }
        })





    }








    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }


    return (

        <div className="border rounded-md shadow-xl h-[90%] mb-20 overflow-auto">

            <div className="w-full border-b flex items-center gap-10 px-3 py-2">
                <h3 className="text-sm font-semibold ">Sửa nhân nhân viên </h3>

                <p className="flex items-center text-sm gap-2">Những ô có dấu <span className="text-rose-500 font-semibold">*</span> là bắt buộc</p>

            </div>

            <div className="px-3 py-2">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">

                        <div className="grid grid-cols-2 gap-4">

                            <div className=" col-span-2 flex justify-center items-center">
                                <FormField
                                    name="imageUrl"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2">
                                            <div className="flex items-center gap-1">
                                                <h3 className="text-sm font-semibold">Ảnh</h3>
                                                <p className="text-rose-500 font-semibold">*</p>
                                            </div>
                                            <FormControl>
                                                <Upload value={field.value} onChange={field.onChange} />

                                            </FormControl>
                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name="firstName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Họ</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="lastName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Tên</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="sex"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Giới tính</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <select
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >

                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="phone"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Số điện thoại</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Email</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="address"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Địa chỉ liên hệ</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text" {...field}
                                                className="border w-full rounded-md focus-visible:ring-1 focus:outline-sky-300 px-3 py-1"
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="dateOfBirth"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Ngày sinh</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="date"
                                                value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                onChange={(event) => {
                                                    const selectedDate = event.target.value;
                                                    if (selectedDate) {
                                                        // Nếu người dùng đã chọn một ngày, chuyển đổi nó thành đối tượng Date và gọi field.onChange
                                                        field.onChange(new Date(selectedDate));
                                                    } else {
                                                        // Nếu người dùng xóa hết giá trị, gọi field.onChange với giá trị null
                                                        field.onChange(null);
                                                    }
                                                }}
                                            />


                                        </FormControl>


                                        {form.formState.errors.dateOfBirth && (
                                            <p className="text-sm text-[#EF4444] font-medium">Ngày sinh không được để trống</p>
                                        )}







                                    </FormItem>
                                )}





                            />



                            <FormField
                                name="birthplace"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 mt-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Nơi sinh</h3>

                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="identificationCode"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Số chứng minh thư</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="dateRange"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Ngày cấp</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="date"
                                                value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                onChange={(event) => {
                                                    const selectedDate = event.target.value;
                                                    if (selectedDate) {
                                                        // Nếu người dùng đã chọn một ngày, chuyển đổi nó thành đối tượng Date và gọi field.onChange
                                                        field.onChange(new Date(selectedDate));
                                                    } else {
                                                        // Nếu người dùng xóa hết giá trị, gọi field.onChange với giá trị null
                                                        field.onChange(null);
                                                    }
                                                }}
                                            />


                                        </FormControl>


                                        {form.formState.errors.dateRange && (
                                            <p className="text-sm text-[#EF4444] font-medium">Ngày Cấp không được để trống</p>
                                        )}







                                    </FormItem>
                                )}
                                rules={{ required: 'Ngày cấp không được để trống' }}
                            />
                            <FormField
                                name="issuedBy"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Nơi cấp</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                placeholder=""
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                {...field}
                                            />

                                        </FormControl>

                                        <FormMessage />






                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="nationality"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Quốc tịnh</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input

                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"

                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="religion"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Tôn giáo</h3>

                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"
                                                placeholder="Không"
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="nationId"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Dân tộc</h3>

                                        </div>
                                        <FormControl>


                                            <select
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >
                                                <option value=""></option>
                                                {nations.map((nation) => (
                                                    <option key={nation.id} value={nation.id}>{nation.name}</option>
                                                ))}
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="degreeId"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Bằng cấp</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>


                                            <select
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >
                                                <option value=""></option>
                                                {degrees.map((degree) => (
                                                    <option key={degree.id} value={degree.id}>{degree.degreeName}</option>
                                                ))}
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="specialize"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 mt-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Lĩnh vực</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"

                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="experience"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 mt-1">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Kinh nghiệm</h3>

                                        </div>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="px-3 h-[35px] rounded-md focus-visible:outline-sky-300 border"

                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="positionId"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Chức vụ</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <select
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >
                                                <option value=""></option>
                                                {positions.map((position) => (
                                                    <option key={position.id} value={position.id}>{position.positionName}</option>
                                                ))}
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="departmentId"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Phòng ban</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>


                                            <select
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >
                                                <option value=""></option>
                                                {departments.map((department) => (
                                                    <option key={department.id} value={department.id}>{department.departmentName}</option>
                                                ))}
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="typeOfEmployeeId"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Loại nhân viên</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <select
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >
                                                <option value=""></option>
                                                {typeOfEmployees.map((item) => (
                                                    <option key={item.id} value={item.id}>{item.name}</option>
                                                ))}
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="status"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1 ">
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-semibold">Trạng thái</h3>
                                            <p className="text-rose-500 font-semibold">*</p>
                                        </div>
                                        <FormControl>
                                            <select
                                                value={field.value}

                                                onChange={(value) => field.onChange(value)}
                                                className="border px-3 h-[35px] rounded-md focus-visible:outline-sky-300"
                                            >
                                                <option value="ACTIVE">Đang làm việc</option>
                                                <option value="INACTIVE">Đã nghỉ việc</option>
                                            </select>

                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />

                        </div>


                        <button type="submit" className=" w-full text-white py-2 rounded-xl font-semibold transition-all bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2 mt-10">
                            Lưu thông tin
                        </button>


                    </form>
                </Form>
            </div>

        </div>
    )
}

export default EditForm