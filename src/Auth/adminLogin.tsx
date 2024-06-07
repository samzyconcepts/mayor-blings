import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { adminLoginUrl } from "@/util/api";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import axios from "axios";

// component
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    password: z
        .string()
        .min(5, { message: "Password cannot be less than 5 character" })
        .max(16, { message: "Password cannot be more than 16 character" }),
});

type loginProp = z.infer<typeof loginSchema>;

const AdminLogin = () => {
    const navigate = useNavigate();
    const signIn = useSignIn();
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<loginProp>({ resolver: zodResolver(loginSchema) });

    const onSubmit: SubmitHandler<loginProp> = async (data) => {
        const { email, password } = data;
        try {
            const response = await axios.post(adminLoginUrl(), { email, password });
            if (response.data.access) {
                signIn({
                    auth: {
                        token: response.data.access,
                        type: "Bearer",
                    },
                    userState: { email },
                });

                navigate("/admin");
            }
        } catch (error) {
            toast({
                title: "Login Failed",
                description: "Email or password is incorrect",
                variant: "destructive",
            });
        }
    };

    return (
        <section className="flex justify-center items-center h-svh bg-grey-50">
            <div className="bg-white w-1/3 rounded-lg  p-8">
                <h1 className="text-lg font-semibold">Welcome back, Admin</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email" className="block my-4">
                        Email
                        <Input
                            {...register("email")}
                            inputType="email"
                            id="email"
                            variant="secondary"
                            placeholder="Enter you email"
                            className="block w-full mt-2"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>
                        )}
                    </label>
                    <label htmlFor="password" className="block my-4">
                        Password
                        <Input
                            {...register("password")}
                            inputType="password"
                            id="password"
                            variant="secondary"
                            placeholder="Enter you password"
                            className="block w-full mt-2"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-2">{errors.password.message}</p>
                        )}
                    </label>
                    <Button type="submit" disabled={isSubmitting} className="block mt-2 w-full">
                        Login
                    </Button>
                </form>
                <Toaster />
            </div>
        </section>
    );
};
export default AdminLogin;
