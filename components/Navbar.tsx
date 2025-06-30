'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, Bell, User, LogOut, Settings, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [nickname, setNickname] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    const storedNickname = localStorage.getItem('netflix-nickname')
    if (storedNickname) {
      setNickname(storedNickname)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('netflix-nickname')
    router.push('/')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/browse" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold text-netflix-red">
            NETFLIX
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/browse" className="text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/movies" className="text-white hover:text-gray-300 transition-colors">
            Movies
          </Link>
          <Link href="/series" className="text-white hover:text-gray-300 transition-colors">
            Series
          </Link>
          <Link href="/my-list" className="text-white hover:text-gray-300 transition-colors">
            My List
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="text-white hover:text-gray-300 transition-colors focus:ring-2 focus:ring-netflix-red/60 hover:scale-110 hover:shadow-netflix-red/40" tabIndex={0}>
            <Search className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <button className="text-white hover:text-gray-300 transition-colors focus:ring-2 focus:ring-netflix-red/60 hover:scale-110 hover:shadow-netflix-red/40" tabIndex={0}>
            <Bell className="w-5 h-5" />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors focus:ring-2 focus:ring-netflix-red/60 hover:scale-110 hover:shadow-netflix-red/40" tabIndex={0}
            >
              <div className="w-8 h-8 bg-netflix-red rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="hidden md:block">{nickname}</span>
            </button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-netflix-dark border border-gray-700 rounded-md shadow-lg py-2"
                >
                  <div className="px-4 py-2 border-b border-gray-700">
                    <p className="text-sm text-gray-300">Signed in as</p>
                    <p className="text-white font-medium">{nickname}</p>
                  </div>
                  
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-netflix-gray transition-colors"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </Link>
                  
                  <Link
                    href="/my-list"
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-netflix-gray transition-colors"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    My List
                  </Link>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-netflix-gray transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  )
} 