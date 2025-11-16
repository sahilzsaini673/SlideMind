import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import Header from "@/components/custom/Header2";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Workspace - Start Building Your Component",
  description: "Build your react component now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <SidebarProvider> */}
          <main>
            {/* <SidebarTrigger /> */}
            {children}
          </main>
        {/* </SidebarProvider> */}
      </body>
    </html>
  );
}
