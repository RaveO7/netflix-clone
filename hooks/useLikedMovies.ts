import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'liked-movies'

export function useLikedMovies() {
  const [liked, setLiked] = useState<string[]>([])
  const [isReady, setIsReady] = useState(false)

  // Charger depuis le localStorage uniquement après le montage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setLiked(JSON.parse(stored))
      }
      setIsReady(true)
    }
  }, [])

  // Mettre à jour le localStorage à chaque changement (seulement si prêt)
  useEffect(() => {
    if (isReady) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(liked))
    }
  }, [liked, isReady])

  // Vérifier si un film est liké
  const isLiked = useCallback((id: string) => liked.includes(id), [liked])

  // Ajouter ou retirer un like
  const toggleLike = useCallback((id: string) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }, [])

  return { likedMovies: liked, isLiked, toggleLike, isReady }
} 