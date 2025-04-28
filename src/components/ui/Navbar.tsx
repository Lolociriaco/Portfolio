"use client"
import { itemsNavbar } from "@/seed/data";
import useUiStore from "@/utils/ui-store";
import { AlignJustify } from "lucide-react";
import { MotionTransition } from "../shared/MotionTransition";
import { montThin } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export const Navbar = () => {
    // Obtiene la ruta actual - por ahora en desuso
    //const router = usePathname();

    // Logica para abrir el menú lateral
    const openMenu = useUiStore(state => state.openSidebar);

    //const sectionRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname()

    
    const [isMobile, setIsMobile] = useState<boolean | null>(null); // null al principio
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 874);
      };
      
      handleResize(); // Ejecutar al montar
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    if (pathname !== '/') return null;

    if(isMobile){
      return(
      <MotionTransition position="right" className="absolute z-50 w-8 h-8 right-6 top-5">
        <nav>
          <AlignJustify
            size={40} 
            className="w-8 h-8 text-gray-100"
            onClick={openMenu}
          />
        </nav>
      </MotionTransition>
      );
    }

    return (
    <MotionTransition position="right" className="fixed z-20 top-3 desktop-navbar">
      <nav>

        {/* Version de escritorio */}

        <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gray-700/80 backdrop-blur shadow-lg shadow-gray-800">
            {
              itemsNavbar.map(item => (
              <button
                key={item.title}
                onClick={() => {
                const element = document.getElementById(String(item.link));
                element?.scrollIntoView({ 
                  
                  behavior: 'smooth', 
                });  
              }}
              >
                <span className="flex items-center justify-center gap-2 text-white bg-gray-800 hover: focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2 xl:mx-3 hover:text-red-400 transition-all duration-200" 
                 
                >
                  <div className="w-6 h-6 flex items-center justify-center antialiased transform-none font-bold">
                    {item.icon}
                  </div>
                  <span className={`${montThin.className} opacity-100`}>{item.title}</span> 
                  
                </span>
              </button>
            ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

