"use client"

import useUiStore from '@/store/ui-store'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { BookText, CodeSquare, HomeIcon, UserRound, X } from 'lucide-react'


export const Sidebar = () => {

    const isSidebarOpen = useUiStore(state => state.isSidebarOpen);
    const closeMenu = useUiStore(state => state.closeSidebar);



  return (
    <div className='md:hidden'>

        {/* Background black */}
        {
            isSidebarOpen &&
                <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-20'>
                </div>
        }   


        {/* Blur */}
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
                'fixed p-5 top-0 right-0 w-[300px] h-screen z-20 bg-third shadow-2xl transform transition-all duration-500',
                {
                    "translate-x-full": !isSidebarOpen,
                }
            )
        }>


            <nav>
                <X
                    size={40}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={closeMenu}
                />

                {/* Categories */}

                <div className='flex justify-center mt-10'>
                    <ul>
                        <li>
                            <Link 
                                href="/"
                                className='flex justify-center items-center mt-10 px-9 py-2 hover:bg-secondary rounded-full transition-all duration-300'
                                >
                                <HomeIcon size={25} />
                                <span className='ml-3 text-xl'>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/"
                                className='flex justify-center items-center mt-10 px-9 py-2 hover:bg-secondary rounded-full transition-all duration-300'
                                >
                                <UserRound size={25}/>
                                <span className='ml-3 text-xl'>About me</span>
                            </Link> 
                        </li>
                        <li>
                            <Link 
                                href="/"
                                className='flex justify-center items-center mt-10 px-9 py-2 hover:bg-secondary rounded-full transition-all duration-300'
                                >
                                <BookText size={25}/>
                                <span className='ml-3 text-xl'>Proyectos</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/"
                                className='flex justify-center items-center mt-10 px-9 py-2 hover:bg-secondary rounded-full transition-all duration-300'
                            >
                                <CodeSquare size={25}/>
                                <span className='ml-3 text-xl'>Expirience</span>
                            </Link>
                        </li>
                    </ul>

                </div>

            </nav>

        </div>
    </div>
  )
}
