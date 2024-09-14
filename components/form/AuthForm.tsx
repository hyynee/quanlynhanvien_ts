"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import toast from "react-hot-toast"


const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: 'Password can not be blank'
    })
})



const AuthForm = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        signIn('credentials', {
            ...values,
            redirect: false,
        })
            .then((callback) => {
                if (callback?.ok) {
                    toast.success('Đăng nhập thành công')
                    router.push('/admins')
                }
                if (callback?.error) {
                    toast.error('Đăng nhập thất bại')
                }
            })

    }






    return (
        <div className="w-full md:w-[35rem] border p-10 rounded-md shadow-md">
            <h2 className="text-center font-bold text-3xl ">
                Đăng nhập
            </h2>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter your email
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter your password
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant="primary" type="submit">Submit</Button>
                    </form>
                </Form>


            </div>
        </div>
    )

}

export default AuthForm
