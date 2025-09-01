"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function SimpleEarth() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <EarthFallback />
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Earth Sphere */}
      <motion.div
        className="relative w-96 h-96 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 shadow-2xl"
        animate={{
          rotate: 360,
          boxShadow: [
            "0 0 80px rgba(59, 130, 246, 0.7)",
            "0 0 120px rgba(34, 197, 94, 0.8)",
            "0 0 80px rgba(59, 130, 246, 0.7)",
          ],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          boxShadow: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 70% 20%, rgba(16, 185, 129, 0.6) 0%, transparent 40%),
            radial-gradient(circle at 20% 70%, rgba(5, 150, 105, 0.7) 0%, transparent 45%),
            radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.5) 0%, transparent 35%),
            linear-gradient(135deg, #3b82f6 0%, #1d4ed8 25%, #059669 50%, #047857 75%, #1e40af 100%)
          `,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
        {/* Continents/Land masses */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* North America */}
          <div className="absolute top-8 left-12 w-16 h-20 bg-green-600/90 rounded-lg transform -rotate-12"></div>

          {/* Europe */}
          <div className="absolute top-6 left-32 w-8 h-12 bg-green-700/90 rounded transform rotate-12"></div>

          {/* Asia */}
          <div className="absolute top-4 right-8 w-20 h-24 bg-green-600/90 rounded-xl transform rotate-6"></div>

          {/* Africa */}
          <div className="absolute top-16 left-28 w-12 h-20 bg-green-700/90 rounded-lg transform -rotate-6"></div>

          {/* South America */}
          <div className="absolute bottom-12 left-16 w-8 h-16 bg-green-600/90 rounded transform rotate-15"></div>

          {/* Australia */}
          <div className="absolute bottom-8 right-16 w-10 h-6 bg-green-700/90 rounded transform -rotate-12"></div>
        </div>

        {/* Atmosphere glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>

        {/* Cloud layer */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="absolute top-12 left-8 w-12 h-4 bg-white/30 rounded-full blur-sm"></div>
          <div className="absolute top-20 right-12 w-16 h-5 bg-white/25 rounded-full blur-sm"></div>
          <div className="absolute bottom-16 left-20 w-10 h-3 bg-white/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-24 right-8 w-14 h-4 bg-white/20 rounded-full blur-sm"></div>
          <div className="absolute top-32 left-32 w-8 h-3 bg-white/35 rounded-full blur-sm"></div>
        </motion.div>

        {/* Pollution hotspots - highly visible */}
        <PollutionHotspots />
      </motion.div>

      {/* Orbital rings for effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] border border-blue-300/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[520px] h-[520px] border border-green-300/15 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

function PollutionHotspots() {
  const hotspots = [
    { top: "20%", left: "60%", size: "w-6 h-6", color: "bg-red-500", intensity: 0.9 },
    { top: "35%", left: "25%", size: "w-5 h-5", color: "bg-orange-500", intensity: 0.8 },
    { top: "45%", left: "70%", size: "w-7 h-7", color: "bg-red-600", intensity: 1.0 },
    { top: "60%", left: "15%", size: "w-5 h-5", color: "bg-yellow-500", intensity: 0.8 },
    { top: "25%", left: "80%", size: "w-6 h-6", color: "bg-red-400", intensity: 0.9 },
    { top: "70%", left: "45%", size: "w-5 h-5", color: "bg-orange-600", intensity: 0.8 },
  ]

  return (
    <>
      {hotspots.map((hotspot, index) => (
        <motion.div
          key={index}
          className={`absolute ${hotspot.size} ${hotspot.color} rounded-full z-10`}
          style={{ top: hotspot.top, left: hotspot.left }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [hotspot.intensity, 1, hotspot.intensity],
            boxShadow: [
              `0 0 10px ${hotspot.color.includes("red") ? "#ef4444" : hotspot.color.includes("orange") ? "#f97316" : "#eab308"}`,
              `0 0 20px ${hotspot.color.includes("red") ? "#ef4444" : hotspot.color.includes("orange") ? "#f97316" : "#eab308"}`,
              `0 0 10px ${hotspot.color.includes("red") ? "#ef4444" : hotspot.color.includes("orange") ? "#f97316" : "#eab308"}`,
            ],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

function EarthFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 shadow-2xl flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-4">🌍</div>
          <p className="text-lg font-semibold">Earth</p>
          <p className="text-sm opacity-80">Air Quality Monitor</p>
        </div>
      </div>
    </div>
  )
}
