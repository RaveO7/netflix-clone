'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { Plus, Edit, Trash2, Film, Users, Database } from 'lucide-react'
import { Movie, Category } from '@/lib/supabase'

const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    release_date: '2008-07-18',
    runtime: 152,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    video_url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    category: 'Action',
    created_at: '2023-01-01'
  }
]

const mockCategories: Category[] = [
  { id: '1', name: 'Action', description: 'Action movies and shows', created_at: '2023-01-01' },
  { id: '2', name: 'Drama', description: 'Drama movies and shows', created_at: '2023-01-01' },
  { id: '3', name: 'Comedy', description: 'Comedy movies and shows', created_at: '2023-01-01' },
  { id: '4', name: 'Sci-Fi', description: 'Science fiction content', created_at: '2023-01-01' }
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [movies, setMovies] = useState<Movie[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    setMovies(mockMovies)
    setCategories(mockCategories)
  }, [])

  const handleDeleteMovie = (movieId: string) => {
    setMovies(prev => prev.filter(movie => movie.id !== movieId))
  }

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(prev => prev.filter(category => category.id !== categoryId))
  }

  const stats = [
    { title: 'Total Movies', value: movies.length, icon: Film, color: 'text-blue-500' },
    { title: 'Total Categories', value: categories.length, icon: Database, color: 'text-green-500' },
    { title: 'Active Users', value: '1,234', icon: Users, color: 'text-purple-500' }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-netflix-black">
        <div className="px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-400">
                Manage your Netflix clone content and users
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-netflix-dark rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-1 bg-netflix-dark rounded-lg p-1 mb-8">
              {[
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'movies', label: 'Movies' },
                { id: 'categories', label: 'Categories' },
                { id: 'users', label: 'Users' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-netflix-red text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-netflix-dark rounded-lg p-6">
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-netflix-gray rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-white">New movie "The Dark Knight" added</p>
                        <p className="text-gray-400 text-sm">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-netflix-gray rounded-lg">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-white">Category "Action" updated</p>
                        <p className="text-gray-400 text-sm">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'movies' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">Movies</h2>
                    <button className="btn-primary flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Add Movie</span>
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="py-3 px-4 text-gray-400 font-medium">Title</th>
                          <th className="py-3 px-4 text-gray-400 font-medium">Category</th>
                          <th className="py-3 px-4 text-gray-400 font-medium">Rating</th>
                          <th className="py-3 px-4 text-gray-400 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {movies.map((movie) => (
                          <tr key={movie.id} className="border-b border-gray-800">
                            <td className="py-3 px-4 text-white">{movie.title}</td>
                            <td className="py-3 px-4 text-gray-400">{movie.category}</td>
                            <td className="py-3 px-4 text-yellow-500">★ {movie.rating}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-500 hover:text-blue-400">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button 
                                  onClick={() => handleDeleteMovie(movie.id)}
                                  className="text-red-500 hover:text-red-400"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'categories' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">Categories</h2>
                    <button className="btn-primary flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Add Category</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => (
                      <div key={category.id} className="bg-netflix-gray rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-medium">{category.name}</h3>
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-500 hover:text-blue-400">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDeleteCategory(category.id)}
                              className="text-red-500 hover:text-red-400"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">{category.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'users' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">User Management</h2>
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">User management features coming soon...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 