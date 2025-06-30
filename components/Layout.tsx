'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
  showNavbar?: boolean
}

export default function Layout({ children, showNavbar = true }: LayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('netflix-user')
    if (!user) {
      router.push('/')
      return
    }
    
    setIsAuthenticated(true)
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-netflix-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      {showNavbar && <Navbar />}
      <main className={showNavbar ? 'pt-16' : ''}>
        {children}
      </main>
    </div>
  )
} 