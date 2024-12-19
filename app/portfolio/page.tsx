'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../components/LanguageProvider'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitlabIcon as GitHubIcon, ExternalLinkIcon } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://ecommerce-project.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-project',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://task-management-app.com',
    githubUrl: 'https://github.com/yourusername/task-management-app',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['React', 'Redux', 'OpenWeatherMap API', 'Chart.js'],
    liveUrl: 'https://weather-dashboard-project.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
  },
]

export default function Portfolio() {
  const { language } = useLanguage()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const content = {
    en: {
      title: 'My Portfolio',
      description: 'Check out some of my recent projects',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
    },
    uz: {
      title: 'Mening Portfoliom',
      description: 'Mening so\'nggi loyihalarimni ko\'ring',
      liveDemo: 'Jonli Demo',
      sourceCode: 'Manba Kodi',
    },
  }

  const { title, description, liveDemo, sourceCode } = content[language]

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
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    {liveDemo}
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="mr-2 h-4 w-4" />
                    {sourceCode}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
