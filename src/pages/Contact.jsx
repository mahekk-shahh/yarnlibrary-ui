import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import url from "@/components/url";

const contactSchema = z.object({
  name: z.string().nonempty("Name is required").max(50, "Maximum 50 characters allowed"),
  email: z.email("Invalid email"),
  mobile_number: z
    .string({ error: "Invalid mobile number" })
    .min(10, "Mobile Number should be 10 digits long")
    .or(z.literal("")),
  message: z.string().nonempty("Message is required").max(500, "Maximum 500 characters allowed"),
});

const Contact = () => {
  const form = useForm({
    mode: "all",
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile_number: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${url}/api/contact/`, data);
      if (res.status === 201) {
        form.reset();
        toast.success("Thank you for contacting Yarn Library! Our team will reach out to you via email within 3-4 working days.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data.message ?? "Something went wrong!");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-4">
        <div className="flex-2 flex flex-col gap-5">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-2xl font-semibold text-gray-800">
              Get in Touch
            </h1>
            <p className="">
              Reach out with any questions or ideas. We'd love to hear from you!
            </p>
          </div>
          <Card className="shadow-md overflow-hidden py-0">
            <iframe
              title="Location"
              width="100%"
              height="230"
              className="border-none"
              src="https://maps.google.com/maps?hl=en&q=MITTAL%20INDUSTRIAL%20ESTATE,%20ANDHERI%20EAST,%20MUMBAI%20400059&z=14&output=embed"
              loading="lazy"
            ></iframe>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="*:items-center text-sm">
              <div className="flex flex-wrap gap-2 items-start col-span-3">
                <div>
                  <MapPin size={18} />
                </div>
                <p>
                  Mittal Industrial Estate, Marol, Andheri East, Mumbai 400059
                </p>
              </div>

              <div className="flex flex-wrap items-center *:items-center *:flex-wrap gap-6 mt-3">
                <a href="tel:9892539790" className="flex gap-2">
                  <Phone size={16} />
                  +91 98925 39790
                </a>

                <div className="flex gap-2">
                  <Mail size={16} />
                  sanjayshah040@gmail.com
                </div>

                <a
                  href="https://in.linkedin.com/in/sanjay-shah-a64081226"
                  className="flex gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={16}
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" />
                  </svg>
                  Sanjay Shah
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <Card className="shadow-md h-full">
            <CardHeader>
              <CardTitle className="text-center">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="space-y-4">
                    {[
                      {
                        name: "name",
                        type: "text",
                        label: "Name",
                        is_required: true,
                      },
                      {
                        name: "email",
                        type: "email",
                        label: "Email",
                        is_required: true,
                      },
                      {
                        name: "mobile_number",
                        type: "text",
                        label: "Mobile Number",
                        is_required: false,
                      },
                    ].map((item) => (
                      <div key={item.name} className="space-y-2">
                        <FormField
                          control={form.control}
                          name={item.name}
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>
                                  {item.label}
                                  {item.is_required && " *"}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type={item.type}
                                    disabled={form.formState.isSubmitting}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                      </div>
                    ))}

                    <div className="space-y-1">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Type your message..."
                                  rows={2}
                                  disabled={form.formState.isSubmitting}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>

                    <Button
                      className="w-full"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Sending..."
                        : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
