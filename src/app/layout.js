import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Social Media Manager",
  description: "Manage WhatsApp, Instagram, and Facebook from one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <div className="flex h-screen w-screen flex-col">
          {/* Topbar full width */}
          <Topbar />

          <div className="flex flex-1">
            {/* Sidebar (desktop fixed) */}
            <aside className="hidden md:flex fixed top-[56px] left-0 h-[calc(100vh-56px)] w-64 bg-white border-r shadow-sm">
              <Sidebar />
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto p-6 md:ml-64">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
