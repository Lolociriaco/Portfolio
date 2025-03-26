import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components";
import { Sidebar } from "../components";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Lorenzo Ciriaco",
  description: "Portfolio made by Lorenzo Ciriaco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}  antialiased flex flex-col min-h-screen`}>
        
        {/* Navbar */}
        <Navbar/>
        <Sidebar/>
        
        {children}

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          © 2024 Lorenzo Ciriaco - Todos los derechos reservados
        </footer>

      </body>
    </html>
  );
}
