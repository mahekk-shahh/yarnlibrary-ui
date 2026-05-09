import React from "react";
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
import { toast } from "@/components/ui/sonner";
import url from "@/components/url";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, setError } = form;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${url}/auth/forgot-password/`, data);
      toast.success("Email sent!", {
        position: "top-right",
        description: response.data.message || "OTP sent to your email",
      });
      navigate("/auth/login");
    } catch (error) {
      toast.error("Something went wrong", { position: "top-right" });
    }
  };

  return (
    <div className="login-container h-screen flex items-center justify-center py-8">
      <Card className="md:w-1/3 sm:w-1/2 p-5 bg-white/60 sm:m-auto mx-5 shadow-xl backdrop-blur-md">
        <h4 className="text-xl font-bold m-auto mt-3">Forgot Password</h4>
        <p className="text-sm text-center mb-4">
          Enter your email address to receive a password reset link.
        </p>
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
                      placeholder="Enter your email"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending Link..." : "Send Link"}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
