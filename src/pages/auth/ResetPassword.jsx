import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
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
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import url from "@/components/url";

const BASE_URL = url;

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const resetToken = location.state?.token || ""; // optional if your backend uses token
  console.log(email, resetToken);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = form;

  const newPassword = watch("newPassword");

  const onSubmit = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      setError("confirmPassword", {
        type: "validate",
        message: "Passwords do not match.",
      });
      return;
    }

    if (!email) {
      toast.error("Email is missing. Please restart the reset process.");
      navigate("/forgot-password");
      return;
    }

    setLoading(true);
    try {
      const { data, status } = await axios.post(`${BASE_URL}/reset-password`, {
        token: resetToken,
        newPassword: values.newPassword,
      });

      if (status === 200) {
        toast.success(
          data.message || "Password reset successful. Please log in."
        );
        navigate("/login", { replace: true });
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        "Failed to reset password. Try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8">
      <Card className="md:w-1/3 sm:w-1/2 p-5 bg-white/60 mx-5 shadow-xl backdrop-blur-md">
        <h4 className="text-xl font-bold text-center mt-2 mb-4">
          Reset Password
        </h4>
        <p className="text-sm text-center mb-4 text-muted-foreground">
          Set a new password for your account.
        </p>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="*:my-2.5">
            <FormField
              control={form.control}
              name="newPassword"
              rules={{
                required: "New password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter new password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              rules={{
                required: "Confirm password is required.",
                validate: (value) =>
                  value === newPassword || "Passwords do not match.",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Re-enter new password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end mt-4">
              <Button type="submit" disabled={loading}>
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default ResetPassword;
