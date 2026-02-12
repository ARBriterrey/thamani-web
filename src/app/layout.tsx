import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thamani Healthcare | Precision Cardiovascular Diagnostics",
  description: "Pioneering masked and white coat hypertension detection with India's first normative cardiovascular database.",
  keywords: ["hypertension", "cardiovascular diagnostics", "masked hypertension", "white coat hypertension", "medical device", "Vellore", "India", "MedTech"],
  authors: [{ name: "Thamani Healthcare" }],
  creator: "Thamani Healthcare",
  publisher: "Thamani Healthcare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Thamani Healthcare | Precision Cardiovascular Diagnostics",
    description: "Pioneering masked and white coat hypertension detection with India's first normative cardiovascular database.",
    url: "https://thamanihealthcare.co.in",
    siteName: "Thamani Healthcare",
    images: [
      {
        url: "/assets/thamani-logo.png", // We should ideally have a specific OG image, using logo for now
        width: 800,
        height: 600,
        alt: "Thamani Healthcare Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thamani Healthcare",
    description: "Precision Cardiovascular Diagnostics",
    images: ["/assets/thamani-logo.png"],
  },
  icons: {
    icon: "/assets/thamani-logo.png",
    shortcut: "/assets/thamani-logo.png",
    apple: "/assets/thamani-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Thamani Healthcare",
  "url": "https://thamanihealthcare.co.in",
  "logo": "https://thamanihealthcare.co.in/assets/thamani-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9486969559",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "VMD Building, 2nd Floor, Arni Road, Thuthipattu",
    "addressLocality": "Vellore",
    "postalCode": "632011",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/thamani-healthcare/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-navy-900 text-gray-200 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
