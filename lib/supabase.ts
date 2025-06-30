import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  nickname: string
  created_at: string
}

export interface Movie {
  id: string
  title: string
  description: string
  poster_path: string
  backdrop_path: string
  release_date: string
  runtime: number
  genre: string[]
  rating: number
  video_url: string
  category: string
  created_at: string
  director?: string
  actors?: string[]
  type: 'movie' | 'series'
  number_of_seasons?: number
  seasons?: { season: number; episodes: number }[]
  languages?: string[] // VF, VOSTFR, etc.
  video_urls?: {
    vf: string[]
    vostfr: string[]
  }
}

export interface WatchHistory {
  id: string
  user_id: string
  movie_id: string
  watched_at: string
  progress: number // percentage watched
}

export interface MyList {
  id: string
  user_id: string
  movie_id: string
  added_at: string
}

export interface Category {
  id: string
  name: string
  description: string
  created_at: string
} 