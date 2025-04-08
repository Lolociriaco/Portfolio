"use client"
import { mont } from "@/lib/fonts"
import { motion } from "framer-motion"

interface Props {
    children: string
}

export const Tag = ( { children }:Props ) => {

  const fadeInAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },

  }

  return (
    <>
        <motion.span className={`px-7 py-2 mt-4 border text-red-400 border-gray-700 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs bg-red-500  dark:focus:ring-gray-700 ${mont.className} bg-opacity-15`}
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        >
            {children}
        </motion.span>
    </>
  )
}
