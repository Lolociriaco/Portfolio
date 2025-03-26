"use client"
import Image from 'next/image';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';
import { useRef, useState } from 'react'
import { Tag } from './Tag';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
    title: string;
    link: string;
    img: string;
    alt: string;
    description: string;
    tecnologies: string[];
}

export const ProyectItem = ({title, link, description, tecnologies, img, alt}: Props ) => {

    // Scroll animation

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "0.9 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

    // Hover animation
    const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
    key={title}
    ref={ref}
    viewport={{ once: true }}
    style={{
      scale: scaleProgress,
      opacity: scrollYProgress,
    }}
    className='w-full flex justify-center h-auto'
    >
        <Link href={link} className="group flex flex-col-reverse mx-3 lg:flex-row rounded-lg border border-gray-800 w-fit lg:w-full mb-10 overflow-hidden transition-colors duration-300 ease-in">

            <div className="flex flex-col justify-between w-full pt-4 pb-2 px-5 xl:px-5">
              <div>
                  <h2 className="flex gap-2 relative font-semibold text-2xl lg:text-3xl mb-5 transition-all duration-300 ease-in-out group-hover:text-red-300">
                      {title}
                      <IoMdOpen className="group-hover:translate-x-2 mt-2 -ml-0.5 group-hover:-translate-y-2 transition-all duration-300 ease-in-out" size={20}/>
                  </h2>

                  <h3 className="xl:pr-20 max-w-[650px]">{description}</h3>
              </div>

              <ul className="flex gap-2">
                  {
                  tecnologies.map(tech => (
                      <Tag key={tech}>
                      { tech }
                      </Tag>
                  ))
                  }
              </ul>

            </div>

            <Image 
            className="rounded-lg w-[800px] h-auto object-cover"
            src={img}
            alt={alt}
            width={800}
            height={800}
            />

        </Link>
    </motion.div>
  )
}
