
import { mont } from "@/lib/fonts"
import { aboutMeData } from "@/seed/data"
import { Transition } from "./shared/Transition"
import Image from "next/image"

export const AboutMe = () => {

  return (
    <section id="about-me">
      <Transition
        className="flex flex-col justify-center items-center w-full margin_section_aboutme">
        <div className="w-full max_w_section">
          <div className="w-full">
          {
            aboutMeData.map((data, index) => (
              <div key={index} className="w-full flex flex-col justify-center items-center md:block clear-both">
                <Image
                  src={data.image}
                  alt="Lorenzo Ciriaco picture"
                  width={800}
                  height={800}
                  className="rounded-full shape-custom w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover md:mr-28 mb-4"
                />
                <div className="max-w-[1100px]">
                  <h2 className={`${mont.className} font-semibold p-0 md:pt-12 mb-5`}>
                    About me
                  </h2>
                  <p className="text-start">
                    {data.description}
                  </p>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </Transition>
    </section>
  )
}

