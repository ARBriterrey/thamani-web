"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
// import { motion } from "framer-motion"; // Removed unused import

const partnershipSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    organization: Yup.string().required("Organization is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    partnershipType: Yup.string().required("Please select a partnership type"),
    message: Yup.string().required("Message is required"),
});

export function PartnershipForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            organization: "",
            email: "",
            phone: "",
            partnershipType: "",
            message: "",
        },
        validationSchema: partnershipSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log(values);
            alert("Thank you for your interest! We will get back to you soon.");
            resetForm();
            setSubmitting(false);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-6 bg-navy-800 p-8 rounded-2xl border border-navy-700">
            <div className="grid md:grid-cols-2 gap-6">
                <Input
                    label="Name"
                    id="name"
                    {...formik.getFieldProps("name")}
                    error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
                />
                <Input
                    label="Organization"
                    id="organization"
                    {...formik.getFieldProps("organization")}
                    error={formik.touched.organization && formik.errors.organization ? formik.errors.organization : undefined}
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                    error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
                />
                <Input
                    label="Phone"
                    id="phone"
                    {...formik.getFieldProps("phone")}
                    error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Partnership Type</label>
                <select
                    id="partnershipType"
                    {...formik.getFieldProps("partnershipType")}
                    className="flex h-11 w-full rounded-md border border-navy-700 bg-navy-800/50 px-3 py-2 text-sm text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                    <option value="" disabled>Select a type</option>
                    <option value="Choice 1">Clinical Partnership</option>
                    <option value="Choice 2">Academic Partnership</option>
                    <option value="Choice 3">Industrial Partnership</option>
                    <option value="Choice 4">Investment Opportunity</option>
                    <option value="Choice 5">Other</option>
                </select>
                {formik.touched.partnershipType && formik.errors.partnershipType && (
                    <p className="text-sm text-red-500">{formik.errors.partnershipType}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                    id="message"
                    rows={4}
                    {...formik.getFieldProps("message")}
                    className="flex w-full rounded-md border border-navy-700 bg-navy-800/50 px-3 py-2 text-sm text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red placeholder:text-gray-500"
                />
                {formik.touched.message && formik.errors.message && (
                    <p className="text-sm text-red-500">{formik.errors.message}</p>
                )}
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={formik.isSubmitting}>
                Submit Inquiry
            </Button>
        </form>
    );
}
