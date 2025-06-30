import { Movie } from '@/lib/supabase'
import MovieCard from './MovieCard'
import MovieMetadataDisplay from './MovieMetadataDisplay'
import { motion, AnimatePresence } from 'framer-motion'

interface MovieGridProps {
  movies: Movie[]
  viewMode: 'grid' | 'list'
  onMovieClick: (movie: Movie) => void
  onPlay: (movie: Movie) => void
  onListClick: (movie: Movie) => void
  emptyMessage?: string
  emptySubMessage?: string
}

export default function MovieGrid({
  movies,
  viewMode,
  onMovieClick,
  onPlay,
  onListClick,
  emptyMessage = "No content found",
  emptySubMessage = "Try adjusting your search or filters"
}: MovieGridProps) {
  if (movies.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-lg mb-4">{emptyMessage}</div>
        <p className="text-gray-500">{emptySubMessage}</p>
      </div>
    )
  }

  // Variants pour l'animation
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.06 } },
  }
  const itemVariants = {
    initial: { opacity: 0, y: viewMode === 'grid' ? 32 : 0, x: viewMode === 'list' ? -32 : 0 },
    animate: { opacity: 1, y: 0, x: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } },
    exit: { opacity: 0, y: viewMode === 'grid' ? 32 : 0, x: viewMode === 'list' ? 32 : 0, transition: { duration: 0.25 } },
  }

  return (
    <motion.div
      className={
        viewMode === 'grid'
          ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'
          : 'space-y-4'
      }
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimatePresence initial={false}>
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
            transition={{ type: 'spring', stiffness: 60, damping: 18 }}
            className={
              viewMode === 'list'
                ? 'flex space-x-4 bg-netflix-gray/20 hover:bg-netflix-gray/40 rounded-lg p-4 transition-all duration-300 cursor-pointer'
                : ''
            }
            onClick={() => viewMode === 'list' && onListClick(movie)}
          >
            <MovieCard
              movie={movie}
              showInfo={viewMode === 'list'}
              onClick={viewMode === 'grid' ? onMovieClick : undefined}
              isListMode={viewMode === 'list'}
              onPlay={() => onPlay(movie)}
            />
            {viewMode === 'list' && (
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-white mb-2">{movie.title}</h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{movie.description}</p>
                <MovieMetadataDisplay
                  movie={movie}
                  showDirector={true}
                  showActors={true}
                  showGenres={true}
                />
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
} 