'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Movie } from '@/lib/supabase'
import MovieMetadata from './MovieMetadata'
import MovieActionButtons from './MovieActionButtons'
import { useLikedMovies } from '@/hooks/useLikedMovies'

interface MovieCardProps {
  movie: Movie
  showInfo?: boolean
  onClick?: (movie: Movie) => void
  isListMode?: boolean
  onPlay?: () => void
}

export default function MovieCard({ movie, showInfo = true, onClick, isListMode = false, onPlay }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { isLiked, toggleLike } = useLikedMovies()


  return (
    <motion.div
      className={`relative group cursor-pointer transition-shadow duration-300 ${isHovered && !isListMode ? 'shadow-2xl shadow-netflix-red/40 ring-2 ring-netflix-red/40' : ''}`}
      onMouseEnter={() => !isListMode && setIsHovered(true)}
      onMouseLeave={() => !isListMode && setIsHovered(false)}
      whileHover={!isListMode ? { scale: 1.07 } : {}}
      whileFocus={!isListMode ? { scale: 1.07 } : {}}
      tabIndex={0}
      transition={{ duration: 0.2 }}
      onClick={onClick ? (e) => { e.preventDefault(); onClick(movie) } : undefined}
    >
        <div className="relative aspect-[2/3] rounded-md overflow-hidden bg-netflix-gray">
          <Image
          src={movie.poster_path}
            alt={movie.title}
            fill
          className={`object-cover transition-transform duration-300 ${isHovered && !isListMode ? 'scale-110' : ''}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              const titleDiv = parent.querySelector('.fallback-title') as HTMLElement
              if (titleDiv) titleDiv.style.display = 'flex'
            }
          }}
        />
        {/* Fallback: Titre du film quand pas d'image (géré par onError) */}
        <div 
          className="fallback-title absolute inset-0 items-center justify-center p-4 text-center hidden"
        >
          <h3 className="text-sm md:text-base font-semibold text-white leading-tight">
            {movie.title}
          </h3>
        </div>

        {/* Gradient Overlay - seulement si pas en mode liste */}
        {!isListMode && (
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        )}
          
        {/* Hover Actions - seulement si pas en mode liste */}
        {isHovered && !isListMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
            <MovieActionButtons
              onLike={() => toggleLike(movie.id)}
              liked={isLiked(movie.id)}
              onPlay={onPlay}
            />
            </motion.div>
          )}

        {/* Movie Info - seulement si showInfo est true ET qu'il y a une image */}
      {showInfo && (
          <div className="opacity-0">
            <MovieMetadata movie={movie} />
          </div>
        )}
        </div>
    </motion.div>
  )
} 