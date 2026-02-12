"use client";

// import { Section } from "@/components/ui/Section"; // Removed unused import
import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { motion } from "framer-motion";
import { Handshake, GraduationCap, Building2, TrendingUp } from "lucide-react";

export default function CollaboratePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-navy-900 border-b border-navy-800">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-6"
                    >
                        Join Us in Transforming <br />
                        <span className="text-brand-red">Cardiovascular Care</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        We are actively seeking partnerships with industrial, academic, and clinical organizations that share our vision.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Partnership Opportunities */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-8">Partnership Opportunities</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="bg-navy-800 p-3 rounded-lg h-fit">
                                        <Handshake className="text-brand-red h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Clinical Partnerships</h3>
                                        <p className="text-gray-400 text-sm mb-2">Hospitals and clinics for clinical trials and early adoption.</p>
                                        <ul className="list-disc list-inside text-sm text-gray-500 marker:text-brand-red">
                                            <li>Access to cutting-edge technology</li>
                                            <li>Training and implementation support</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-navy-800 p-3 rounded-lg h-fit">
                                        <GraduationCap className="text-brand-red h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Academic Partnerships</h3>
                                        <p className="text-gray-400 text-sm mb-2">Universities and research institutions for joint research.</p>
                                        <ul className="list-disc list-inside text-sm text-gray-500 marker:text-brand-red">
                                            <li>Joint research opportunities</li>
                                            <li>Student internship programs</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-navy-800 p-3 rounded-lg h-fit">
                                        <Building2 className="text-brand-red h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Industrial Partnerships</h3>
                                        <p className="text-gray-400 text-sm mb-2">Tech companies and device manufacturers.</p>
                                        <ul className="list-disc list-inside text-sm text-gray-500 marker:text-brand-red">
                                            <li>API integration opportunities</li>
                                            <li>Joint go-to-market strategies</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-navy-800 p-3 rounded-lg h-fit">
                                        <TrendingUp className="text-brand-red h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Investment Opportunities</h3>
                                        <p className="text-gray-400 text-sm">
                                            We are currently in our seeding round and welcoming strategic investors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="bg-navy-800/50 border border-navy-700 p-1 rounded-2xl">
                            <div className="bg-navy-900 rounded-xl p-6 md:p-8">
                                <h3 className="text-2xl font-bold font-heading mb-6">Get in Touch</h3>
                                <PartnershipForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
