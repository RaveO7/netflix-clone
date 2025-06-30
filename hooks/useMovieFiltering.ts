import { useState, useEffect, useMemo } from 'react'
import { Movie } from '@/lib/supabase'

interface FilterOptions {
  searchTerm: string
  selectedCategory: string
  selectedLanguage: string
  sortBy: 'title' | 'year' | 'rating' | 'runtime'
}

export const useMovieFiltering = (movies: Movie[], filterOptions: FilterOptions) => {
  const { searchTerm, selectedCategory, selectedLanguage, sortBy } = filterOptions

  const filteredMovies = useMemo(() => {
    let filtered = movies

    // Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase()
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(lowerSearch) ||
        movie.description.toLowerCase().includes(lowerSearch) ||
        movie.genre.some(g => g.toLowerCase().includes(lowerSearch)) ||
        (movie.director && movie.director.toLowerCase().includes(lowerSearch)) ||
        (movie.actors && movie.actors.some(actor => actor.toLowerCase().includes(lowerSearch)))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(movie => movie.category === selectedCategory)
    }

    // Filter by language
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(movie => 
        movie.languages && movie.languages.includes(selectedLanguage)
      )
    }

    // Sort movies
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'year':
          return new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
        case 'rating':
          return b.rating - a.rating
        case 'runtime':
          return b.runtime - a.runtime
        default:
          return 0
      }
    })

    return filtered
  }, [movies, searchTerm, selectedCategory, selectedLanguage, sortBy])

  return filteredMovies
} 