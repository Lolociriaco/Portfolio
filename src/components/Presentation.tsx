"use client"
import { presentationData, socialNetworks } from "@/seed/data"
import { cutive, mont, montThin, poppins } from "@/lib/fonts"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/Button"
import { span } from "framer-motion/client"
import { IoIosArrowDown } from "react-icons/io"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { MotionTransition } from "./MotionTransition"

export const Presentation = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  })


  return (
    <div id="home" className="flex justify-center items-center h-screen w-full mb-4 md:mb-16 px-5 md:px-10">

      <div className="max-w-[1500px] w-full flex flex-wrap-reverse justify-center items-center sm:gap-3 lg:gap-10 md:flex-nowrap">

        <MotionTransition position="left" >

          <div className="mt-14">
            <h1 className={`${mont.className} inline-block mt-4 text-6xl md:text-[90px] antialiased`}>
            Lorenzo Ciriaco
            </h1>

            <h2 className={`${montThin.className} mt-2 text-2xl md:text-4xl`}>
              Front-End Web Developer
              <span className={`${mont.className} antialiased text-red-300`} >{ ' </>' }</span>
            </h2>

            <h3 className="md:text-2xl pr-10">
              {presentationData[1].descripcion}
            </h3>

            <div  className="flex gap-7 mt-5 items-center">
              <a
                href="/cv.pdf"
                download="Mi_CV.pdf"
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
                  >
                    {
                      <span className="hover:text-red-300 transition-colors duration-150">
                        {logo}
                      </span>
                    }
                  </Link>
                ))
              }
            </div>

          </div>
        </MotionTransition>
        <MotionTransition position="right" className="w-full min-w-[350px] flex justify-center items-center">
          <Image
            src="/images/Image-CV.jpeg"
            width={1000}
            height={1000}
            priority
            alt="mi foto :)"
            className="w-[300px] h-[300px] md:w-[350px] md:h-auto rounded-full object-cover"
          />
        </MotionTransition>
      </div>
      
        <IoIosArrowDown 
          size={45} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 "
        />

    </div>
  )
}
