"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Users, Heart, Target, Award } from "lucide-react";
// import Image from "next/image"; // Removed unused import

export default function AboutPage() {
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
                        Pioneering Precision in <br />
                        <span className="text-brand-red">Indian Healthcare</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Thamani Healthcare is a MedTech innovator dedicated to solving the crisis of misdiagnosed hypertension through data-driven technology tailored for the Indian population.
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <Section className="bg-navy-900">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="h-[400px] w-full bg-navy-800 rounded-2xl border border-navy-700 flex items-center justify-center">
                            <p className="text-gray-500">Video / Image Placeholder</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold font-heading mb-6">Our Story</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Founded in 2017, Thamani Healthcare began with a critical observation: standard blood pressure monitoring was failing millions of Indians. The existing diagnostic tools, calibrated on Western populations, were missing subtle but dangerous patterns like masked hypertension.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            We spent over seven years in R&amp;D, collaborating with top medical institutions, to develop a proprietary algorithm and a unique 6-minute protocol.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Today, with backing from ICMR and partnerships with CMC Vellore, we are on the verge of commercializing a device that will set a new standard in cardiovascular care.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Leadership */}
            <Section className="bg-navy-800/30">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">Board of Directors</h2>
                    <p className="text-gray-400">Guided by leaders in medicine, technology, and business.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {[
                        { name: "Ms. Bowya Baskaran", role: "Director", desc: "Visionary leadership in healthcare innovation." },
                        { name: "Mr. Manokaran Kittuswamy", role: "Director", desc: "Driving technological advancements and research." },
                        { name: "Mr. Janardhan Pillai", role: "Director", desc: "Expertise in strategic operations and growth." }
                    ].map((leader, index) => (
                        <Card key={index} className="p-6 text-center">
                            <div className="w-24 h-24 bg-navy-700 rounded-full mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-white mb-1">{leader.name}</h3>
                            <p className="text-brand-red text-sm mb-3">{leader.role}</p>
                            <p className="text-gray-400 text-sm">{leader.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Our Values */}
            <Section className="bg-navy-900">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">Our Values</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Heart, title: "Patient-Centricity", desc: "Every innovation starts with the patient's well-being in mind." },
                        { icon: Target, title: "Clinical Precision", desc: "We never compromise on accuracy. Data saves lives." },
                        { icon: Users, title: "Inclusivity", desc: "Building healthcare solutions that work for everyone, everywhere." }
                    ].map((val, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="bg-navy-800 p-4 rounded-full mb-6 text-brand-red">
                                <val.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                            <p className="text-gray-400 max-w-xs">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Certifications */}
            <Section className="bg-navy-800/30 border-t border-navy-800">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold font-heading mb-8 opacity-80">Our Certifications &amp; Recognitions</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60">
                        {["TRL-3 Validated", "DPIIT Registered", "ICMR Supported", "ISO Certified (Pending)"].map((cert, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-300 font-medium">
                                <Award className="text-brand-red" size={20} />
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
