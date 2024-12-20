import Link from 'next/link'
import { GithubIcon as GitHub, Linkedin, Dribbble, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="https://github.com/MehriddinBarnoyev">
            <Button variant="ghost" size="icon">
              <GitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/mehriddin-barnoyev-78a016294/">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        
         
          <Link href="https://www.instagram.com/barnoyev_0806/">
            <Button variant="ghost" size="icon">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
          </Link>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
           Mehriddin
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/MehriddinBarnoyev/portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer

