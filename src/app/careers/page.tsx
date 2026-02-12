"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Heart, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
// Removed unused Cpu, CheckCircle

export default function CareersPage() {
    const jobs = [
        {
            title: "Software Engineer",
            type: "Full-time",
            location: "Vellore",
            skills: ["Python/C++", "IoT/Embedded", "Cloud (AWS/Azure)"],
            desc: "Build robust, scalable systems for data collection, analysis, and diagnostic reporting."
        },
        {
            title: "Hardware Engineer",
            type: "Full-time",
            location: "Vellore",
            skills: ["Electronics Design", "PCB Layout", "Signal Processing"],
            desc: "Design and optimize the physical components of our diagnostic device, from sensors to manufacturing."
        },
        {
            title: "Project Manager",
            type: "Full-time",
            location: "Vellore",
            skills: ["Clinical Trials", "Regulatory Compliance", "Agile"],
            desc: "Coordinate clinical trials and product development, bridging engineering and clinical teams."
        }
    ];

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
                        Build the Future of <br />
                        <span className="text-brand-red">Healthcare with Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        At Thamani Healthcare, you&apos;ll work on technology that directly impacts millions of lives. Join a multidisciplinary team united by a mission to revolutionize cardiovascular diagnostics.
                    </motion.p>
                </div>
            </section>

            {/* Why Join Us */}
            <Section className="bg-navy-900">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold font-heading mb-4">Why Join Thamani?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Heart, title: "Meaningful Impact", desc: "Your work prevents heart attacks and strokes, saving lives." },
                        { icon: Zap, title: "Cutting-Edge Tech", desc: "Work with ML, medical devices, and real-world data science." },
                        { icon: Briefcase, title: "Growth Opportunity", desc: "Early-stage startup with massive market potential." },
                    ].map((item, index) => (
                        <Card key={index} className="p-8 text-center">
                            <div className="mx-auto bg-navy-800 p-4 rounded-full w-fit mb-6">
                                <item.icon className="text-brand-red h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Open Positions */}
            <Section className="bg-navy-800/30">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">Open Positions</h2>
                    <p className="text-gray-400">Join our team in Vellore, a city known for medical excellence.</p>
                </div>

                <div className="grid gap-6 max-w-4xl mx-auto">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-navy-900 border border-navy-700 rounded-xl p-6 md:p-8 hover:border-brand-red/50 transition-colors group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-white group-hover:text-brand-red transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><Briefcase size={16} /> {job.type}</span>
                                        <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                                    </div>
                                </div>
                                <Link href={`mailto:recruitment@thamanihc.co.in?subject=Application for ${job.title}`}>
                                    <Button variant="outline" className="hidden md:flex">
                                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>

                            <p className="text-gray-300 mb-6">{job.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {job.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-navy-800 rounded-full text-xs text-gray-300 border border-navy-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <Link href={`mailto:recruitment@thamanihc.co.in?subject=Application for ${job.title}`} className="md:hidden">
                                <Button variant="outline" className="w-full justify-between">
                                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
