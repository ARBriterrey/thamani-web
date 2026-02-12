"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const contactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});

export function ContactForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: contactSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log(values);
            alert("Message sent! We'll get back to you shortly.");
            resetForm();
            setSubmitting(false);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <Input
                    label="Name"
                    id="name"
                    {...formik.getFieldProps("name")}
                    error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
                />
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                    error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
                />
            </div>

            <Input
                label="Subject"
                id="subject"
                {...formik.getFieldProps("subject")}
                error={formik.touched.subject && formik.errors.subject ? formik.errors.subject : undefined}
            />

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                    id="message"
                    rows={4}
                    {...formik.getFieldProps("message")}
                    className="flex w-full rounded-md border border-navy-700 bg-navy-800/50 px-3 py-2 text-sm text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red placeholder:text-gray-500 transition-colors"
                />
                {formik.touched.message && formik.errors.message && (
                    <p className="text-sm text-red-500">{formik.errors.message}</p>
                )}
            </div>

            <Button type="submit" className="w-full" isLoading={formik.isSubmitting}>
                Send Message
            </Button>
        </form>
    );
}
