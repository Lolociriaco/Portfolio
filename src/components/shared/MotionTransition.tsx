"use client"

import { fadeIn } from "@/utils/Motion-transition"
import { motion } from "framer-motion"

interface MotionTransitionProps {
    children: React.ReactNode,
    position: "right" | "bottom" | "left",
    className?: string
}

export const MotionTransition = (props: MotionTransitionProps) => {
  const { children, position, className } = props
 
  return (
      <motion.div
        variants={fadeIn(position)}
        initial="hidden"
        animate="visible"
        exit="hidden"
        whileInView="animate"
        className={className}
      >
        {children}
      </motion.div>
  )
}
