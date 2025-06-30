'use client'

import { useRef, useState, useEffect } from 'react'

interface UseHorizontalScrollOptions {
  cardWidth?: number
  gap?: number
  visibleCards?: number
}

export function useHorizontalScroll({
  cardWidth = 180,
  gap = 100,
  visibleCards = 5
}: UseHorizontalScrollOptions = {}) {
  const rowRef = useRef<HTMLUListElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = rowRef.current
    if (!ref) return
    
    ref.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    
    return () => {
      ref.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
      const maxScroll = scrollWidth - clientWidth
      let scrollTo = scrollLeft
      
      if (direction === 'left') {
        scrollTo = Math.max(0, scrollLeft - (cardWidth + gap) * visibleCards)
      } else {
        scrollTo = Math.min(maxScroll, scrollLeft + (cardWidth + gap) * visibleCards)
      }
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const scrollByViewport = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return {
    rowRef,
    canScrollLeft,
    canScrollRight,
    scroll,
    scrollByViewport,
    checkScroll
  }
} 