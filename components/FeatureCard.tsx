'use client'

import { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  className = '' 
}: FeatureCardProps) {
  return (
    <div className={`rounded-2xl relative flex overflow-hidden backdrop-blur-[30px] flex-1 ${className}`} 
         style={{ background: 'linear-gradient(149deg, #192247 0%, #210e17 99.08%)' }}>
      <div className="flex flex-col justify-between p-8 w-full">
        <div>
          <div className="text-white text-2xl font-bold mb-3 text-left">{title}</div>
          <div className="text-gray-300 text-base text-left">{description}</div>
        </div>
        <div className="flex justify-end items-end mt-8">
          {icon}
        </div>
      </div>
    </div>
  )
} 