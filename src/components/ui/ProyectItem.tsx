import Image from 'next/image';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';
import { Tag } from './Tag';
import { montThin } from '@/lib/fonts';
import { Transition } from '../shared/Transition';

interface Props {
    title: string;
    link: string;
    img: string;
    alt: string;
    description: string;
    tecnologies: string[];
}

export const ProyectItem = ({title, link, description, tecnologies, img, alt}: Props ) => {

  return (
    <Transition 
    className='w-full flex justify-center h-auto'
    >
        <Link href={link} className="group flex flex-col-reverse p-3 lg:flex-row rounded-lg border border-gray-700 w-fit lg:w-full mb-10 overflow-hidden transition-colors duration-300 ease-in">

            <div className="flex flex-col justify-between min-w-[400px] w-full pt-4 pb-2 px-5 xl:px-5">
              <div>
                  <h2 className={`${montThin.className} flex gap-2 relative font-semibold text-2xl lg:text-3xl mb-5 transition-all duration-300 ease-in-out group-hover:text-red-400`}>
                      {title}
                      <IoMdOpen className="group-hover:translate-x-2 mt-2 -ml-0.5 group-hover:-translate-y-2 transition-all duration-300 ease-in-out" size={20}/>
                  </h2>

                  <p className="xl:pr-20 text-gray-400 text-lg max-w-[500px] lg:max-w-[650px]">{description}</p>
              </div>

              <ul className="flex gap-2">
                  {
                  tecnologies.map(tech => (
                      <Tag key={tech}>
                      { tech }
                      </Tag>
                  ))
                  }
              </ul>

            </div>

            <Image 
            className="rounded-lg w-[600px] xl:w-[800px] h-auto object-cover"
            src={img}
            alt={alt}
            width={1200}
            height={1200}
            />

        </Link>
    </Transition>
  )
}
