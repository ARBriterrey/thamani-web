"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Microscope, Users, Award, TrendingUp, Baby, Activity, Heart, Smartphone, Brain } from "lucide-react";

export default function ResearchPage() {
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
                        Evidence-Driven <span className="text-brand-red">Innovation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Thamani Healthcare is committed to the highest standards of clinical research. We are currently in the clinical trial phase, working with leading institutions to validate our technology.
                    </motion.p>
                </div>
            </section>

            {/* Partnerships */}
            <Section className="bg-navy-900">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* CMC Vellore */}
                    <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Users className="text-brand-red h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-bold font-heading text-white">CMC Vellore Partnership</h2>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            We have established an academic partnership with Christian Medical College (CMC) Vellore, one of India&apos;s premier medical research institutions.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Access to diverse patient populations",
                                "Expert clinical oversight and protocol design",
                                "Peer review and scientific validation",
                                "Ethical research framework"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ICMR Backing */}
                    <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Award className="text-brand-red h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-bold font-heading text-white">ICMR Backing</h2>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            The Indian Council of Medical Research (ICMR) has backed our work, recognizing the potential impact of accurate masked and white coat hypertension detection on public health.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Validation of scientific approach",
                                "Support for rigorous research standards",
                                "Focus on public health outcomes",
                                "National-level recognition"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Research Focus Areas */}
            <Section className="bg-navy-800/30">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">Research Focus Areas</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: Microscope,
                            title: "Diagnostic Accuracy",
                            desc: "Validating sensitivity and specificity compared to gold-standard methods."
                        },
                        {
                            icon: Users,
                            title: "Population Models",
                            desc: "Building region-specific diagnostic thresholds for Indian demographics."
                        },
                        {
                            icon: Activity,
                            title: "Workflow Integration",
                            desc: "Ensuring seamless adoption in hospital and clinic environments."
                        },
                        {
                            icon: TrendingUp,
                            title: "Long-term Outcomes",
                            desc: "Tracking cardiovascular event reduction through improved diagnostics."
                        }
                    ].map((area, index) => (
                        <Card key={index} className="p-6">
                            <area.icon className="text-brand-red mb-4 h-8 w-8" />
                            <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                            <p className="text-gray-400 text-sm">{area.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Future Directions */}
            <Section className="bg-navy-900 border-t border-navy-800">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">Future Research Directions</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { icon: Baby, title: "Pediatric Screening" },
                        { icon: Heart, title: "Pregnancy Hypertension" },
                        { icon: Smartphone, title: "Rural Healthcare Models" },
                        { icon: Brain, title: "AI Predictive Analytics" }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-navy-800 rounded-xl border border-navy-700">
                            <item.icon className="text-brand-red mb-3 h-8 w-8" />
                            <span className="font-medium text-white text-center">{item.title}</span>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
