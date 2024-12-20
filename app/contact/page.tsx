'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../components/LanguageProvider'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const { language } = useLanguage()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const content = {
    en: {
      title: 'Contact Me',
      description: 'Feel free to reach out if you have any questions or opportunities!',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      submitButton: 'Send Message',
      successMessage: 'Message sent successfully!',
      errorMessage: 'There was an error sending your message. Please try again.',
    },
    uz: {
      title: 'Men bilan bog\'laning',
      description: 'Savollaringiz yoki imkoniyatlaringiz bo\'lsa, men bilan bog\'lanishingiz mumkin!',
      namePlaceholder: 'Ismingiz',
      emailPlaceholder: 'Elektron pochtangiz',
      messagePlaceholder: 'Xabaringiz',
      submitButton: 'Xabar yuborish',
      successMessage: 'Xabar muvaffaqiyatli yuborildi!',
      errorMessage: 'Xabarni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.',
    },
  }

  const { title, description, namePlaceholder, emailPlaceholder, messagePlaceholder, submitButton, successMessage, errorMessage } = content[language]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast({
          title: successMessage,
          description: new Date().toLocaleTimeString(),
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: errorMessage,
        description: new Date().toLocaleTimeString(),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder={namePlaceholder}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder={emailPlaceholder}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Textarea
                name="message"
                placeholder={messagePlaceholder}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : submitButton}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

