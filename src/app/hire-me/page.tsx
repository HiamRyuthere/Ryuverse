
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";

const proBonoCauses = [
  {
    name: "Environment",
    description: "Supporting initiatives focused on climate action, sustainability, and the protection of our planet's ecosystems. Technology can play a crucial role in monitoring, analysis, and promoting environmental awareness.",
    href: "https://www.un.org/en/climatechange/what-is-climate-change",
  },
  {
    name: "Humanism",
    description: "Contributing to projects that uphold human dignity, rights, and ethical progress. I believe in leveraging technology to foster a more just, compassionate, and equitable global society.",
    href: "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
  },
  {
    name: "Philosophy",
    description: "Collaborating with organizations that promote wisdom, introspection, and philosophical inquiry. I am passionate about making timeless teachings, like those of Advaita Vedanta, accessible through modern digital platforms.",
    href: "https://www.acharyaprashant.org",
  }
];

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function HireMePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.header 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-headline text-5xl md:text-7xl mb-4">Hire Me</h1>
        <p className="text-xl text-muted-foreground">Let's build something meaningful together.</p>
      </motion.header>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        {...sectionAnimation}
      >
        <Card className="border-green-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Why You Should Hire Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>I bring a unique blend of technical expertise and a philosophical approach to my work. My focus is on creating solutions that are not just functional, but also elegant, clean, and built to last.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Clean & Minimalist Code:</strong> I write efficient, readable, and maintainable code, reducing complexity and long-term costs.</li>
              <li><strong>Full-Stack Proficiency:</strong> From robust Spring Boot backends to responsive Next.js frontends, I can handle the entire development lifecycle.</li>
              <li><strong>Problem-Solver's Mindset:</strong> I excel at breaking down complex problems and architecting solutions that are both scalable and secure.</li>
              <li><strong>Design Sensibility:</strong> I value user experience and create intuitive, aesthetically pleasing interfaces.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Ensuring a Good Fit
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
              <p>To create the best work, a strong partnership is key. I thrive in environments built on mutual respect, clear communication, and shared values. To ensure we're aligned, I typically avoid projects that:</p>
             <ul className="list-disc pl-5 space-y-2">
              <li>Are purely profit-driven with no regard for ethical considerations.</li>
              <li>Lack a clear vision or operate in a chaotic, unstructured work environment.</li>
              <li>Prioritize speed over quality, leading to technical debt and poor user experience.</li>
              <li>Involve industries I'm not comfortable with, such as gambling, predatory finance, or anything that harms society or the environment.</li>
             </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.section 
        className="text-center bg-card/50 border rounded-lg p-8"
        {...sectionAnimation}
      >
          <h2 className="font-headline text-3xl mb-4">Technology for a Better World</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              I am passionate about using my skills for good. I am willing to work for free for non-profit organizations dedicated to the following causes. If your project aligns with these values, please reach out.
          </p>
          <div className="flex justify-center flex-wrap gap-4 text-lg">
            {proBonoCauses.map((cause, index) => (
              <Dialog key={cause.name}>
                <DialogTrigger asChild>
                  <span className="text-primary hover:underline cursor-pointer">{cause.name}</span>
                </DialogTrigger>
                {index < proBonoCauses.length -1 && <span className="text-muted-foreground">&bull;</span>}
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-2xl">{cause.name}</DialogTitle>
                    <DialogDescription>
                      {cause.description}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button asChild>
                      <a href={cause.href} target="_blank" rel="noopener noreferrer">Learn More</a>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
      </motion.section>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
          <Button asChild size="lg">
              <Link href="/contact">Contact Me</Link>
          </Button>
      </motion.div>

    </div>
  );
}
