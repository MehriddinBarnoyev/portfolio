'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../components/LanguageProvider'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    description: 'Learn the basics of Next.js and how to set up your first project',
    date: '2023-05-15',
    category: 'Web Development',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Mastering CSS Grid Layout',
    description: 'Dive deep into CSS Grid and learn how to create complex layouts with ease',
    date: '2023-06-02',
    category: 'CSS',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Introduction to React Hooks',
    description: 'Understand the power of React Hooks and how they can simplify your components',
    date: '2023-06-20',
    category: 'React',
    readTime: '10 min read',
  },
]

export default function Blog() {
  const { language } = useLanguage()
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const content = {
    en: {
      title: 'Blog',
      description: 'Thoughts, ideas, and insights on web development and design',
      readMore: 'Read More',
    },
    uz: {
      title: 'Blog',
      description: 'Veb-ishlab chiqish va dizayn haqida fikrlar, g\'oyalar va tushunchalar',
      readMore: 'Ko\'proq o\'qish',
    },
  }

  const { title, description, readMore } = content[language]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="text-xl text-center text-muted-foreground mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredPost(post.id)}
            onHoverEnd={() => setHoveredPost(null)}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.id}`}>{readMore}</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

