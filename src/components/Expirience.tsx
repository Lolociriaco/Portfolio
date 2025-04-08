"use client"
import { academicData, tecnologiesData } from "@/seed/data";
import { motion } from "framer-motion";
import { HiMiniAcademicCap } from "react-icons/hi2";

export const Expirience = () => {

  const fadeInAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition:{
        delay: 0.2 * index,
      }
     }),

  }

  return (
    <section id="expirience"
      className="flex flex-col justify-center items-center w-full margin_section">
      <div className="flex flex-col lg:flex-row justify-between w-full max_w_section">

        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Academic Training
          </h2>
          {
            academicData.map((data, index) => (
              <motion.div 
              key={data.id} 
              className="flex justify-between py-5"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }} 
              custom={index}
              >
                <div className="flex gap-5">
                  <HiMiniAcademicCap size={35} className="text-red-400"/>
                  <div className="flex flex-col">
                    <h4 className="flex gap-5 text-2xl items-center">
                      {data.title}
                    </h4>
                    <h3>{data.institution}</h3>
                    <p className="mt-3 max-w-[500px]">{data.description}</p>
                  </div>
                </div>
                {
                  data.inProgress && (
                    <span className="mt-2 text-gray-400">In progress</span>
                  )
                }
              </motion.div>
            ))
          }

        </div>

        <div className="border-2 right-1 m-10 lg:mx-10 lg:my-20 rounded-lg border-gray-700"/>
        
        <div className="w-full lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 ">
            Tecnologies
          </h2>
            <ul className="flex justify-center gap-x-20 flex-wrap">
              {
                tecnologiesData.map((tech, index) => (
                  <motion.li
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }} 
                  custom={index}
                  key={tech.name}
                  className="flex flex-col gap-1 items-center justify-center text-red-400 h-48"
                  >
                    { tech.icon }
                    { tech.name }
                  </motion.li>
                ))
              }
            </ul>
        </div>

      </div>
    </section>
  )
};
