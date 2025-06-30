import React, { useEffect, useRef, useState } from 'react'
import { Movie } from '@/lib/supabase'
import { X, Play, Plus, Heart } from 'lucide-react'
import MovieMetadata from './MovieMetadata'
import MovieActionButtons from './MovieActionButtons'
import Image from 'next/image'
import { mockMovies } from '@/lib/mockData'
import { useLikedMovies } from '@/hooks/useLikedMovies'
import { useRouter } from 'next/navigation'

interface MovieModalProps {
  movie: Movie | null
  open: boolean
  onClose: () => void
  onPlay?: () => void
}

export default function MovieModal({ movie, open, onClose, onPlay }: MovieModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const { isLiked, toggleLike } = useLikedMovies()
  const [selectedSeason, setSelectedSeason] = useState<number>(1)
  const router = useRouter()

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('overflow-hidden')
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('overflow-hidden')
    }
  }, [open, onClose])

  useEffect(() => {
    if (movie?.type === 'series') {
      setSelectedSeason(1)
    }
  }, [movie])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose()
    }
  }

  const handlePlay = () => {
    if (movie) {
      router.push(`/watch/${movie.id}`)
      onClose()
    }
  }

  if (!open || !movie) return null

  const posterImage = movie.poster_path || '/placeholder-movie.jpg'
  const selectedSeasonObj = movie.type === 'series' && movie.seasons ? movie.seasons.find(s => s.season === selectedSeason) : null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      ref={modalRef}
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl mx-4 rounded-lg overflow-hidden shadow-2xl animate-fade-in bg-netflix-dark flex flex-col"
        style={{ height: '90vh', maxHeight: '900px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white hover:text-netflix-red bg-black/60 rounded-full p-1"
          aria-label="Close"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Content scrollable, including poster image, with design preserved */}
        <div className="relative z-10 flex-1 min-h-0 flex flex-col bg-black/80 overflow-y-auto scrollbar-hide">
          {/* Poster image full width on top, scrollable, with spacing below */}
          <div className="relative w-full aspect-[16/9] bg-black flex-shrink-0"
            style={{ maxHeight: '60%' }}
          >
            <Image
              src={posterImage}
              alt={movie.title}
              fill
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Content below poster, with same paddings as avant */}
          <div className="flex flex-col p-6 pt-4 flex-1 min-h-0">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {movie.title}
            </h2>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 mb-6">
              <button
                onClick={handlePlay}
                className="flex items-center bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 text-lg shadow-lg"
              >
                <Play className="w-6 h-6 mr-2" /> Play
              </button>
              <MovieActionButtons
                onLike={() => toggleLike(movie.id)}
                liked={isLiked(movie.id)}
                showAll={false}
                showPlay={false}
              />
            </div>

            {/* Infos */}
            <div className="bg-black/60 rounded-lg px-2 w-full flex flex-col md:flex-row md:items-stretch md:justify-between">
              {/* Infos principales à gauche */}
              <div className="flex-1 md:max-w-[65%] ">
                <div className="flex flex-wrap items-center gap-3 text-gray-300 text-sm mb-2">
                  <span>{movie.release_date?.split('-')[0]}</span>
                  <span>•</span>
                  <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                  <span>•</span>
                  <span className="text-yellow-500">★ {movie.rating}</span>
                  {movie.genre && movie.genre.length > 0 && <><span>•</span><span>{movie.genre.join(', ')}</span></>}
                </div>
                <p className="text-gray-200 text-base mb-2 line-clamp-4">{movie.description}</p>

              </div>
              {/* Réalisateur et acteurs à droite */}
              {(movie.director || (movie.actors && movie.actors.length > 0)) && (
                <div className="md:w-56 md:min-w-[180px] md:max-w-[220px] md:border-l md:border-gray-700 md:pl-6 text-gray-300 text-sm flex-shrink-0 flex flex-col items-start self-start mb-4 md:mb-0">
                  {movie.director && (
                    <div className="mb-2">
                      <span className="font-semibold text-white">Réalisateur :</span> {movie.director}
                    </div>
                  )}
                  {movie.actors && movie.actors.length > 0 && (
                    <div>
                      <span className="font-semibold text-white">Acteurs :</span> {movie.actors.slice(0, 3).join(', ')}
                    </div>
                  )}
                </div>
              )}
            </div>
            {movie.type === 'series' && movie.seasons && movie.seasons.length > 0 && (
              <div className="mt-4">
                <div className='flex items-center gap-3 mb-4'>
                  <select
                    id="season-select"
                    value={selectedSeason}
                    onChange={e => setSelectedSeason(Number(e.target.value))}
                    className="bg-netflix-gray border border-gray-600 rounded-lg px-3 py-2 text-white"
                  >
                    {movie.seasons.map(s => (
                      <option key={s.season} value={s.season}>Saison {s.season}</option>
                    ))}
                  </select>
                  <div className="text-white text-lg">
                    ({selectedSeasonObj?.episodes} épisodes)
                  </div>
                </div>

                {/* Grille d'épisodes designée */}
                <div className="bg-black/40 rounded-lg p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {selectedSeasonObj && Array.from({ length: selectedSeasonObj.episodes }, (_, i) => (
                      <div
                        key={i}
                        className="group relative bg-netflix-gray rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                        onClick={() => {
                          if (movie) {
                            router.push(`/watch/${movie.id}`)
                            onClose()
                          }
                        }}
                      >
                        {/* Image de l'épisode (utilise l'image du film pour l'instant) */}
                        <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-900">
                          <Image
                            src={posterImage}
                            alt={`Épisode ${i + 1}`}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                          />

                          {/* Bouton play au hover */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white/90 rounded-full p-2">
                              <Play className="w-4 h-4 text-black" />
                            </div>
                          </div>
                        </div>

                        {/* Info de l'épisode */}
                        <div className="p-2">
                          <div className="text-white font-medium text-sm truncate">
                            Épisode {i + 1}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 