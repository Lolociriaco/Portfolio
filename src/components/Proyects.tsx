
import { cardData } from "@/seed/data"
import { useScroll, motion } from "framer-motion"
import { ProyectItem } from "./ui/ProyectItem"

export default function Proyects() {

  return (
    <section id="proyects"
      className="flex flex-col justify-center items-center w-full py-12 md:py-52 p-5 lg:px-10 xl:px-20">
      <div className="w-full max-w-[1500px]">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          Proyectos Descatables
        </h2>
        <div className="flex flex-col justify-center w-full items-center">
          {
            cardData.map((item) => (
                <ProyectItem {...item} key={item.title}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
