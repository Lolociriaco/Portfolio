"use client"
import { mont } from "@/lib/fonts"
import { motion } from "framer-motion"

interface Props {
    children: string;
    className?: string;
}

export const Tag = ( { children, className }:Props ) => {

  return (
    <>
        <span className={`px-7 py-2 mt-4 border text-gray-300 border-gray-700 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs bg-red-600  dark:focus:ring-gray-700 ${mont.className} ${className} bg-opacity-20`}>
            {children}
        </span>
    </>
  )
}
