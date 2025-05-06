"use client"
import { presentationData, socialNetworks } from "@/seed/data"
import { mont, montThin } from "@/lib/fonts"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/Button"
import { IoIosArrowDown } from "react-icons/io"
import { MotionTransition } from "./shared/MotionTransition"

export const Presentation = () => {

  //const ref = useRef(null) 


  return (
    <section id="home" className="flex justify-center relative visible items-start sm:items-center mt-7 sm:mt-0 h-screen w-full mb-4 md:mb-16 px-5 md:px-10">
      

      <div className="max_w_section w-full flex flex-wrap-reverse h-[85vh] justify-around md:justify-between md:items-center sm:gap-4 lg:gap-10 md:flex-nowrap">

        <MotionTransition position="left" >

          <div className="mt-5 sm:mt-14 w-full z-20">
            <h1 className={`${mont.className} font-semibold mt-4 text-gray-100 text-5xl sm:text-6xl md:text-[80px] antialiased z-20`}>
            Lorenzo Ciriaco
            </h1>

            <h3 className={`${montThin.className} mt-2 text-gray-200 text-2xl md:text-4xl z-20`}>
              Front-End Web Developer
              <span className={`${mont.className} z-20 antialiased text-red-400`} >{ ' </>' }</span>
            </h3>

            <p className="text-xl max-w-[800px] mt-1 text-gray-400 z-20">
              {presentationData[1].descripcion}
            </p>

            <div  className="flex gap-3 mt-5 items-center">
              <a
                href="Curriculum - Ciriaco Lorenzo.pdf"
                download="Curriculum - Ciriaco Lorenzo.pdf"
              >
                <Button>
                  Curriculum
                </Button>
              </a>
              {
                socialNetworks.map(({ logo, src, id }) => (
                  <Link 
                    key={id}
                    href={src}
                    className="p-2"  
                  >
                    {
                      <span className="hover:text-red-400 text-gray-200 transition-colors duration-150">
                        {logo}
                      </span>
                    }
                  </Link>
                ))
              }
            </div>

          </div>
        </MotionTransition>
        <MotionTransition position="right" className="w-fit min-w-[300px] md:min-w-[350px] flex justify-center items-center">
          <Image
            src="/images/Image-CV.jpg"
            width={1000}
            height={1000}
            priority
            alt="Mi foto :)"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full object-cover shadow-sm shadow-zinc-800"
          />
        </MotionTransition>
      </div>
      
        <IoIosArrowDown 
          size={45} 
          className="absolute bottom-10 block left-1/2 text-white -translate-x-1/2 z-20"
        />

    </section>
  )
}
