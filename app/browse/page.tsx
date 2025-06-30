'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from '@/components/Layout'
import CategoryRow from '@/components/CategoryRow'
import LoadingSpinner from '@/components/LoadingSpinner'
import { Movie } from '@/lib/supabase'
import { mockMovies, getMoviesByCategory, getContinueWatching, getTrending } from '@/lib/mockData'
import MovieModal from '@/components/MovieModal'
import { useMovieInteractions } from '@/hooks/useMovieInteractions'

export default function BrowsePage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const {
    selectedMovie,
    modalOpen,
    handleMovieClick,
    handlePlay,
    handleCloseModal
  } = useMovieInteractions()

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
    setFeaturedMovie(mockMovies[0])
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <Layout>
        <LoadingSpinner text="Loading content..." />
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen bg-netflix-black">
        {/* Hero Section */}
        {featuredMovie && (
          <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${featuredMovie.backdrop_path})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10 flex items-end h-full pb-20 px-4 md:px-8 lg:px-16">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">
                  {featuredMovie.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6 text-shadow">
                  {featuredMovie.description}
                </p>
                <div className="flex items-center space-x-4">
                  <button className="btn-primary flex items-center space-x-2">
                    <span>▶</span>
                    <span>Play</span>
                  </button>
                  <button className="btn-secondary flex items-center space-x-2">
                    <span>ℹ</span>
                    <span>More Info</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Sections */}
        <div className="px-4 md:px-8 lg:px-16 py-8 space-y-12">
          {/* Continue Watching */}
          <CategoryRow 
            title="Continue Watching" 
            movies={getContinueWatching()} 
            onMovieClick={handleMovieClick}
            onPlay={handlePlay}
          />

          {/* Trending */}
          <CategoryRow 
            title="Trending Now" 
            movies={getTrending()} 
            onMovieClick={handleMovieClick}
            onPlay={handlePlay}
          />

          {/* Action Movies */}
          <CategoryRow 
            title="Action Movies" 
            movies={getMoviesByCategory('Action')} 
            onMovieClick={handleMovieClick}
            onPlay={handlePlay}
          />

          {/* Sci-Fi Movies */}
          <CategoryRow 
            title="Sci-Fi Movies" 
            movies={getMoviesByCategory('Sci-Fi')} 
            onMovieClick={handleMovieClick}
            onPlay={handlePlay}
          />

          {/* Drama Movies */}
          <CategoryRow 
            title="Drama Movies" 
            movies={getMoviesByCategory('Drama')} 
            onMovieClick={handleMovieClick}
            onPlay={handlePlay}
          />

          {/* Crime Movies */}
          <CategoryRow 
            title="Crime Movies" 
            movies={getMoviesByCategory('Crime')} 
            onMovieClick={handleMovieClick}
            onPlay={handlePlay}
          />
        </div>
        <MovieModal movie={selectedMovie} open={modalOpen} onClose={handleCloseModal} />
      </div>
    </Layout>
  )
} 