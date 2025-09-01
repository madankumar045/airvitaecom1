"use client"

import React from "react"

import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from "three"

// Earth Component with improved visibility
function Earth() {
  const [earthTexture, setEarthTexture] = useState<THREE.Texture | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load(
      "/assets/3d/texture_earth.jpg",
      (texture) => {
        setEarthTexture(texture)
        setIsLoading(false)
      },
      undefined,
      (error) => {
        console.error("Error loading Earth texture:", error)
        setHasError(true)
        setIsLoading(false)
      },
    )

    return () => {
      if (earthTexture) {
        earthTexture.dispose()
      }
    }
  }, [])

  return (
    <group>
      <Sphere args={[2.5, 64, 64]} rotation={[0, 0, 0]}>
        {earthTexture ? (
          <meshStandardMaterial map={earthTexture} />
        ) : (
          <meshStandardMaterial color={hasError ? "#2563eb" : "#3b82f6"} roughness={0.8} metalness={0.1} />
        )}
      </Sphere>

      {/* Atmosphere glow effect */}
      <Sphere args={[2.7, 32, 32]}>
        <meshBasicMaterial color="#87ceeb" transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>

      {/* Pollution hotspots as glowing spheres - more visible */}
      <Sphere args={[0.15, 16, 16]} position={[1.5, 1.0, 1.8]}>
        <meshBasicMaterial color="#ff4444" transparent opacity={0.9} />
      </Sphere>
      <Sphere args={[0.12, 16, 16]} position={[-1.8, 0.7, 1.5]}>
        <meshBasicMaterial color="#ff6644" transparent opacity={0.8} />
      </Sphere>
      <Sphere args={[0.18, 16, 16]} position={[1.0, -1.5, 2.0]}>
        <meshBasicMaterial color="#ff2222" transparent opacity={1.0} />
      </Sphere>
      <Sphere args={[0.14, 16, 16]} position={[-1.2, 1.4, 1.8]}>
        <meshBasicMaterial color="#ff5533" transparent opacity={0.7} />
      </Sphere>

      {/* Additional pollution indicators */}
      <Sphere args={[0.1, 16, 16]} position={[0.5, 1.8, 1.2]}>
        <meshBasicMaterial color="#ff7744" transparent opacity={0.6} />
      </Sphere>
      <Sphere args={[0.13, 16, 16]} position={[-0.8, -1.0, 2.2]}>
        <meshBasicMaterial color="#ff3333" transparent opacity={0.8} />
      </Sphere>
    </group>
  )
}

// Loading fallback component
function EarthLoadingFallback() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-blue-900/20 rounded-lg backdrop-blur-sm">
      <div className="text-white text-center">
        <div className="w-20 h-20 border-4 border-t-blue-400 border-blue-200/30 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg">Loading Earth...</p>
      </div>
    </div>
  )
}

// Error fallback component
function EarthErrorFallback() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-blue-900/20 rounded-lg backdrop-blur-sm">
      <div className="text-white text-center p-4">
        <div className="w-32 h-32 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-24 h-24 bg-blue-400/50 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-300/70 rounded-full"></div>
          </div>
        </div>
        <p className="text-xl mb-2">Earth Visualization</p>
        <p className="text-sm opacity-80">Interactive 3D Earth showing pollution hotspots</p>
      </div>
    </div>
  )
}

// Animated Earth Scene with improved lighting and visibility
export function EarthScene() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <EarthErrorFallback />
  }

  return (
    <div className="h-full w-full relative">
      <ErrorBoundary fallback={<EarthErrorFallback />}>
        <Suspense fallback={<EarthLoadingFallback />}>
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ background: "transparent" }}>
            {/* Improved lighting for better visibility */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <directionalLight position={[-10, -10, -5]} intensity={0.4} />
            <pointLight position={[0, 0, 10]} intensity={0.5} />

            <Earth />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI - Math.PI / 4}
            />
          </Canvas>
        </Suspense>
      </ErrorBoundary>

      {/* Overlay information */}
      <div className="absolute top-4 right-4 bg-red-500/20 backdrop-blur-sm rounded-lg p-3 text-white border border-red-400/30">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Pollution Hotspots</span>
        </div>
        <p className="text-xs text-red-100">Real-time air quality monitoring</p>
      </div>
    </div>
  )
}

// Simple error boundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    console.error("Earth component error:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// Enhanced Floating Particles Component for pollution effect
export function PollutionParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-300/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
