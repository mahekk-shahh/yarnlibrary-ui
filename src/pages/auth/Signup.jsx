import axios from "axios";
import { replace, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import url from "@/components/url";
import toast from "react-hot-toast";

const signupSchema = z.object({
  username: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  phone_number: z.string().length(10, "Phone number should be 10 digits long"),
  company: z.string().min(1, "Company Name is required"),
});

const Signup = () => {
  const navigate = useNavigate();

  const form = useForm({
    mode: "all",
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      company: "",
      phone_number: "",
    },
  });

  const { handleSubmit, formState: { isSubmitting } } = form;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${url}/api/users/`, data);
      if (response.status === 201) {
        navigate("/auth/login", { replace: true });
        console.log(response.data);
      }
    } catch (error) {
      if(error.response.status === 400) {
        const errors = error.response.data;
        Object.entries(errors).forEach(([key, value])=>{
          form.setError(key, {
            type: "validate",
            message: value,
          });
        })
        return
      }
      toast.error("Something went wrong")
    }
  };

  return (
    <>
      <div className="signup-container py-8 flex items-center justify-center">
        <Card className="md:w-1/3 sm:w-1/2 p-3 bg-white/60 sm:m-auto mx-5">
          <h4 className="text-xl font-bold m-auto mt-3">Create an Account</h4>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="*:my-2.5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Email"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter Contact Number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter Company Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button disabled={isSubmitting}>
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Signup;
