"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  icon: ReactNode
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center hover:border-cyan-500 transition-colors"
    >
      <div className="mb-4 p-4 bg-gray-800 rounded-full">{icon}</div>
      <h3 className="text-lg font-medium text-white">{name}</h3>
    </motion.div>
  )
}
