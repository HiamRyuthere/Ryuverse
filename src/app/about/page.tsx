
"use client";

import Image from "next/image";
import Link from "next/link";
import AcademicTimeline from "@/components/academic-timeline";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Metadata } from 'next';
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Harsh Parmar</title>
        <meta name="description" content="Learn more about Harsh Parmar, a minimalist, poet, and programmer. Discover his story, philosophy, and academic journey." />
      </Head>
      <div className="flex min-h-[calc(100vh-theme(spacing.14))] flex-col items-center justify-center p-4">
        <div className="container mx-auto">
          <div className="grid max-w-5xl mx-auto grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div 
              className="order-2 md:order-1 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <header>
                    <h1 className="font-headline text-5xl md:text-7xl mb-4">About Me</h1>
                </header>
                <article className="prose prose-invert lg:prose-xl text-muted-foreground space-y-4">
                    <p>
                        My name is Harsh Parmar, and I navigate the world through three core lenses: minimalism, poetry, and programming. I believe in the power of simplicity, not as a lack of something, but as a path to clarity and purpose.
                    </p>
                    <p>
                        As a programmer, I strive to write code that is not just functional, but also clean, efficient, and elegant. I see coding as a craft, a way to build solutions that are as beautiful in their logic as they are in their execution.
                    </p>
                    <p>
                        As a poet, I find beauty in the spaces between words, in the rhythm of language, and in the distillation of complex emotions into their simplest forms. This spills over into my life and my work, pushing me to find the essential and discard the superfluous.
                    </p>
                </article>
                 <Button asChild size="lg">
                    <Link href="/resume">
                        <Download className="mr-2 h-5 w-5" />
                        Download Resume
                    </Link>
                </Button>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <Image
                    src="/stand.jpeg"
                    alt="Harsh Parmar"
                    width={400}
                    height={500}
                    className="rounded-xl object-cover shadow-lg"
                    data-ai-hint="man portrait"
                />
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.section 
        className="py-16 md:py-24 border-t border-border bg-secondary/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">My Academic Journey</h2>
          </div>
          <AcademicTimeline />
        </div>
      </motion.section>

      <motion.section 
        className="py-16 md:py-24 border-t border-border"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-4xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                     <h2 className="font-headline text-4xl mb-4">What is Ryu?</h2>
                     <div className="prose prose-invert lg:prose-xl text-muted-foreground space-y-4">
                        <p>
                            Ryu is a name I gave to myself. It was originally inspired by the character 'L' from the anime <i>Death Note</i>, who was known for his work and intellect rather than his true identity. I resonate with this idea—that a person should be known for their thoughts, personality, and contributions, not just their birth name.
                        </p>
                        <p>
                            Over time, the meaning of 'Ryu' has evolved for me. It now represents the best version of oneself. It's not just a name; it's a state of being, a position to strive for.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 italic">
                        पवनः पवतामस्मि रामः शस्त्रभृतामहम् | <br />
                        <span className="text-sm not-italic">"Of purifiers I am the wind; of the wielders of weapons I am Rama." - Bhagavad Gita 10.31</span>
                        </blockquote>
                        <p>
                            Just as Shree Ram represents the ideal man, 'Ryu' represents the state of being at your personal peak.
                        </p>
                     </div>
                </div>
                 <div>
                    <h2 className="font-headline text-4xl mb-4">What is RyuVerse?</h2>
                    <div className="prose prose-invert lg:prose-xl text-muted-foreground space-y-4">
                        <p>
                            RyuVerse is my personal digital platform. It's the universe where I share my thoughts, showcase my work, and publish my projects. 
                        </p>
                        <p>
                           Most of the projects developed under the RyuVerse banner are open-source, reflecting a commitment to collaboration and shared knowledge. It's a space where my ideas on technology, minimalism, and philosophy come together.
                        </p>
                    </div>
                 </div>
           </div>
           <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/explore">Explore the RyuVerse</Link>
                </Button>
           </div>
        </div>
      </motion.section>
    </>
  );
}
