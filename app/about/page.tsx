'use client';

import { motion } from "framer-motion";
import { useLanguage } from "../components/LanguageProvider";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      intro:
        "Hi, I'm Mehriddin Barnoyev. I'm a passionate Frontend Developer based in Tashkent.",
      background:
        "With over 3 years of experience in web development, I specialize in creating responsive and user-friendly web applications. My journey in tech began with a strong passion for creative problem-solving, leading me to excel in both frontend development and UI/UX design.",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "Responsive Design", level: 92 },
        { name: "Redux", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "Webpack", level: 70 },
        { name: "Jest/React Testing Library", level: 78 },
      ],
      education: [
        {
          degree: "Full Stack Developer",
          school: "Mohirdev online ta'lim platformasi",
          year: "2022",
        },
        {
          degree: "Frontend Developer",
          school: "PDP academy",
          year: "2023",
        },
        {
          degree: "Software Frontend Developer",
          school: "PDP University",
          year: "2023 - Present",
        },
      ],
      experience: [
        {
          position: "Frontend Mentor",
          company: "PDP University",
          period: "2022 - 2023",
        },
        {
          position: "Frontend Developer",
          company: "Freelance Projects",
          period: "2023 - Present",
        },
      ],
    },
    uz: {
      title: "Men Haqimda",
      intro:
        "Salom, men Mehriddin Barnoyev. Men Toshkentda joylashgan ishtiyoqli Frontend Dasturchiman.",
      background:
        "Veb-ishlab chiqish sohasida 3 yildan ortiq tajribaga ega bo'lib, men moslashuvchan va foydalanuvchilarga qulay veb-ilovalarni yaratishga ixtisoslashganman. Texnologiya sohasidagi mening sayohatim ijodiy muammolarni hal qilishga bo'lgan kuchli ishtiyoqdan boshlangan, bu esa meni frontend dasturlash va UI/UX dizaynda mukammallikka erishishga olib keldi.",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "Moslashuvchan Dizayn", level: 92 },
        { name: "Redux", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "Webpack", level: 70 },
        { name: "Jest/React Testing Library", level: 78 },
      ],
      education: [
        {
          degree: "Full Stack Dasturchi",
          school: "Mohirdev online ta'lim platformasi",
          year: "2022",
        },
        {
          degree: "Frontend Dasturchi",
          school: "PDP academy",
          year: "2023",
        },
        {
          degree: "Dasturiy ta'minot Frontend Dasturchisi",
          school: "PDP University",
          year: "2023 - Hozirgi kungacha",
        },
      ],
      experience: [
        {
          position: "Frontend o'qituvchi",
          company: "Dizayn Agentligi, O'zbekiston",
          period: "2022 - 2023",
        },
        {
          position: "Frontend Dasturchi",
          company: "Frilanser Loyihalar",
          period: "2023 - Hozirgi kungacha",
        },
      ],
    },
  };

  const { title, intro, background, skills, education, experience } =
    content[language];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-background to-secondary/20">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{language === 'en' ? 'Introduction' : 'Kirish'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{intro}</p>
              <p className="text-base text-muted-foreground">{background}</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{language === 'en' ? 'Skills' : 'Ko\'nikmalar'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{language === 'en' ? 'Education' : 'Ta\'lim'}</CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <Badge variant="secondary" className="mt-1">{edu.year}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:col-span-2"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{language === 'en' ? 'Experience' : 'Tajriba'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-lg">{exp.position}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <Badge variant="outline" className="mt-1">{exp.period}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

