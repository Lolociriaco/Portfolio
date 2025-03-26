"use client"
import { itemsNavbar } from "@/seed/data";
import exp from "constants";
// Si usas Next.js
import Link from "next/link";  
import { usePathname } from "next/navigation";
import useUiStore from "@/store/ui-store";
import { AlignJustify } from "lucide-react";
import { MotionTransition } from "../MotionTransition";
import { montThin } from "@/lib/fonts";


export const Navbar = () => {
    const router = usePathname();

    const openMenu = useUiStore(state => state.openSidebar);


    return (
    
    <MotionTransition position="right" className="fixed z-20 top-6 md:desktop-navbar">
      <nav>

        {/* Version de escritorio */}

        <div className="hidden md:flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-700 backdrop-blur-sm">
            {
              itemsNavbar.map(item => (
              <a 
                key={item.id}
                href={item.link} 
                className=""
              >
                <button type="button" className="flex items-center justify-center gap-2 text-white bg-gray-800 hover: focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2 xl:mx-3 hover:text-red-300 transition-all duration-200 " 
                key={item.id} 
                >
                  <div className="w-6 h-6 flex items-center justify-center antialiased transform-none font-bold ">
                    {item.icon}
                  </div>
                  <span className={`${montThin.className}`}>{item.title}</span> 
                  
                </button>
              </a>
            ))}
        </div>
          
        {/* Mobile */}

        <div className="md:hidden fixed right-6">
          <AlignJustify 
            className="w-8 h-8"
            onClick={openMenu}
          />
        </div>
        
      </nav>
    </MotionTransition>
  );
};


/*      <nav className="relative w-full bg-gray-900 text-white p-4 flex items-center justify-between">
        {/* Menú de navegación centrado respecto a la pantalla }
        <ul className="absolute left-1/2 -translate-x-1/2 flex space-x-6 text-lg font-semibold">
          <li className="hover:text-blue-400 cursor-pointer">About Me</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Languages</li>
        </ul>
  
        {/* Botones alineados a la derecha }
        <div className="ml-auto flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md">
            Contact
          </button>
          <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg shadow-md">
            Hire Me
          </button>
        </div>
      </nav>
    ); */