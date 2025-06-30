'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Play, Info, ChevronRight, ChevronLeft } from 'lucide-react'
import toast from 'react-hot-toast'
import { ThemeProvider, useTheme } from '@/components/ThemeProvider'
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider'
import { validateEmail, validateUsername } from '@/lib/validation'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { trendingContent, faqs } from '@/lib/mockData'
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [username, setUsername] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const router = useRouter()
  const [isLeftHovered, setIsLeftHovered] = useState(false)
  const [isRightHovered, setIsRightHovered] = useState(false)

  // Configuration pour le scroll horizontal
  const CARD_WIDTH = 180
  const GAP = 100
  const VISIBLE = 5
  
  const { rowRef, canScrollLeft, canScrollRight, scroll } = useHorizontalScroll({
    cardWidth: CARD_WIDTH,
    gap: GAP,
    visibleCards: VISIBLE
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('netflix-lang')
      if (lang === 'en' || lang === 'fr') setLanguage(lang)
    }
  }, [])

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as 'fr' | 'en'
    setLanguage(lang)
    localStorage.setItem('netflix-lang', lang)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validation = validateEmail(email)
    if (!validation.isValid) {
      toast.error(validation.error!)
      return
    }

    setIsLoading(true)

    try {
      localStorage.setItem('netflix-email', email.trim())
      toast.success(`Bienvenue !`)
      router.push('/browse')
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    const validation = validateUsername(username)
    if (!validation.isValid) {
      toast.error(validation.error!)
      return
    }

    setIsSigningIn(true)

    try {
      // Simulation d'une connexion réussie
      localStorage.setItem('netflix-user', username.trim())
      toast.success(`Bienvenue ${username.trim()} !`)
      setShowSignInModal(false)
      setUsername('')
      router.push('/browse')
    } catch (error) {
      toast.error('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setIsSigningIn(false)
    }
  }

  // Icônes SVG pour les cartes de fonctionnalités
  const featureIcons = {
    tv: (
      <svg width="56" height="56" viewBox="0 0 64 64">
        <defs>
          <radialGradient id="tv-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb6ff" />
            <stop offset="100%" stopColor="#7c3aed" />
          </radialGradient>
        </defs>
        <rect x="8" y="16" width="48" height="32" rx="8" fill="url(#tv-grad)" />
        <rect x="20" y="48" width="24" height="4" rx="2" fill="#fff" />
      </svg>
    ),
    download: (
      <svg width="56" height="56" viewBox="0 0 64 64">
        <defs>
          <radialGradient id="dl-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb6ff" />
            <stop offset="100%" stopColor="#f472b6" />
          </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#dl-grad)" />
        <path d="M32 20v16m0 0l-8-8m8 8l8-8" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    mobile: (
      <svg width="56" height="56" viewBox="0 0 64 64">
        <defs>
          <radialGradient id="tel-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b6e0ff" />
            <stop offset="100%" stopColor="#6366f1" />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="48" rx="20" ry="8" fill="url(#tel-grad)" />
        <rect x="16" y="16" width="32" height="24" rx="6" fill="#fff" />
        <rect x="24" y="24" width="16" height="8" rx="2" fill="#23243a" />
      </svg>
    ),
    kids: (
      <svg width="56" height="56" viewBox="0 0 64 64">
        <rect x="8" y="24" width="20" height="20" rx="6" fill="#fbbf24" />
        <rect x="36" y="24" width="20" height="20" rx="6" fill="#ef4444" />
        <circle cx="18" cy="34" r="3" fill="#fff" />
        <circle cx="46" cy="34" r="3" fill="#fff" />
      </svg>
    )
  }

  return (
    <div className="bg-black min-h-screen w-full">
      {/* HERO */}
      <div className="relative min-h-[700px] flex flex-col justify-between" style={{ background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(https://assets.nflxext.com/ffe/siteui/vlv3/7e2e2e2e-7e2e-4e2e-8e2e-7e2e2e2e2e2e/7e2e2e2e-7e2e-4e2e-8e2e-7e2e2e2e2e2e_FR-en-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg) center/cover' }}>
        <header className="flex justify-between items-center px-8 pt-6">
          <span className="text-[#e50914] text-4xl font-black tracking-wide">NETFLIX</span>
          <div className="flex items-center gap-4">
            <select className="bg-black/60 border border-gray-500 text-white rounded px-3 py-1 text-base" value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
            <button
              onClick={() => setShowSignInModal(true)}
              className="bg-[#e50914] text-white px-5 py-2 rounded text-base font-semibold hover:bg-[#f40612] transition-colors"
            >
              Sign In
            </button>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4 pt-24 pb-16">
          <h1 className="text-white text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ letterSpacing: '-2px' }}>Unlimited movies, series, and more</h1>
          <h2 className="text-white text-2xl font-medium mb-6">Starts at EUR 7.99. Cancel anytime.</h2>
          <p className="text-white text-lg mb-6">Ready to watch? Enter your email to create or restart your membership.</p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center w-full max-w-2xl gap-4">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="flex-1 px-4 py-4 rounded bg-black/60 border border-gray-500 text-white text-lg" style={{ minWidth: 300 }} />
            <button type="submit" className="bg-[#e50914] text-white px-8 py-4 rounded text-xl font-bold flex items-center gap-2" style={{ minWidth: 180 }}>
              Get Started <ChevronRight className="w-6 h-6" />
            </button>
          </form>
        </div>
        {/* Curve Divider */}
        <div className="w-full overflow-hidden leading-none relative -mb-1">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 md:h-32">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#141414" />
                <stop offset="50%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#141414" />
              </linearGradient>
            </defs>
            <path d="M0,0 C480,120 960,0 1440,120 L1440,120 L0,120 Z" fill="url(#curveGradient)" />
          </svg>
        </div>
      </div>

      {/* Ad Banner */}
      <div className="w-full flex justify-center bg-gradient-to-b from-[#141414] to-black py-6">
        <div className="flex items-center gap-4 bg-[#232043] rounded-xl px-6 py-4 shadow-lg">
          <span className="text-3xl">🍿</span>
          <div>
            <div className="text-white font-semibold text-lg">The Netflix you love for just EUR 7.99.</div>
            <div className="text-white text-sm">Get our most affordable, ad-supported plan.</div>
          </div>
          <button className="ml-6 bg-[#353569] text-white px-5 py-2 rounded font-semibold">Learn More</button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[120rem] mx-auto z-[2] box-border -mt-12 px-6 sm:-mt-8 sm:px-8 md:px-20 xl:px-36">

        {/* Trending Now */}
        <section className="py-12">
          <h3 className="text-white text-3xl font-bold mb-8">Trending Now</h3>
          <div className="relative ">
            {/* Left Arrow */}
            <div className={`absolute left-0 top-0 bottom-0 h-full flex items-center z-50 bg-black transition-all duration-500 ease-out ${canScrollLeft ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              style={{ paddingRight: `${CARD_WIDTH * 0.2}px` }}>
              <button
                onClick={() => scroll('left')}
                className="flex items-center justify-center"
                style={{
                  pointerEvents: 'auto',
                  height: '7.5rem',
                  width: '1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0,
                  margin: 0,
                  backgroundColor: 'rgba(20,20,20,0.85)',
                  color: isLeftHovered ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.7)',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                aria-label="Scroll left"
                onMouseEnter={() => setIsLeftHovered(true)}
                onMouseLeave={() => setIsLeftHovered(false)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            {/* Cards Row */}
            <ul
              ref={rowRef}
              className="relative flex m-0 p-0 list-none overflow-x-scroll overflow-y-hidden scrollbar-hide box-border gap-9 scroll-ms-[2.5em]"
              style={{
                WebkitScrollSnapType: 'x mandatory',
                scrollSnapType: 'x mandatory',
                scrollMarginInlineStart: '2.5em',
                width: (CARD_WIDTH + GAP) * 5 + CARD_WIDTH * 0.5,
                maxWidth: '100%',
              }}
            >
              {trendingContent.map((item, idx) => (
                <li
                  key={item.id}
                  className=" flex justify-center flex-shrink-0 scroll-snap-align-start box-border sm:scroll-ms-[2.4rem] md:py-[0.4rem] md:px-[1.375rem] xl:scroll-ms-[2.75rem] xl:py-2 xl:px-[1.375rem] py-[0.3rem] px-[0.625rem] scroll-ms-[2.3rem]"
                  style={{
                    width: CARD_WIDTH,
                    height: 270,
                    listStyle: 'none',
                  }}
                >
                  <button
                    data-uia={`top-10-element-${idx + 1}`}
                    className="relative p-0 border-none rounded-lg transition-transform duration-200 ease-in-out box-border overflow-visible hover:scale-100 hover:z-30 focus:scale-100 focus:z-30 w-full h-full flex flex-col items-stretch justify-end focus:outline-none group"
                    tabIndex={0}
                    style={{ cursor: 'pointer' }}
                    aria-label={item.title}
                  >
                    <div className="relative rounded-lg bg-[#232323] box-border w-[7rem] h-[9.8rem] md:w-[8.75rem] md:h-[12.25rem] xl:w-[11.25rem] xl:h-[15.75rem] overflow-visible shadow-lg flex flex-col justify-end items-stretch transition-transform duration-200 ease-in-out group-hover:scale-105 group-focus:scale-105">
                      {/* Image en background */}
                      <span
                        className="absolute inset-0 bg-cover rounded-lg bg-center z-10 group-hover:z-30 group-focus:z-30 transition-all"
                        style={{ backgroundImage: `url(${item.image})` }}
                        aria-hidden="true"
                      />
                      {/* Numéro en bas à gauche, style Netflix */}
                      <span
                        className="absolute z-20 text-[4rem] md:text-[5rem] xl:text-[6.25rem] bottom-[0.1rem] left-[-0.625rem] md:bottom-0 md:left-[-1.375rem] font-black select-none pointer-events-none group-hover:z-40 group-focus:z-40 transition-all"
                        style={{
                          fontFamily: 'Arial Black, Arial, sans-serif',
                          WebkitTextStroke: '2px #fff',
                          color: '#181818',
                          lineHeight: 1,
                          textShadow: '0 4px 24px #000, 0 0 2px #000',
                        }}
                      >
                        {idx + 1}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
            {/* Right Arrow */}
            <div className={`absolute right-0 top-0 bottom-0 h-full flex items-center z-50 bg-black transition-all duration-500 ease-out ${canScrollRight ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
              style={{ paddingLeft: `${CARD_WIDTH * 0.2}px` }}>
              <button
                onClick={() => scroll('right')}
                className="flex items-center justify-center"
                style={{
                  pointerEvents: 'auto',
                  height: '7.5rem',
                  width: '1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0,
                  margin: 0,
                  backgroundColor: 'rgba(20,20,20,0.85)',
                  color: isRightHovered ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.7)',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                aria-label="Scroll right"
                onMouseEnter={() => setIsRightHovered(true)}
                onMouseLeave={() => setIsRightHovered(false)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* More Reasons to Join */}
        <section className="py-12">
          <h3 className="text-white text-3xl font-bold mb-8">More Reasons to Join</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Enjoy on your TV"
              description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
              icon={featureIcons.tv}
            />
            <FeatureCard
              title="Download your shows to watch offline"
              description="Save your favorites easily and always have something to watch."
              icon={featureIcons.download}
            />
            <FeatureCard
              title="Watch everywhere"
              description="Stream unlimited movies and series on your phone, tablet, laptop, and TV."
              icon={featureIcons.mobile}
            />
            <FeatureCard
              title="Create profiles for kids"
              description="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
              icon={featureIcons.kids}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className=" mx-auto py-12">
          <h3 className="text-white text-3xl font-bold mb-8">Frequently Asked Questions</h3>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-[#222] rounded overflow-hidden transition-colors duration-200${i === 0 ? ' mt-6' : ''}`}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-6 text-left text-white text-xl font-medium transition-colors duration-200 bg-[#222] hover:bg-[#444]">
                  {faq.q}
                  <span
                    className={`text-5xl font-light inline-block transition-transform duration-300 ${faqOpen === i ? 'rotate-45' : 'rotate-0'}`}
                    style={{ display: 'inline-block', lineHeight: 1 }}
                  >
                    +
                  </span>
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-6 text-white text-lg bg-[#222]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black pt-12 pb-8">
          <div className="p-4 mx-auto">
            <p className="mb-8 text-base">
              <a href="#" className="underline text-white font-normal">{t.footer.contact}</a>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 text-base mb-8">
              {t.footer.links.map((col, i) => (
                <div className="flex flex-col space-y-4" key={i}>
                  {col.map((label, j) => (
                    <a href="#" className="underline text-gray-200" key={j}>{label}</a>
                  ))}
                </div>
              ))}
            </div>
            {/* Sélecteur de thème */}
            <div className="flex items-center gap-4 mb-4">
              <select className="bg-black/60 border border-gray-500 text-white rounded px-3 py-1 text-base" value={theme} onChange={e => setTheme(e.target.value as 'light' | 'dark' | 'system')}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
              <span className="text-gray-400 text-sm">{t.footer.country}</span>
            </div>
            <p className="text-gray-500 text-xs">{t.footer.recaptcha}<a href="#" className="underline">{t.footer.learnMore}</a></p>
          </div>
          {/* Sélecteur de langue en bas à gauche */}
          <div className="fixed left-4 bottom-4 z-50">
            <select className="bg-black/60 border border-gray-500 text-white rounded px-3 py-1 text-base" value={language} onChange={e => setLanguage(e.target.value as 'fr' | 'en')}>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </footer>
      </div>

      {/* Sign In Modal */}
      {showSignInModal && (
        <>
          {isSigningIn && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-white text-xl font-semibold">{t.signInModal.loading}</p>
              </div>
            </div>
          )}
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[#141414] rounded-lg p-8 max-w-md w-full border border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-2xl font-bold">{t.signInModal.title}</h2>
                <button 
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-400 hover:text-white text-2xl font-light"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={t.signInModal.placeholder}
                    className="w-full px-4 py-3 rounded bg-[#333] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSigningIn}
                  className="w-full bg-[#e50914] text-white py-3 rounded font-semibold hover:bg-[#f40612] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSigningIn ? t.signInModal.loading : t.signInModal.button}
                </button>
              </form>
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">
                  {t.signInModal.newTo}{' '}
                  <button 
                    onClick={() => setShowSignInModal(false)}
                    className="text-white hover:underline"
                  >
                    {t.signInModal.signup}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
} 