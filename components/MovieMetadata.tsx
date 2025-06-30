'use client'

import { Movie } from '@/lib/supabase'

interface MovieMetadataProps {
  movie: Movie
  showGenres?: boolean
  className?: string
}

export default function MovieMetadata({ 
  movie, 
  showGenres = true, 
  className = '' 
}: MovieMetadataProps) {
  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex items-center space-x-2 text-xs text-gray-400">
        <span>{movie.release_date?.split('-')[0]}</span>
        <span>•</span>
        <span>{formatRuntime(movie.runtime)}</span>
        <span>•</span>
        <span className="text-yellow-500">★ {movie.rating}</span>
      </div>
    </div>
  )
} 