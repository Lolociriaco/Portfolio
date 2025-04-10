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

  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={`${urbanist.variable} bg-gray-950 antialiased flex flex-col min-h-screen`}>
        
        {/* Navbar */}
        <Navbar/>
        <Sidebar/>
        
        {children}

        {/* Footer */}
        <footer className="block bg-gray-800 text-white text-center p-4">
          © {currentYear} Lorenzo Ciriaco - Todos los derechos reservados
        </footer>

      </body>
    </html>
  );
}
