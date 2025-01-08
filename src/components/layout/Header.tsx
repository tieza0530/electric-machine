import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "../../hooks/use-toast"
import { Button } from "../ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "../ui/form"
import { Input } from "../ui/input"
import { IoSearch } from "react-icons/io5";


export const Header = () => {
    const FormSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })
    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        console.log(data)
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <div className='w-screen bg-red-600 py-4 flex justify-around'>
            <div>
                <img src="/image/Logo_NK.svg" alt="logo" />
            </div>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                    <div className='relative'>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl >
                                        <Input className='w-80 bg-white' placeholder="Tìm kiếm sản phẩm..." {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                      <Button className='absolute top-0 right-0 bg-inherit text-black border-none' type="submit"><IoSearch /></Button>
                      </div>
                    </form>
                </Form>
            </div>
            <div>
                ádas
            </div>
        </div>
    );
};

