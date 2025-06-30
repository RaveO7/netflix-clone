import { Filter, Search, Grid, List } from 'lucide-react'
import { Category } from '@/lib/supabase'
import { motion, useReducedMotion } from 'framer-motion'

interface MovieFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  selectedLanguage: string
  onLanguageChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
  categories: Category[]
  placeholder?: string
}

export default function MovieFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLanguage,
  onLanguageChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  categories,
  placeholder = "Search movies..."
}: MovieFiltersProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 60, damping: 18 }}
      className=""
    >
      {/* Search and Filters Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Search Bar - Left Side */}
        <div className="flex-1 lg:flex-none  lg:w-2/6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-netflix-gray border border-gray-600 rounded-lg pl-10 pr-2 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-netflix-red"
            />
          </div>
        </div>

        {/* Filters and View Options - Right Side */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 w-4 h-4" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="bg-netflix-gray border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-netflix-red min-w-[150px]"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <select
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-netflix-gray border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-netflix-red min-w-[150px]"
          >
            <option value="all">All Languages</option>
            <option value="VF">VF</option>
            <option value="VOSTFR">VOSTFR</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-netflix-gray border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-netflix-red min-w-[150px]"
          >
            <option value="title">Sort by Title</option>
            <option value="year">Sort by Year</option>
            <option value="rating">Sort by Rating</option>
            <option value="runtime">Sort by Duration</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-netflix-gray border border-gray-600 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded transition-colors flex items-center justify-center ${
                viewMode === 'grid' 
                  ? 'bg-netflix-red text-white ' 
                  : 'bg-transparent text-gray-400 hover:text-white '
              }`}
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded transition-colors flex items-center justify-center ${
                viewMode === 'list' 
                  ? 'bg-netflix-red text-white' 
                  : 'bg-transparent text-gray-400 hover:text-white'
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 