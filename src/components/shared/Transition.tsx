"use client"

import { motion } from "framer-motion"

interface TransitionProps {
    children: React.ReactNode,
    className?: string,
    id?: string,
    custom?: number
}

export const Transition = ({ children, id, className, custom=1 }: TransitionProps) => {


  const fadeInAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        duration: 0.6, // Make it last longer for smoothness
        ease: "easeOut", // More natural feel
        delay: 0.1 * custom, // Slight delay
      },
    },
  };
 
  return (
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} 
        className={className}
        id={id}
      >
        {children}
      </motion.div>
  )
}
