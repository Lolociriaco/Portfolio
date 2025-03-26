
import { tecnologiesData } from "@/seed/data"
import { li } from "framer-motion/client"

export const Tecnologies = () => {
  return (
    <section className="flex flex-col items-center w-full p-5 lg:px-10 xl:px-20">
      <div className="flex flex-col items-center w-full max-w-[1400px] border rounded-lg border-gray-800 py-10 gap-10">
        <h2 className="text-3xl font-semibold">Tecnologias</h2>
        <ul className="flex gap-10 flex-wrap">
          {
            tecnologiesData.map(tech => (
              <li 
              className="flex flex-col gap-1 items-center justify-center text-red-300 h-48"
              key={tech.name}
              >
                { tech.icon }
                { tech.name }
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
