
import { mont } from "@/lib/fonts"
import { aboutMeData } from "@/seed/data"
import { Transition } from "./shared/Transition"
import { section } from "framer-motion/client"

export const AboutMe = () => {

  return(
    <section id="about-me">
      <Transition
          className="flex flex-col justify-center items-center w-full margin_section">
          <div className="w-full max_w_section">
            <h2 className={`${mont.className} text-5xl md:text-5xl font-semibold mb-10 text-red-400`}>
              About me
            </h2>
            <div className="flex flex-col justify-center w-full items-center">
            {
              aboutMeData.map((data, index) => (
                  (
                      index === 0 &&
                      <div key={index}>
                          <h3>{ data.title }</h3>
                          <p>{ data.description }</p>
                      </div>
                  )
                ))
              }
            </div>
          </div>
        </Transition>
    </section>
  )
}

