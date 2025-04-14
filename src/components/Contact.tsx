"use client";

import { mont, montThin, poppins } from "@/lib/fonts";
import { contactData } from "@/seed/data";
import Link from "next/link";
import { Transition } from "./shared/Transition";
import { Form } from "./shared/Form";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);

    toast(`Copied to clipboard!`,
        {
        icon: '👏',
        style: {
            borderRadius: '10px',
            background: 'rgba(17, 24, 39, 1)',
            color: '#fff',
        },
        }
    )
  };

  return (
    <section id="contact">
        <Toaster // Toast Message :)
        position="bottom-left"
        reverseOrder={false}
        />
      <Transition className="bg-white dark:bg-gray-950 flex flex-col h-fit justify-center items-center w-full pb-20 margin_section">
        <div className="w-full max_w_section">
          <h2 className={`${mont.className} mb-4 tracking-tight font-extrabold text-center `}>
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Are you looking for a programmer? Let me know.
          </p>

          <div className="flex flex-col md:flex-row gap-16 lg:gap-0 justify-center w-full">
            <article className="w-full px-5 md:px-0">
              {contactData.map(data => (
                <div key={data.platform} className="flex gap-6 mt-7">
                  <div className="flex justify-center mt-1 text-red-400">{data.icon}</div>
                  <div className="flex flex-col gap-2">
                    <h3 className={`${montThin.className} text-xl`}>{data.platform}</h3>
                    {data.src ? (
                      <Link
                        className="hover:text-red-400 transition-all duration-250"
                        href={data.src}
                        target="_blank"
                      >
                        <h4 className={`${poppins.className}`}>{data.data}</h4>
                      </Link>
                    ) : (
                      <div>
                        <h4
                          className={`${poppins.className} hover:text-red-400 cursor-pointer transition-all duration-250`}
                          onClick={() => handleCopy(data.data)}
                        >
                          {data.data}
                        </h4>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </article>

            <Form />
            
          </div>
        </div>
      </Transition>
    </section>
  );
};
