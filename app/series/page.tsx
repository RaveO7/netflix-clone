'use client'

import { useState, useMemo } from 'react'
import Layout from '@/components/Layout'
import LoadingSpinner from '@/components/LoadingSpinner'
import MovieModal from '@/components/MovieModal'
import MovieFilters from '@/components/MovieFilters'
import MovieGrid from '@/components/MovieGrid'
import { mockMovies, mockCategories } from '@/lib/mockData'
import { useMovieInteractions } from '@/hooks/useMovieInteractions'
import { useMovieFiltering } from '@/hooks/useMovieFiltering'

export default function TvShowsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [sortBy, setSortBy] = useState<'title' | 'year' | 'rating' | 'runtime'>('title')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isLoading, setIsLoading] = useState(false)

  const {
    selectedMovie,
    modalOpen,
    handleMovieClick,
    handlePlay,
    handleListClick,
    handleCloseModal,
    setSelectedMovie,
    setModalOpen
  } = useMovieInteractions()

  // Filter movies to show only series
  const movies = useMemo(() => mockMovies.filter(movie => movie.type === 'series'), [])

  // Memoize filter options to prevent infinite re-renders
  const filterOptions = useMemo(() => ({
    searchTerm,
    selectedCategory,
    selectedLanguage,
    sortBy
  }), [searchTerm, selectedCategory, selectedLanguage, sortBy])

  const filteredMovies = useMovieFiltering(movies, filterOptions)

  if (isLoading) {
    return (
      <Layout>
        <LoadingSpinner text="Loading Series..." />
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen bg-netflix-black">
        {/* Header */}
        <div className="bg-gradient-to-b from-black/80 to-transparent pt-20 pb-8">
          <div className="px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Series
            </h1>
            <p className="text-gray-300 text-lg">
              Discover our complete collection of {movies.length} series
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="px-4 md:px-8 lg:px-16 py-6 bg-netflix-gray/20">
          <MovieFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            sortBy={sortBy}
            onSortChange={(value) => setSortBy(value as 'title' | 'year' | 'rating' | 'runtime')}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            categories={mockCategories}
            placeholder="Search series..."
          />
        </div>

        {/* Results Count */}
        <div className="px-4 md:px-8 lg:px-16 py-4">
          <p className="text-gray-400">
            Showing {filteredMovies.length} of {movies.length} series
          </p>
        </div>

        {/* Series Grid/List */}
        <div className="px-4 md:px-8 lg:px-16 pb-16">
          <MovieGrid
            movies={filteredMovies}
            viewMode={viewMode}
            onMovieClick={(movie) => { setSelectedMovie(movie); setModalOpen(true); }}
            onPlay={handlePlay}
            onListClick={handleListClick}
            emptyMessage="No series found"
            emptySubMessage="Try adjusting your search or filters"
          />
        </div>

        <MovieModal movie={selectedMovie} open={modalOpen} onClose={handleCloseModal} />
      </div>
    </Layout>
  )
} 