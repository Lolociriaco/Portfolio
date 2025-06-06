import Image from 'next/image';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';
import { Tag } from './Tag';
import { montThin } from '@/lib/fonts';
import { Transition } from '../shared/Transition';
import { Tech } from '@/seed/data';

interface Props {
    title: string;
    link: string;
    img: string;
    alt: string;
    description: string;
    technologies: Tech[];
    items?: string[];
}

export const ProyectItem = ({ title, link, description, technologies, img, items, alt }: Props) => {

    return (
        <Transition
            className='w-full flex justify-center h-auto'
        >
            <Link href={link} className="group flex flex-col-reverse p-3 lg:flex-row rounded-lg border border-gray-700 w-fit lg:w-full mb-10 overflow-hidden transition-colors duration-300 ease-in">

                <div className="flex flex-col justify-between w-full pt-3 pb-2 px-3 xl:px-5">
                    <div>
                        <h3 className={`${montThin.className} flex gap-2 relative font-semibold text-2xl lg:text-3xl mb-3 transition-all duration-300 ease-in-out text-gray-100 group-hover:text-red-400`}>
                            {title}
                            <IoMdOpen className="group-hover:translate-x-2 mt-2 -ml-0.5 group-hover:-translate-y-2 transition-all duration-300 ease-in-out" size={20} />
                        </h3>

                        <p className="text-gray-400 text-md max-w-[500px] lg:max-w-[650px]">{description}</p>
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


                    <ul className="flex gap-2 flex-wrap">
                        {
                            technologies.map(tecnologies => (
                                <Tag key={tecnologies.tech} className={`${tecnologies.bg_color} px-7 mt-4 py-2 bg-opacity-15 gap-2`}>
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
