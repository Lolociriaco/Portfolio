import Image from 'next/image';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';
import { Tag } from './Tag';
import { montThin } from '@/lib/fonts';
import { Transition } from '../shared/Transition';
import { JSX } from 'react';

interface Tech {
    tech: string;
    icon: JSX.Element;
}

interface Props {
    title: string;
    link: string;
    img: string;
    alt: string;
    description: string;
    tecnologies: Tech[];
    items?: string[];
}

export const ProyectItem = ({ title, link, description, tecnologies, img, items, alt }: Props) => {

    return (
        <Transition
            className='w-full flex justify-center h-auto'
        >
            <Link href={link} className="group flex flex-col-reverse p-3 lg:flex-row rounded-lg border border-gray-700 w-fit lg:w-full mb-10 overflow-hidden transition-colors duration-300 ease-in">

                <div className="flex flex-col justify-between w-full pt-3 pb-2 px-3 xl:px-5">
                    <div>
                        <h2 className={`${montThin.className} flex gap-2 relative font-semibold text-2xl lg:text-3xl mb-5 transition-all duration-300 ease-in-out group-hover:text-red-400`}>
                            {title}
                            <IoMdOpen className="group-hover:translate-x-2 mt-2 -ml-0.5 group-hover:-translate-y-2 transition-all duration-300 ease-in-out" size={20} />
                        </h2>

                        <p className="xl:pr-20 text-gray-400 text-md max-w-[500px] lg:max-w-[650px]">{description}</p>
                    {
                        items && (
                            <ul className="text-gray-400 text-lg mt-4 max-w-[500px] lg:max-w-[650px]">
                                {
                                    items.map(item => (
                                        <li key={item} className="flex gap-2 items-center">{item}</li>
                                    ))
                                }
                            </ul>
                        )
                    }
                    </div>


                    <ul className="flex gap-2">
                        {
                            tecnologies.map(tecnologies => (
                                <Tag key={tecnologies.tech} className="flex flex-row justify-center items-center gap-2">
                                    {tecnologies.icon}
                                    {tecnologies.tech}
                                </Tag>
                            ))
                        }
                    </ul>

                </div>

                <Image
                    className="rounded-lg w-[550px] 2xl:w-[630px] h-auto object-cover"
                    src={img}
                    alt={alt}
                    width={1200}
                    height={1200}
                />

            </Link>
        </Transition>
    )
}
