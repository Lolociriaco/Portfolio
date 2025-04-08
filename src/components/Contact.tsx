"use client";

import { mont, montThin, poppins } from "@/lib/fonts";
import { contactData } from "@/seed/data";
import Link from "next/link";
import { Transition } from "./shared/Transition";
import { Form } from "./shared/Form";


export const Contact = () => {

  return (
    <section id="contact">
        <Transition 
        className="bg-white dark:bg-gray-950 flex flex-col h-fit justify-center items-center w-full pb-20 pt-40">
            <div className="w-full max_w_section">
                <h2
                className={`${mont.className} mb-4 text-5xl md:text-5xl tracking-tight font-extrabold text-center text-red-400`}
                >
                Contact Me
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Are you looking for a programer? Let me know.
                </p>

                <div className="flex flex-col md:flex-row gap-16 lg:gap-0 justify-center w-full">

                    <article className="w-full px-5 md:px-0">
                    {
                    contactData.map(data => (
                        <div key={data.platform} className="flex gap-6 mt-7">
                            <div className="flex justify-center text-red-400">
                                {data.icon}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className={`${montThin.className} text-xl`}>{data.platform}</h3>
                                <Link className="hover:text-red-400 transition-all duration-250" href={data.src ? data.src : "#"}>
                                    <h4 className={`${poppins.className}`}>{data.data}</h4>
                                </Link>
                            </div>
                        </div>
                    ))
                    }
                    </article>

                    <Form/>
                </div>
            </div>
        </Transition>
    </section>
  );
};
