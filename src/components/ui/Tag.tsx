import { mont, montThin } from "@/lib/fonts"
import Link from "next/link"

interface Props {
    children: string
}

export const Tag = ( { children }:Props ) => {
  return (
    <>
        <span className={`px-7 py-2 mt-4 border text-red-300 border-gray-700 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs bg-red-500  dark:focus:ring-gray-700 ${mont.className} bg-opacity-15`}>
            {children}
        </span>
    </>
  )
}
