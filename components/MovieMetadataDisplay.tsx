import { Movie } from '@/lib/supabase'
import { formatMovieMetadata } from '@/lib/utils'

interface MovieMetadataDisplayProps {
  movie: Movie
  showDirector?: boolean
  showActors?: boolean
  showGenres?: boolean
  className?: string
}

export default function MovieMetadataDisplay({
  movie,
  showDirector = false,
  showActors = false,
  showGenres = true,
  className = ''
}: MovieMetadataDisplayProps) {
  const metadata = formatMovieMetadata(movie)

  return (
    <div className={`text-gray-300 text-sm ${className}`}>
      {/* Basic metadata */}
      <div className="flex items-center space-x-4 mb-2">
        <span>{metadata.year}</span>
        <span>•</span>
        <span>{metadata.runtime}</span>
        <span>•</span>
        <span className="text-yellow-500">{metadata.rating}</span>
        {showGenres && movie.genre && movie.genre.length > 0 && (
          <>
            <span>•</span>
            <span>{movie.genre.join(', ')}</span>
          </>
        )}
      </div>

      {/* Director and Actors */}
      {(showDirector || showActors) && (
        <div className="space-y-1">
          {showDirector && movie.director && (
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-gray-500 font-medium">Réalisateur:</span>
              <span className="text-gray-300">{movie.director}</span>
            </div>
          )}
          {showActors && movie.actors && movie.actors.length > 0 && (
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-gray-500 font-medium">Acteurs:</span>
              <span className="text-gray-300">{movie.actors.slice(0, 3).join(', ')}</span>
              {movie.actors.length > 3 && (
                <span className="text-gray-500">+{movie.actors.length - 3} autres</span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Genres as tags */}
      {showGenres && movie.genre && movie.genre.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {movie.genre.slice(0, 3).map((genre, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-netflix-gray rounded text-gray-300"
            >
              {genre}
            </span>
          ))}
        </div>
      )}
    </div>
  )
} 