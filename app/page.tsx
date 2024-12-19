'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from './components/LanguageProvider'
import { Button } from "@/components/ui/button"
import ParticleBackground from './components/ParticleBackground'

export default function Home() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const content = {
    en: {
      greeting: "Hi, I'm Mehriddin Barnoyev",
      description: "I'm a passionate Frontend Developer and Graphic Designer based in Tashkent, Uzbekistan.",
      cta: "View My Work",
    },
    uz: {
      greeting: "Salom, men Mehriddin Barnoyev",
      description: "Men Toshkent, O'zbekistonda yashovchi Frontend Dasturchi va Grafik Dizaynerman.",
      cta: "Ishlarimni Ko'ring",
    },
  }

  const { greeting, description, cta } = content[language]

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <ParticleBackground />
      <main className="relative z-10 flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold tracking-tighter text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {greeting}
        </motion.h1>
        <motion.p
          className="mt-3 text-xl sm:text-2xl text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild className="mt-8">
            <a href="/portfolio">{cta}</a>
          </Button>
        </motion.div>
      </main>
    </div>
  )
}
