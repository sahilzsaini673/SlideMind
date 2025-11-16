import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/server Component/SessionWrapper";
import { Toaster } from "sonner";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SlideMind - Your Component Builder",
  description: "we help you to develop the component for your site",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper><Toaster position="top-center" richColors />{children}</SessionWrapper>
      </body>
    </html>
  );
}