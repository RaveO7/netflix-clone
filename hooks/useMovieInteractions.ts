import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Movie } from '@/lib/supabase'

export const useMovieInteractions = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const router = useRouter()

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie)
    setModalOpen(true)
  }

  const handlePlay = (movie: Movie) => {
    router.push(`/watch/${movie.id}`)
  }

  const handleListClick = (movie: Movie) => {
    router.push(`/watch/${movie.id}`)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedMovie(null)
  }

  return {
    selectedMovie,
    modalOpen,
    handleMovieClick,
    handlePlay,
    handleListClick,
    handleCloseModal,
    setSelectedMovie,
    setModalOpen
  }
} 