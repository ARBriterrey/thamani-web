"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Database, Activity, Cpu, Factory, ShieldCheck } from "lucide-react";
// import { Clock } from "lucide-react"; // Removed unused import

export default function TechnologyPage() {
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
                        The Science of <br />
                        <span className="text-brand-red">Diagnostic Precision</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Our technology goes beyond standard blood pressure readings. We capture the complete cardiovascular narrative through comprehensive data analysis.
                    </motion.p>
                </div>
            </section>

            {/* The 6-Minute Protocol */}
            <Section className="bg-navy-900">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">The 6-Minute Protocol</h2>
                    <p className="text-gray-400">During a brief, non-invasive session, our device captures multiple cardiovascular parameters simultaneously.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-red/50 to-transparent md:-translate-x-1/2" />

                    {[
                        {
                            time: "Minute 0-1",
                            title: "Calibration & Baseline",
                            desc: "System performs auto-calibration while patient settles. Baseline environmental data is recorded.",
                            icon: Activity
                        },
                        {
                            time: "Minute 1-3",
                            title: "Hemodynamic Profiling",
                            desc: "Continuous blood pressure wave analysis and arterial stiffness assessment begins.",
                            icon: Database
                        },
                        {
                            time: "Minute 3-5",
                            title: "Autonomic Stress Test",
                            desc: "Heart rate variability (HRV) and vascular response to controlled breathing are measured.",
                            icon: Cpu
                        },
                        {
                            time: "Minute 5-6",
                            title: "Data Synthesis",
                            desc: "All physiological parameters are synthesized by the AI algorithm to generate the risk score.",
                            icon: ShieldCheck
                        }
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Marker */}
                            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-brand-red rounded-full shadow-[0_0_15px_rgba(196,30,58,0.8)] z-10 md:-translate-x-1/2 border-2 border-navy-900" />

                            {/* Content Side */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                <Card className="p-6 hover:border-brand-red/30 transition-colors group">
                                    <div className={`inline-flex p-3 rounded-lg bg-navy-800 text-brand-red mb-4 group-hover:scale-110 transition-transform ${index % 2 === 0 ? 'md:ml-auto' : ''
                                        }`}>
                                        <step.icon size={24} />
                                    </div>
                                    <div className="text-brand-red font-mono text-sm mb-2">{step.time}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </Card>
                            </div>

                            {/* Empty Side for Desktop Layout */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Proprietary Algorithm */}
            <Section className="bg-navy-800/30">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4">
                            <Cpu size={16} />
                            Patent Pending
                        </div>
                        <h2 className="text-3xl font-bold font-heading mb-6">Proprietary Algorithm</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Our algorithm is the brain of the Thamani device. Developed over seven years of rigorous R&amp;D, it processes the raw data collected during the 6-minute protocol to identify patterns invisible to the human eye.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            It doesn&apos;t just give numbers; it provides a <strong className="text-white">risk score</strong> that correlates with clinical outcomes, helping doctors distinguish between true hypertension, white coat effect, and masked hypertension with high confidence.
                        </p>
                    </div>
                    <div className="relative h-[300px] w-full rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 p-8 flex flex-col justify-center items-center text-center">
                        <div className="w-full max-w-xs bg-navy-900 rounded-xl p-4 border border-navy-700 shadow-2xl mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-gray-500 uppercase">Risk Level</span>
                                <span className="text-xs text-brand-red font-bold">HIGH</span>
                            </div>
                            <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-brand-red rounded-full" />
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 italic">Simulated Output: The algorithm calculates a composite risk score based on multi-parameter correlation.</p>
                    </div>
                </div>
            </Section>

            {/* Indian Normative Database */}
            <Section className="bg-navy-900">
                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4">
                            <Database size={16} />
                            First of its Kind
                        </div>
                        <h2 className="text-3xl font-bold font-heading mb-6">Indian Normative Database</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Medical devices are typically calibrated on Western populations. Thamani is changing that. We are building the first comprehensive cardiovascular normative database for the Indian population.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            This ensures our diagnostic thresholds are relevant and accurate for the patients we serve, reducing the error rate inherent in importing foreign medical standards.
                        </p>
                    </div>
                    <div className="h-[300px] w-full rounded-2xl bg-navy-800 border border-navy-700 flex items-center justify-center">
                        <div className="text-center">
                            <Activity className="text-brand-red mb-4 mx-auto" size={48} />
                            <p className="text-gray-500">Data Visualization Placeholder</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Manufacturing */}
            <Section className="bg-navy-800/30">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-6">
                        <Factory size={16} />
                        Made in India
                    </div>
                    <h2 className="text-3xl font-bold font-heading mb-6">Manufacturing Excellence</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We are committed to the &quot;Make in India&quot; initiative. Our devices are designed and manufactured locally, ensuring high quality control, cost-effectiveness, and supply chain resilience.
                    </p>
                </div>
            </Section>
        </div>
    );
}
