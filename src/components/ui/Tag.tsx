import { mont, montThin } from "@/lib/fonts"
import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Tag = ( { children, className }:Props ) => {

  return (
    <>
        <span className={` border text-gray-300 border-gray-700 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs flex flex-row justify-center items-center dark:focus:ring-gray-700 ${montThin.className} ${className}`}>
            { children }
        </span>
    </>
  )
}
