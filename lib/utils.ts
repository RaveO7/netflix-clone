import { Movie } from './supabase'

/**
 * Format runtime from minutes to "Xh Ym" format
 */
export const formatRuntime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}

/**
 * Format year from date string
 */
export const formatYear = (dateString: string): string => {
  return dateString.split('-')[0]
}

/**
 * Format movie metadata for display
 */
export const formatMovieMetadata = (movie: Movie): {
  year: string
  runtime: string
  rating: string
  genres: string
} => {
  return {
    year: movie.release_date ? formatYear(movie.release_date) : '',
    runtime: formatRuntime(movie.runtime),
    rating: `★ ${movie.rating}`,
    genres: movie.genre ? movie.genre.join(', ') : ''
  }
}

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * Generate a random ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
} 