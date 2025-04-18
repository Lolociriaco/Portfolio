"use client"

import useUiStore from '@/utils/ui-store'
import clsx from 'clsx'
import React from 'react'
import { X } from 'lucide-react'
import { itemsNavbar } from '@/seed/data'
import { montThin } from '@/lib/fonts'


export const Sidebar = () => {

    const isSidebarOpen = useUiStore(state => state.isSidebarOpen);
    const closeMenu = useUiStore(state => state.closeSidebar);



    return (
        <div className='md:hidden'>

            {/* Background Semi-black */}
            {
                isSidebarOpen &&
                <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-20'>
                </div>
            }


            {/* Backgorund Blur */}
            {
                isSidebarOpen &&
                <div onClick={closeMenu} className={
                    clsx(
                        'fade-in fixed top-0 left-0 w-screen h-screen z-20 backdrop-filter backdrop-blur-sm transform transition-all duration-1000',
                        {
                            "opacity-0": !isSidebarOpen,
                        }
                    )
                }>
                </div>
            }


            {/* Sidebar */}
            <div className={
                clsx(
                    'fixed p-5 top-0 right-0 w-[300px] h-screen z-50 bg-gray-950 shadow-2xl transform transition-all duration-500',
                    {
                        "translate-x-full": !isSidebarOpen,
                    }
                )
            }>


                <nav>
                    <X
                        size={35}
                        className='absolute top-5 right-6 cursor-pointer text-gray-100'
                        onClick={closeMenu}
                    />

                    {/* Categories */}

                    <div className="flex justify-center flex-col mt-24">
                        {
                            itemsNavbar.map(item => (
                            <button
                                key={item.title}
                                className='mb-10 flex justify-center'
                                onClick={() => {
                                    const element = document.getElementById(item.link);
                                    element?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                    })
                                    closeMenu();
                                }}
                            >
                                <span className="flex items-center justify-center w-[200px] gap-2 text-white bg-gray-800 hover:focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2 xl:mx-3 hover:text-red-400 transition-all duration-200" >
                                    <span className={`${montThin.className} opacity-100`}>{item.title}</span> 
                                </span>
                            </button>
                        ))
                        }
                    </div>
                </nav>
            </div>
        </div>
    )
}
