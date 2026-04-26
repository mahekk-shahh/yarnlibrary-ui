import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import url from "@/components/url";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const BASE_URL = url; // adjust if needed

const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const emailFromState = location.state?.email || "";

  const [email, setEmail] = useState(emailFromState);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const {
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (values) => {
    const otp = (values.otp || "").trim();
    if (!/^\d{6}$/.test(otp)) {
      setError("otp", { type: "validate", message: "Enter a valid OTP." });
      return;
    }
    if (!email) {
      toast.error("Email is missing. Please re-enter your email.");
      return;
    }

    setLoading(true);
    try {
      const payload = { email, otp }; // adjust according to your backend
      const { data, status } = await axios.post(
        `${BASE_URL}/verify-otp`,
        payload
      );
      if (status === 200) {
        toast.success(
          data.message || "OTP verified. Please set your new password."
        );

        navigate("/reset-password", {
          state: { email, token: data.token },
          replace: true,
        });
      } else {
        // fallback
        toast.error("Could not verify OTP. Try again.");
      }
    } catch (err) {
      // try to surface backend validation errors
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "OTP verification failed";
      if (err?.response?.status === 400 || err?.response?.status === 401) {
        setError("otp", { type: "validate", message: msg });
      } else {
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Email is missing. Go back and enter your email.");
      return;
    }
    setResendLoading(true);
    try {
      const { data, status } = await axios.post(`${BASE_URL}/forgot-password`, {
        email,
      });
      if (status === 200) {
        toast.success(data.message || "OTP resent to your email.");
        reset({ otp: "" });
      } else {
        toast.error("Could not resend OTP. Try again later.");
      }
    } catch (err) {
      const msg = err?.response?.data?.message || "Failed to resend OTP";
      toast.error(msg);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="otp-page flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8">
      <Card className="md:w-1/3 sm:w-1/2 p-5 bg-white/60 mx-5 shadow-xl backdrop-blur-md">
        <h4 className="text-xl font-bold text-center mt-2">Verify OTP</h4>

        <p className="text-sm text-center my-1.5">
          We’ve sent an OTP to your email.
        </p>

        <div className="text-xs text-center text-muted-foreground">
          If you didn't receive it, check your spam folder or resend.
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="*:my-2.5">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field} autoFocus>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage>
                    {errors.otp ? errors.otp.message : null}
                  </FormMessage>
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between gap-2 mt-3">
              <Button type="submit" disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-right">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendLoading}
                  className={`text-sm underline underline-offset-2 px-3 py-1 rounded opacity-60 cursor-not-allowed`}
                >
                  Resend OTP
                </button>
              </div>
            </div>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm">
          <p>
            Didn’t receive the email? Recheck the email address above and try
            again.
          </p>
          <p className="mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </Button>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default OTPVerification;
