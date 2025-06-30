'use client'

import { Play, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// Composant confetti simple (cercles colorés qui jaillissent)
function ConfettiBurst({ show }: { show: boolean }) {
  if (!show) return null
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 1.2,
            x: 40 * Math.cos((i / 12) * 2 * Math.PI),
            y: 40 * Math.sin((i / 12) * 2 * Math.PI)
          }}
          transition={{ duration: 0.8, delay: 0.05 * i }}
          className="w-2 h-2 rounded-full"
          style={{ background: `hsl(${i * 30}, 90%, 60%)` }}
        />
      ))}
    </div>
  )
}

interface MovieActionButtonsProps {
  onPlay?: () => void
  onLike?: () => void
  className?: string
  showAll?: boolean
  liked?: boolean // optionnel, pour savoir si déjà liké
  showPlay?: boolean // nouveau
}

export default function MovieActionButtons({
  onPlay,
  onLike,
  className = '',
  showAll = true,
  liked = false,
  showPlay = true
}: MovieActionButtonsProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLiked, setIsLiked] = useState(liked)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked((prev) => !prev)
    setIsAnimating(true)
    onLike?.()
    setTimeout(() => setIsAnimating(false), 900)
  }

  const buttons = [
    ...(showPlay ? [{
      icon: Play,
      onClick: onPlay,
      label: 'Play',
      className: 'hover:bg-white/30'
    }] : []),
    {
      icon: Heart,
      onClick: handleLike,
      label: 'Like',
      className: 'hover:bg-white/30 relative'
    }
  ]

  const visibleButtons = showAll ? buttons : buttons.slice(0, 2)

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {visibleButtons.map((button, index) => {
        if (button.label === 'Like') {
          return (
            <div key={index} className="relative">
              <AnimatePresence>
                <ConfettiBurst show={isAnimating && isLiked} />
              </AnimatePresence>
              <motion.button
                onClick={button.onClick}
                className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors shadow-lg ${button.className}`}
                title={button.label}
                animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10, duration: 0.5 }}
                style={{ outline: 'none', border: 'none' }}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500' : 'text-white'}`} fill={isLiked ? '#ef4444' : 'none'} />
              </motion.button>
            </div>
          )
        }
        return (
          <button
            key={index}
            onClick={button.onClick}
            className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors shadow-lg ${button.className}`}
            title={button.label}
          >
            <button.icon className="w-5 h-5 text-white" />
          </button>
        )
      })}
    </div>
  )
} 