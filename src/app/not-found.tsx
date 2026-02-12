'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                <div className="bg-navy-800/50 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-navy-700">
                    <FileQuestion className="w-12 h-12 text-brand-red" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Page Not Found
                </h1>

                <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button variant="primary" size="lg">
                            Return Home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg">
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
