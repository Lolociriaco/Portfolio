"use client"
import { mont, montThin } from "@/lib/fonts";
import { academicData, tecnologiesData } from "@/seed/data";
import { motion } from "framer-motion";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { Tag } from "./ui/Tag";

export const Training = () => {

  const fadeInAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition:{
        delay: 0.1 * index,
      }
     }),

  }

  return (
    <section id="training"
      className="flex flex-col justify-center items-center w-full margin_section">
      <div className="flex flex-col lg:flex-row justify-between w-full max_w_section">

        <div className="w-full">
          <h3 className={`${mont.className} text-center lg:text-start font-semibold mb-10 lg:mb-14 text-4xl lg:text-[40px] text-red-400`}>
            Academic Training
          </h3>
          {
            academicData.map((data, index) => (
              <motion.div 
              key={index} 
              className="flex justify-between py-5"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }} 
              custom={index}
              >
                <div className="flex gap-5">
                  <HiMiniAcademicCap size={40} className="text-red-400"/>
                  <div className="flex flex-col">
                    <div className="flex gap-3">
                      <h4 className={`${montThin.className} flex text-2xl text-gray-100 items-center`}>
                        {data.title}
                      </h4>
                      {
                        data.inProgress && (
                          <span className="mt-2 text-gray-400">In progress</span>
                        )
                      }
                    </div>
                    <Tag className={`${data.institution_color} mt-2 py-1 px-2 inline-block w-24 bg-opacity-25`}>{data.institution}</Tag>
                    <p className="mt-3 max-w-[480px]">{data.description}</p>
                  </div>
                </div>
              </motion.div>
            ))
          }

        </div>

        <div className="border-2 right-1 m-10 lg:mx-10 lg:my-20 rounded-lg border-gray-700"/>
        
        <div className="w-full lg:mx-0">
          <h3 className={`${mont.className} text-center lg:text-start font-semibold mb-14 text-4xl lg:text-[40px] text-red-400`}>
            Tecnologies
          </h3>
            <ul className="flex justify-center gap-14 flex-wrap max-w-[600px] m-auto">
              {
                tecnologiesData.map((tech, index) => (
                  <motion.li
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }} 
                  custom={index}
                  key={index}
                  className={`relative flex flex-col gap-1 items-center justify-center h-20 w-20`}
                  >
                    <span className={`${tech.bg_color} absolute -z-10 h-20 w-20 rounded-3xl blur-md bg-opacity-35`}></span>
                    { tech.icon }
                  </motion.li>
                ))
              }
            </ul>
        </div>

      </div>
    </section>
  )
};
