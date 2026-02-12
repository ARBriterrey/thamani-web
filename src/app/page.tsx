"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Activity, Database, ShieldCheck, Cpu, Globe } from "lucide-react";
import NetworkAnimation from "@/components/three/NetworkAnimation";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 z-0" />

        {/* Three.js Network Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-30 z-0">
          <NetworkAnimation />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Redefining <span className="text-brand-red">Blood Pressure Assessment</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            World&apos;s first device capable of detecting masked and white coat hypertension with clinical precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/collaborate">
              <Button size="lg" className="min-w-[200px]">
                Collaborate With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/technology">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Learn About Technology
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <Section className="bg-navy-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">The Hidden Epidemic</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Millions of patients are misdiagnosed every year due to <strong className="text-white">masked hypertension</strong> and <strong className="text-white">white coat hypertension</strong>—conditions that traditional screening methods simply cannot detect.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Current diagnostic standards rely on Western population data, failing to account for the unique cardiovascular profiles of Indian patients. This gap in personalized care puts millions at risk.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-navy-700 bg-navy-800/50 flex items-center justify-center group">
            {/* Placeholder for illustration */}
            <div className="text-center p-8">
              <Activity size={64} className="text-brand-red mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-gray-400 font-medium">Standard Screening vs. Thamani Precision</p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Solution Section */}
      <Section className="bg-navy-800/30">
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden border border-navy-700 bg-navy-800/50 flex items-center justify-center group">
            {/* Placeholder for illustration */}
            <div className="text-center p-8">
              <Database size={64} className="text-brand-red mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-gray-400 font-medium">6-Minute Comprehensive Data Collection</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">The Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Precision Through Innovation</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Thamani Healthcare has developed the only device in the market that can accurately detect both masked and white coat hypertension.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Our proprietary algorithm, perfected over seven years, analyzes a comprehensive dataset collected over six minutes—providing physicians with a clear diagnostic score rather than ambiguous readings.
            </p>
            <ul className="space-y-3 mt-8">
              {[
                "7 years of algorithm development",
                "Indian normative database",
                "Score-based diagnostics",
                "Patented in USA, EU, and India"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <div className="h-2 w-2 rounded-full bg-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Key Differentiators */}
      <Section className="bg-navy-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Thamani?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are redefining cardiovascular diagnostics with technology built specifically for the needs of Indian patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8">
            <ShieldCheck className="h-10 w-10 text-brand-red mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Clinical Precision</h3>
            <p className="text-gray-400 leading-relaxed">
              The only device capable of detecting masked and white coat hypertension, preventing misdiagnosis and ensuring proper treatment.
            </p>
          </Card>

          <Card className="p-8">
            <Database className="h-10 w-10 text-brand-red mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Indian Normative Database</h3>
            <p className="text-gray-400 leading-relaxed">
              Ending reliance on Western standards by building the first comprehensive cardiovascular database for Indian physiology.
            </p>
          </Card>

          <Card className="p-8">
            <Cpu className="h-10 w-10 text-brand-red mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Actionable Intelligence</h3>
            <p className="text-gray-400 leading-relaxed">
              Our score-based system removes ambiguity, giving physicians clear, reproducible data to make confident decisions.
            </p>
          </Card>
        </div>
      </Section>

      {/* Clinical Validation */}
      <Section className="bg-gradient-to-br from-navy-800 to-navy-900 border-y border-navy-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Trusted & Validated</h2>
          <p className="text-gray-400">Backed by leading institutions and rigorous scientific research.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Partner Logos (Placeholders) */}
          <div className="text-xl font-bold text-gray-500 flex items-center gap-2">
            <Globe size={24} /> ICMR Backed
          </div>
          <div className="text-xl font-bold text-gray-500 flex items-center gap-2">
            <Activity size={24} /> CMC Vellore Partner
          </div>
          <div className="text-xl font-bold text-gray-500 flex items-center gap-2">
            <ShieldCheck size={24} /> TRL-3 Certified
          </div>
          <div className="text-xl font-bold text-gray-500 flex items-center gap-2">
            <Database size={24} /> DPIIT Registered
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy-900">
        <div className="relative rounded-2xl overflow-hidden bg-brand-red p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-navy-900/10 pattern-grid-lg opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Helps Detect the Undetected</h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join us in our mission to transform cardiovascular diagnosis. Whether you&apos;re a clinician, researcher, or investor, we want to work with you.
            </p>
            <Link href="/collaborate">
              <Button size="lg" className="bg-white text-brand-red hover:bg-gray-100 shadow-xl border-none">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
