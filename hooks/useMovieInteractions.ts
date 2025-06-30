import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Movie } from '@/lib/supabase'

// Fonction utilitaire pour générer un slug à partir du titre (compatible ES5)
function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const useMovieInteractions = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const router = useRouter()
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie)
    setModalOpen(true)
    // Ajoute le paramètre movie (slug) à l'URL sans scroller en haut
    const slug = slugify(movie.title)
    router.push(`?movie=${slug}`, { scroll: false })
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
    // Revenir à l'URL précédente
    router.back()
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