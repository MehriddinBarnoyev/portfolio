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
    title: 'Youtube Clone',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    image: 'https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500',
    technologies: ['React','Tailwind CSS', 'Bootstrap' ,'Node.js', 'MongoDB'],
    liveUrl: 'https://youtube-c-lone-over-done.vercel.app/',
    githubUrl: 'https://github.com/MehriddinBarnoyev/YoutubeCLoneOverDone',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates',
    image: 'https://storage.googleapis.com/profit-prod/wp-content/uploads/2022/07/d4eaf149-task-management.jpg  ',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://pdp-lesson10-part1.vercel.app/',
    githubUrl: 'https://github.com/MehriddinBarnoyev/pdpLesson10_Part1',
  },
  {
    id: 3,
    title: 'Express 24 clone',
    description: 'A responsive weather dashboard with location-based forecasts',
    image: 'https://i.ytimg.com/vi/Br6L0qP7iPQ/maxresdefault.jpg',
    technologies: ['React', 'Redux', 'OpenWeatherMap API', 'Chart.js'],
    liveUrl: 'https://poetic-conkies-baaaed.netlify.app/dashboard/qoshish/taom',
    githubUrl: 'https://github.com/MehriddinBarnoyev/PDP_M2_L10',
  },
  {
    id: 4,
    title: 'E-commerce',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    image: 'https://marketingreport.one/Article%20Images/Key%20Industy%20Images/e_commerce_Marketing_Report.jpg',
    technologies: ['Next', 'Shadcn UI', 'Fast API', 'Chart.js', "Socket.io", "Docer"],
    liveUrl: 'https://poetic-conkies-baaaed.netlify.app/dashboard/qoshish/taom',
    githubUrl: 'https://github.com/MehriddinBarnoyev/e.market',
  },
]

export default function Portfolio() {
  const { language } = useLanguage()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  console.log(hoveredProject);
  

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
