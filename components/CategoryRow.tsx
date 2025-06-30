'use client'

import { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import MovieCard from './MovieCard'
import { Movie } from '@/lib/supabase'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'

interface CategoryRowProps {
  title: string
  movies: Movie[]
  showInfo?: boolean
  onMovieClick?: (movie: Movie) => void
  onPlay?: (movie: Movie) => void
}

export default function CategoryRow({ title, movies, showInfo = true, onMovieClick, onPlay }: CategoryRowProps) {
  const { rowRef, canScrollLeft, canScrollRight, scrollByViewport } = useHorizontalScroll()

  useEffect(() => {
    // Re-check scroll when movies change
    const timeoutId = setTimeout(() => {
      if (rowRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
        // Trigger scroll event to update state
        rowRef.current.dispatchEvent(new Event('scroll'))
    }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [movies])

  if (!movies || movies.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          {title}
        </h2>
        
        {/* Navigation Arrows */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scrollByViewport('left')}
            className="w-8 h-8 bg-netflix-dark/80 hover:bg-netflix-gray rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => scrollByViewport('right')}
            className="w-8 h-8 bg-netflix-dark/80 hover:bg-netflix-gray rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Movies Row */}
      <div className="relative group">
        <div
          ref={rowRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex-shrink-0 w-48 md:w-56 lg:w-64"
            >
              <MovieCard movie={movie} showInfo={showInfo} onClick={onMovieClick} onPlay={onPlay ? () => onPlay(movie) : undefined} />
            </motion.div>
          ))}
        </div>

        {/* Gradient Overlays for Scroll Indication */}
        <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-netflix-black to-transparent pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-netflix-black to-transparent pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  )
} 