'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import LoadingSpinner from '@/components/LoadingSpinner'
import MovieMetadata from '@/components/MovieMetadata'
import { Heart, Trash2 } from 'lucide-react'
import { Movie } from '@/lib/supabase'
import { mockMovies } from '@/lib/mockData'
import { useLikedMovies } from '@/hooks/useLikedMovies'

// Mock data for demonstration - in real app, this would come from user's list
const mockMyList: Movie[] = mockMovies.slice(0, 2)

export default function MyListPage() {
  const { likedMovies, toggleLike } = useLikedMovies()
  const myList = mockMovies.filter((movie) => likedMovies.includes(movie.id))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading from database
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleRemoveFromList = (movieId: string) => {
    // Implementation of handleRemoveFromList function
  }

  if (isLoading) {
    return (
      <Layout>
        <LoadingSpinner text="Loading your list..." />
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen bg-netflix-black">
        {/* Header */}
        <div className="px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-3 mb-8">
              <Heart className="w-8 h-8 text-netflix-red" />
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                My List
              </h1>
            </div>

            {myList.length === 0 ? (
              <div className="text-center py-16">
                <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-400 mb-2">
                  Your list is empty
                </h2>
                <p className="text-gray-500 mb-6">
                  Start adding movies and series to your list to watch them later.
                </p>
                <a
                  href="/browse"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Browse Movies</span>
                </a>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">
                    {myList.length} {myList.length === 1 ? 'title' : 'titles'} in your list
                  </p>
                </div>

                {/* My List Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {myList.map((movie) => (
                    <div key={movie.id} className="relative group">
                      <div className="relative aspect-[2/3] rounded-md overflow-hidden bg-netflix-gray">
                        <img
                          src={movie.poster_path}
                          alt={movie.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => toggleLike(movie.id)}
                          className="absolute top-2 right-2 z-10 w-8 h-8 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                        >
                          <Trash2 className="w-4 h-4 text-white" />
                        </button>
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <a
                            href={`/watch/${movie.id}`}
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <span className="text-white text-lg">▶</span>
                          </a>
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <h3 className="text-sm font-medium text-white truncate">
                          {movie.title}
                        </h3>
                        <MovieMetadata movie={movie} showGenres={false} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
} 