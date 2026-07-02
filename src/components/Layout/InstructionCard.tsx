import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type InstructionCardProps = {
  children: ReactNode
  title: string
}

const InstructionCard = ({ children, title }: InstructionCardProps) => {
  return (
    <motion.article
      className="rounded-[20px] bg-[#1F1F1F] p-6 text-white shadow-[0_20px_55px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(45,140,255,0.12)] sm:p-8 lg:p-10"
      initial={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.22 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold tracking-normal text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-[#D0D0D0] sm:text-lg">
        {children}
      </div>
    </motion.article>
  )
}

export default InstructionCard
