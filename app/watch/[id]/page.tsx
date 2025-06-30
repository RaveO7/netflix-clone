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
  const [selectedLang, setSelectedLang] = useState<'vf' | 'vostfr'>('vf')
  const [selectedPlayer, setSelectedPlayer] = useState(0)

  useEffect(() => {
    const foundMovie = mockMovies.find(m => m.id === movieId)
    if (foundMovie) {
      setMovie(foundMovie)
    } else {
      router.push('/browse')
    }
    setSelectedPlayer(0)
  }, [movieId, router])

  useEffect(() => {
    setSelectedPlayer(0)
  }, [selectedLang])

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

  const videoUrls = (movie.video_urls || { vf: [movie.video_url], vostfr: [] }) as {
    vf: string[]
    vostfr: string[]
  }
  const currentUrls = videoUrls[selectedLang] || []
  const currentUrl = currentUrls[selectedPlayer] || ''

  return (
    <Layout showNavbar={false}>
      <div className=" w-full h-full flex flex-col bg-netflix-black items-stretch justify-center mx-auto">
        {/* Video Player */}
        <div
          className="relative flex-1 min-h-[94vh] max-h-[94vh] bg-black rounded-none overflow-hidden shadow-lg"
        >
           <iframe
            ref={setIframeRef}
            src={currentUrl}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            style={{ objectFit: 'cover' }}
          /> 
        </div>

        {/* Choix de langue et lecteur centré sous le lecteur */}
        <div className="w-full flex justify-center">
          <div className="flex items-center gap-2 bg-black/60 rounded-lg shadow-lg">
            <button
              className={`px-2 py-1 rounded text-xs font-semibold ${selectedLang === 'vf' ? 'bg-netflix-red text-white' : 'bg-gray-700 text-gray-200'}`}
              onClick={() => setSelectedLang('vf')}
              style={{ minWidth: 40 }}
            >
              VF
            </button>
            <button
              className={`px-2 py-1 rounded text-xs font-semibold ${selectedLang === 'vostfr' ? 'bg-netflix-red text-white' : 'bg-gray-700 text-gray-200'}`}
              onClick={() => setSelectedLang('vostfr')}
              style={{ minWidth: 60 }}
            >
              VOSTFR
            </button>
            {currentUrls.length > 1 && (
              <select
                className="ml-2 px-2 py-1 rounded text-xs bg-gray-800 text-white border border-gray-600"
                value={selectedPlayer}
                onChange={e => setSelectedPlayer(Number(e.target.value))}
                style={{ minWidth: 80 }}
              >
                {currentUrls.map((url, idx) => (
                  <option key={idx} value={idx}>
                    Lecteur {idx + 1}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-20 text-white bg-black/50 rounded-full p-2 transition-colors duration-200 hover:bg-netflix-red hover:text-white hover:shadow-lg hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-netflix-red"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Movie Details
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

            {/* More Like This
            <div className="mt-12">
              <CategoryRow 
                title="More Like This" 
                movies={mockMovies.filter(m => m.id !== movie.id)} 
              />
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  )
} 