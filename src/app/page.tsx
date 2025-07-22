"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import LogoCloud from '@/components/logo-cloud';
import Link from 'next/link';
import { Palette, Cpu, ExternalLink } from 'lucide-react';
import AnimatedHeadline from '@/components/animated-headline';
import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg role="img" viewBox="0 0 24 24" className="h-8 w-8 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Spring</title>
        <path d="M21.128 15.36s-1.536-1.024-3.072-1.536c-1.024-.512-2.048-1.024-2.56-2.048-.512-1.024-.512-2.048.512-3.072s2.048-1.536 3.072-2.048c1.024-.512 2.56-1.024 2.56-2.048S23.04 0 23.04 0H.96v2.048c0 1.024 1.024 1.536 2.048 2.048 1.024.512 2.048 1.536 2.56 2.56.512 1.024.512 2.56-.512 3.584-1.024 1.024-2.048 1.536-3.072 2.048C1.024 13.312 0 14.336 0 14.336v9.728h2.048c1.024 0 1.536-1.024 2.048-2.048.512-1.024 1.536-2.048 2.56-2.56 1.024-.512 2.56-.512 3.584.512 1.024 1.024 1.536 2.048 2.048 3.072.512 1.024 1.024 2.048 2.048 2.048H24V14.336h-2.872Z"/>
      </svg>
    ),
    title: 'Spring Boot',
    description: 'Powerful Java backend APIs with Spring Security, JPA, etc.',
    learnMoreUrl: 'https://duckduckgo.com/?q=Spring%20Boot',
  },
  {
    icon: (
      <svg role="img" viewBox="0 0 24 24" className="h-8 w-8 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>Python</title>
        <path d="M23.23 8.355c-1.01-.22-1.898-.22-2.864 0-.967.22-1.765.65-2.5.945-.736.295-1.543.685-2.22.99-.676.305-1.423.633-2.058.855-.636.22-1.343.463-1.928.59-.585.125-1.24.22-1.786.22-.547 0-1.13-.095-1.697-.22-.568-.127-1.18-.36-1.71-.59-.53-.23-1.11-.55-1.58-.855-.47-.3-1.01-.67-1.42-.99-.41-.32-1.24-.65-1.78-.945-.54-.29-1.24-.36-1.82-.36h.04c.58 0 1.07.07 1.49.23.42.16.85.4 1.25.7.4.3.78.63 1.13.98.35.35.68.7.98 1.07.3.37.58.74.83 1.12.25.38.46.76.65 1.12.19.36.33.7.46 1.02.13.32.22.6.28.85.06.25.09.47.09.65v.17c0-.12-.02-.25-.05-.38-.03-.13-.08-.26-.14-.4-.12-.28-.3-.56-.52-.86-.22-.3-.49-.6-.8-.91-.31-.31-.67-.62-.98-.88-.31-.26-.6-.44-.8-.53-.2-.09-.32-.12-.32-.12v-.02.02s.1.03.3.11c.2.08.51.25.82.49.31.24.63.52.93.85.3.33.58.67.81 1.02.23.35.43.7.57 1.02.14.32.25.62.3.88.05.26.08.49.08.68 0 .42-.09.83-.28 1.23-.19.4-.46.78-.81 1.13-.35.35-.78.68-1.13.98s-.7.58-1.02.83c-.32.25-.62.46-.86.65-.24.19-.4-.33-.4-.33l.02.02s.16-.14.38-.35c.22-.21.49-.47.78-.77.29-.3.58-.63.85-.98.27-.35.53-.7.75-1.07.22-.37.4-.74.55-1.12.15-.38.26-.76.35-1.12.09-.36.14-.7.14-1.02s-.05-.62-.14-.88c-.09-.26-.22-.49-.38-.68h.02s.1.06.1.06c1.01.22 1.89.22 2.854 0 .964-.22 1.763-.65 2.5-.945.736-.295 1.54-.685 2.22-.99.676-.305 1.42-.633 2.06-.855.635-.22 1.34-.463 1.92-.59.58-.125 1.24-.22 1.78-.22.55 0 1.13.095 1.7.22.57.127 1.18.36 1.71.59.53.23 1.11.55 1.58.855.47.3 1.01.67 1.42.99.41.32 1.24.65 1.78.945.54.29 1.24.36 1.82.36h-.04c-.58 0-1.07-.07-1.49-.23-.42-.16-.85-.4-1.25-.7-.4-.3-.78-.63-1.13-.98-.35-.35-.68-.7-.98-1.07-.3-.37-.58-.74-.83-1.12-.25-.38-.46-.76-.65-1.12a5.9 5.9 0 0 1-.46-1.02c-.13-.32-.22-.6-.28-.85-.06-.25-.09-.47-.09-.65v-.17c0 .12.02.25.05.38.03.13.08.26.14.4.12.28.3.56.52.86.22.3.49.6.8.91.31.31.67.62.98.88.31.26.6.44.8.53.2.09.32.12.32.12v.02-.02s-.1-.03-.3-.11a4.2 4.2 0 0 0-.82-.49c-.31-.24-.63-.52-.93-.85-.3-.33-.58-.67-.81-1.02-.23-.35-.43-.7-.57-1.02-.14-.32-.25-.62-.3-.88-.05-.26-.08-.49-.08-.68 0-.42.09.83.28-1.23-.19-.4.46-.78.81-1.13.35-.35.78-.68-1.13-.98.35-.3.7-.58 1.02-.83.32-.25.62-.46.86-.65.24-.19.4-.33.4-.33l-.02-.02s-.16.14-.38-.35c-.22.21-.49-.47-.78-.77-.29-.3-.58-.63-.85-.98-.27-.35-.53-.7-.75-1.07-.22-.37-.4-.74-.55-1.12-.15-.38-.26-.76-.35-1.12-.09-.36-.14-.7-.14-1.02s.05-.62.14-.88c.09-.26.22-.49.38-.68Z"/>
      </svg>
    ),
    title: 'Python',
    description: 'Versatile scripting for automation, data science, and web backends with libraries like Django and Flask.',
    learnMoreUrl: 'https://duckduckgo.com/?q=Python',
  },
  {
    icon: <Cpu className="h-8 w-8 text-cyan-400" />,
    title: 'Low Level & OS',
    description: 'Strong grasp of C, C++, and core operating system concepts for performance-critical applications.',
    learnMoreUrl: 'https://duckduckgo.com/?q=Low%20Level%20Programming%20and%20Operating%20Systems',
  },
  {
    icon: <Palette className="h-8 w-8 text-rose-400" />,
    title: 'Web Design',
    description: 'Minimalist, responsive, and intuitive web pages like this one, focusing on clean UX/UI.',
    learnMoreUrl: 'https://duckduckgo.com/?q=Web%20Design',
  },
];

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      
      <section className="flex flex-col items-center justify-center text-center min-h-screen">
        <AnimatedHeadline text="Hey, I am Harsh" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A Minimalist, Poet & Programmer.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/hire-me">Hire Me</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </section>

      <motion.section 
        id="hire-me" 
        className="py-16 md:py-24 border-t border-border"
        {...sectionAnimation}
      >
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl">Hire Me For</h2>
          <p className="text-muted-foreground mt-2 text-lg">My skillset for your next project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary transition-colors duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  {service.icon}
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                {service.learnMoreUrl && (
                  <CardFooter>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={service.learnMoreUrl} target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="py-16 md:py-24 border-t border-border"
        {...sectionAnimation}
      >
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl">My Logos</h2>
          <p className="text-muted-foreground mt-2 text-lg">A collection of identity designs.</p>
        </div>
        <LogoCloud />
      </motion.section>
      
    </div>
  );
}
