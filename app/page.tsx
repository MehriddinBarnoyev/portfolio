"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./components/LanguageProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Myimage from "./images/myImage.jpg";

export default function Home() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const content = {
    en: {
      greeting: "Hi, I'm Mehriddin Barnoyev",
      description:
        "I'm a passionate Frontend Developer based in Tashkent and Navoi, Uzbekistan.",
      cta: "View My Work",
    },
    uz: {
      greeting: "Salom, men Mehriddin Barnoyev",
      description:
        "Men Navoiy, Toshkent, O'zbekistonda yashovchi Frontend Dasturchiman",
      cta: "Ishlarimni Ko'ring",
    },
  };

  const { greeting, description, cta } = content[language];

  return (
    <>
      <head>
        <title>Mehriddin Barnoyev Portfolio</title>
        <meta
          name="description"
          content="Mehriddin Barnoyev haqida ma'lumotlar, portfoliolar va xizmatlar haqida o'qing. Frontend va backend loyihalar."
        />
        <meta
          name="keywords"
          content="Frontend, Backend, Mehriddin Barnoyev, Portfolio, IT"
        />
        <meta name="author" content="Mehriddin Barnoyev" />
      </head>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* <ParticleBackground /> */}
        <main className="relative z-10 flex flex-col items-center  w-full flex-1 px-4 sm:px-20 text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={Myimage}
              alt="Mehriddin Barnoyev"
              width={200}
              height={200}
              className="rounded-3xl border-4 border-primary shadow-lg mt-10"
            />
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-6xl font-bold tracking-tighter text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {greeting}
          </motion.h1>
          <motion.p
            className="mt-3 text-xl sm:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild className="mt-8">
              <a href="/portfolio">{cta}</a>
            </Button>
          </motion.div>
        </main>
      </div>
    </>
  );
}
