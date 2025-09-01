"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

export function EarthFallback() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-blue-900/30 rounded-lg">
      <motion.div
        className="text-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Globe className="h-32 w-32 text-blue-300" />
        <p className="text-white mt-4">Interactive Earth</p>
      </motion.div>
    </div>
  )
}
