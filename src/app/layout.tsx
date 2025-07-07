import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Empowerment - Insurance Agent Onboarding",
  description: "Get set up to receive high-quality inbound insurance calls. Complete onboarding for Final Expense and Life Insurance lead generation with professional setup and training.",
  keywords: "insurance agent, final expense, life insurance, inbound calls, agent onboarding, insurance leads",
  authors: [{ name: "Agent EMP - Americhoice" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Agent Empowerment - Insurance Agent Onboarding",
    description: "Get set up to receive high-quality inbound insurance calls. Complete onboarding for Final Expense and Life Insurance lead generation.",
    type: "website",
    siteName: "Agent Empowerment",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Empowerment - Insurance Agent Onboarding",
    description: "Get set up to receive high-quality inbound insurance calls. Complete onboarding for Final Expense and Life Insurance lead generation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
