"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Database, Activity, Cpu, Factory } from "lucide-react";
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

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { label: "Blood Pressure", val: "Systolic & Diastolic" },
                        { label: "Pulse Rate", val: "Continuous Monitoring" },
                        { label: "ECG", val: "Lead II Rhythm" },
                        { label: "SPO2", val: "Oxygen Saturation" },
                        { label: "MAP", val: "Mean Arterial Pressure" },
                        { label: "Pulse Pressure", val: "Arterial Stiffness Indicator" }
                    ].map((item, index) => (
                        <Card key={index} className="p-6 flex flex-col items-center justify-center text-center hover:bg-navy-800">
                            <span className="text-2xl font-bold text-brand-red mb-1">{item.label}</span>
                            <span className="text-gray-400">{item.val}</span>
                        </Card>
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
