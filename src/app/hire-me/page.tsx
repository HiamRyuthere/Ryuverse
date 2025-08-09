
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, Sparkles, Handshake, Sprout, Heart, Brain, ExternalLink, CheckCircle, XCircle, Code, Telescope, Zap, Shield } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";
import Head from "next/head";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

const hireReasons = [
    { icon: <Zap className="h-5 w-5 text-green-400" />, text: "Passionate and curious developer, enthusiastic about building things that work well." },
    { icon: <Code className="h-5 w-5 text-green-400" />, text: "Primary expertise in robust backends with Spring Boot, with a strong foundation in HTML, CSS, and JavaScript." },
    { icon: <Telescope className="h-5 w-5 text-green-400" />, text: "A deep desire to learn, grow, and build feature-rich products." }
];

const notAlignReasons = [
    { icon: <Shield className="h-5 w-5 text-red-400" />, text: "Projects in ethically ambiguous domains. I am committed to working on projects that have a positive and clear purpose." },
    { icon: <Handshake className="h-5 w-5 text-red-400" />, text: "A culture that doesn't prioritize respect, curiosity, and a shared commitment to positive impact." },
];


export default function HireMePage() {
  return (
    <>
    <Head>
        <title>Hire Me | Harsh Parmar</title>
        <meta name="description" content="A transparent look at my skills, my approach to work, and what drives me as a developer." />
    </Head>
    <div className="container mx-auto px-4 py-16">
      <motion.header 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-headline text-5xl md:text-7xl mb-4">Hire Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A transparent look at where I shine and what I value in a project.</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div {...sectionAnimation}>
              <Card className="h-full border-green-500/50">
                  <CardHeader>
                      <div className="flex items-center gap-4">
                          <ThumbsUp className="h-8 w-8 text-green-500" />
                          <CardTitle className="font-headline text-3xl">Why You Should Hire Me</CardTitle>
                      </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <ul className="space-y-3 text-muted-foreground">
                        {hireReasons.map((reason, index) => (
                           <li key={index} className="flex items-start gap-3">
                                {reason.icon}
                                <span>{reason.text}</span>
                           </li>
                        ))}
                      </ul>
                  </CardContent>
              </Card>
          </motion.div>
          <motion.div {...sectionAnimation} transition={{...sectionAnimation.transition, delay: 0.2}}>
               <Card className="h-full border-red-500/50">
                  <CardHeader>
                      <div className="flex items-center gap-4">
                        <ThumbsDown className="h-8 w-8 text-red-500" />
                        <CardTitle className="font-headline text-3xl">Where We Might Not Align</CardTitle>
                      </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">To ensure we both succeed, it's important to be upfront. We may not be the best fit for:</p>
                      <ul className="space-y-3 text-muted-foreground">
                        {notAlignReasons.map((reason, index) => (
                           <li key={index} className="flex items-start gap-3">
                                {reason.icon}
                                <span>{reason.text}</span>
                           </li>
                        ))}
                      </ul>
                  </CardContent>
              </Card>
          </motion.div>
      </div>
      
      <motion.section 
        className="text-center bg-card/50 border rounded-lg p-8 lg:p-12"
        {...sectionAnimation}
      >
          <div className="flex justify-center mb-6">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-4xl mb-4">Technology for a Better World</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              I am passionate about using technology as a force for good. I offer my skills pro bono to non-profit organizations and projects that are making a positive impact in the fields of <strong className="text-green-400">Environmentalism</strong>, <strong className="text-sky-400">Humanism</strong>, and <strong className="text-amber-400">Philosophy</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8 max-w-4xl mx-auto">
              <div className="bg-background/50 p-4 rounded-lg flex flex-col">
                  <h3 className="font-semibold flex items-center gap-2 mb-2"><Sprout className="text-green-400"/>Environmentalism</h3>
                  <p className="text-sm text-muted-foreground flex-grow">Projects focused on conservation, climate action, and sustainability.</p>
                  <Button variant="link" asChild className="p-0 h-auto justify-start mt-2 text-green-400">
                    <a href="https://www.un.org/en/climatechange/what-is-climate-change" target="_blank" rel="noopener noreferrer">Learn More <ExternalLink className="ml-2 h-4 w-4"/></a>
                  </Button>
              </div>
              <div className="bg-background/50 p-4 rounded-lg flex flex-col">
                  <h3 className="font-semibold flex items-center gap-2 mb-2"><Heart className="text-sky-400"/>Humanism</h3>
                  <p className="text-sm text-muted-foreground flex-grow">Initiatives that promote human well-being, ethics, and the beauty of being human.</p>
                   <Button variant="link" asChild className="p-0 h-auto justify-start mt-2 text-sky-400">
                    <a href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" target="_blank" rel="noopener noreferrer">Learn More <ExternalLink className="ml-2 h-4 w-4"/></a>
                  </Button>
              </div>
               <div className="bg-background/50 p-4 rounded-lg flex flex-col">
                  <h3 className="font-semibold flex items-center gap-2 mb-2"><Brain className="text-amber-400"/>Philosophy</h3>
                  <p className="text-sm text-muted-foreground flex-grow">Work that makes wisdom and critical thinking more accessible to all.</p>
                   <Button variant="link" asChild className="p-0 h-auto justify-start mt-2 text-amber-400">
                    <a href="https://acharyaprashant.org/en/articles/what-really-is-vedanta-is-it-relevant-today-1_59c3e1f" target="_blank" rel="noopener noreferrer">Learn More <ExternalLink className="ml-2 h-4 w-4"/></a>
                  </Button>
               </div>
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <Button asChild>
                <Link href="/contact">Discuss a Project for Good</Link>
            </Button>
          </div>
      </motion.section>

    </div>
    </>
  );
}
