'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react'
import Layout from '@/components/Layout'
import CategoryRow from '@/components/CategoryRow'
import { Movie } from '@/lib/supabase'
import { mockMovies } from '@/lib/mockData'

export default function WatchPage() {
  const params = useParams()
  const router = useRouter()
  const movieId = params.id as string
  
  const [movie, setMovie] = useState<Movie | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [progress, setProgress] = useState(0)
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const foundMovie = mockMovies.find(m => m.id === movieId)
    if (foundMovie) {
      setMovie(foundMovie)
    } else {
      router.push('/browse')
    }
  }, [movieId, router])

  const handleBack = () => {
    router.back()
  }

  const handlePlayPause = () => {
    if (iframeRef) {
      try {
        iframeRef.contentWindow?.postMessage(
          isPlaying ? 'pause' : 'play',
          '*'
        )
      } catch (error) {
        console.log('Cannot control iframe video')
      }
    }
    setIsPlaying(!isPlaying)
  }

  const handleMute = () => {
    if (iframeRef) {
      try {
        iframeRef.contentWindow?.postMessage(
          isMuted ? 'unmute' : 'mute',
          '*'
        )
      } catch (error) {
        console.log('Cannot control iframe audio')
      }
    }
    setIsMuted(!isMuted)
  }

  const handleMouseMove = () => {
    setShowControls(true)
    setTimeout(() => setShowControls(false), 3000)
  }

  if (!movie) {
    return (
      <Layout showNavbar={false}>
        <div className="min-h-screen bg-netflix-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-netflix-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading...</p>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout showNavbar={false}>
      <div className="min-h-screen bg-netflix-black">
        {/* Video Player */}
        <div 
          className="relative w-full h-screen bg-black"
          onMouseMove={handleMouseMove}
        >
          <iframe
            ref={setIframeRef}
            src={movie.video_url}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ objectFit: 'cover' }}
          />

          {/* Back Button */}
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 z-20 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Video Controls */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                </button>
                
                <button
                  onClick={handleMute}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
                
                <div className="text-white text-sm">
                  Vidéo en cours de lecture
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Settings className="w-6 h-6" />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Maximize className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Details */}
        <div className="px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-gray-400 mb-4">
              <span>{movie.release_date?.split('-')[0]}</span>
              <span>•</span>
              <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
              <span>•</span>
              <span className="text-yellow-500">★ {movie.rating}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genre?.map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-netflix-gray rounded-full text-sm text-gray-300"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {movie.description}
            </p>

            {/* More Like This */}
            <div className="mt-12">
              <CategoryRow 
                title="More Like This" 
                movies={mockMovies.filter(m => m.id !== movie.id)} 
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 