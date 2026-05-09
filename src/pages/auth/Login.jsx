import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import url from "@/components/url";
import { Loader2 } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "User",
    },
  });

  const { handleSubmit, setError, formState: { isSubmitting } } = form;

  const onSubmit = async (data) => {
    try {
      const { data: response, status } = await axios.post(
        `${url}/auth/login/`,
        data,
        { withCredentials: true },
      );
      if (status === 200) {
        localStorage.setItem("token", response.access);
        queryClient.invalidateQueries({ queryKey: ["auth"] });
        navigate("/", {replace: true});
      }
    } catch (error) {
      console.log(error)
      if (error.status === 400) {
        setError("password", {
          type: "validate",
          message: error.response.data.non_field_errors,
        });
      }
    }
  };

  return (
    <>
      <div className="login-container h-screen flex items-center justify-center py-8">
        <Card className="md:w-1/3 sm:w-1/2 p-3 bg-white/60 sm:m-auto mx-5">
          <h4 className="text-xl font-bold m-auto mt-3">Login</h4>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="*:my-2.5">
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex justify-between items-center w-full">
                        <p>Password</p>
                        <p
                          className="font-normal text-xs"
                          onClick={() => navigate("/auth/forgot-password")}
                        >
                          Forgot Password?
                        </p>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      Please wait... <Loader2 className="animate-spin" />
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <p className="text-sm m-auto">
            Don't have an account?{" "}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/auth/signup")}
            >
              Signup
            </Button>
          </p>
        </Card>
      </div>
    </>
  );
};

export default Login;
