"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Research", href: "/research" },
    { name: "Collaborate", href: "/collaborate" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-navy-900/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-brand-red/20 group-hover:border-brand-red transition-colors">
                        <Image
                            src="/logo.jpeg"
                            alt="Thamani Healthcare Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-bold font-heading leading-tight tracking-tight text-white">
                            <span className="text-brand-red">Thamani</span> Healthcare
                        </span>
                        <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider hidden sm:block">
                            Precision Diagnostics
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-brand-red",
                                pathname === link.href ? "text-brand-red" : "text-gray-300"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button size="sm" variant="primary">Get in Touch</Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-navy-900 border-t border-navy-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-brand-red",
                                        pathname === link.href ? "text-brand-red" : "text-gray-300"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" className="mt-4">
                                <Button className="w-full">Get in Touch</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
