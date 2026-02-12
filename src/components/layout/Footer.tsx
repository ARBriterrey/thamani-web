import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-900 border-t border-navy-800 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-navy-700">
                                <Image
                                    src="/logo.jpeg"
                                    alt="Thamani Healthcare Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold font-heading text-white">
                                <span className="text-brand-red">Thamani</span> Healthcare
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pioneering precision cardiovascular diagnostics. Detecting masked and white coat hypertension to save lives.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://linkedin.com/company/thamani-healthcare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-brand-red transition-colors"
                            >
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/technology" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                                    Our Technology
                                </Link>
                            </li>
                            <li>
                                <Link href="/research" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                                    Research & Trials
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                                    VMD Building, 2nd Floor, Arni Road, Thuthipattu, Vellore 632011, Tamil Nadu
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-red shrink-0" />
                                <a href="tel:+919486969559" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    +91 9486969559
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-red shrink-0" />
                                <a href="mailto:recruitment@thamanihc.co.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    recruitment@thamanihc.co.in
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal/Certifications */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Certifications</h3>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                            <span className="px-2 py-1 bg-navy-800 rounded border border-navy-700">ICMR Backed</span>
                            <span className="px-2 py-1 bg-navy-800 rounded border border-navy-700">TRL-3 Certified</span>
                            <span className="px-2 py-1 bg-navy-800 rounded border border-navy-700">DPIIT Govt of India</span>
                            <span className="px-2 py-1 bg-navy-800 rounded border border-navy-700">CMC Vellore Partner</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {currentYear} Thamani Healthcare. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
