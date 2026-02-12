"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
// Removed unused Section, Clock

export default function ContactPage() {
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
                        Let&apos;s <span className="text-brand-red">Connect</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Whether you&apos;re interested in collaboration, careers, or learning more about our technology, we&apos;d love to hear from you.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="bg-navy-800 p-3 rounded-lg h-fit">
                                        <MapPin className="text-brand-red h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                                        <p className="text-gray-400">Thamani Healthcare</p>
                                        <p className="text-gray-400">VMD Building, 2nd Floor, Arni Road</p>
                                        <p className="text-gray-400">Thuthipattu, Vellore 632011</p>
                                        <p className="text-gray-400">Tamil Nadu, India</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-navy-800 p-3 rounded-lg h-fit">
                                        <Phone className="text-brand-red h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                                        <p className="text-gray-400 mb-1">Mon-Fri from 9am to 6pm IST</p>
                                        <a href="tel:+919486969559" className="text-white hover:text-brand-red transition-colors font-medium">
                                            +91 9486969559
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-navy-800 p-3 rounded-lg h-fit">
                                        <Mail className="text-brand-red h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                        <p className="text-gray-400 mb-1">For careers and general inquiries</p>
                                        <a href="mailto:recruitment@thamanihc.co.in" className="text-white hover:text-brand-red transition-colors font-medium">
                                            recruitment@thamanihc.co.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-navy-700 bg-navy-800 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750939529324!2d79.1329875!3d12.9237257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbede80351784979e!2sArni%20Rd%2C%20Thuthipattu%2C%20Tamil%20Nadu%20632011!5e0!3m2!1sen!2sin!4v1707765123456!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 pointer-events-none border-4 border-navy-800/50 rounded-2xl" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="bg-navy-800/50 border border-navy-700 p-1 rounded-2xl sticky top-24">
                            <div className="bg-navy-900 rounded-xl p-6 md:p-8">
                                <h3 className="text-2xl font-bold font-heading mb-6">Send a Message</h3>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
