"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from 'framer-motion';

const thoughts = [
  {
    slug: "the-elegance-of-less",
    title: "The Elegance of Less",
    date: "October 26, 2023",
    tags: ["Minimalism", "Philosophy"],
    excerpt: "Exploring how the principle of 'less is more' applies not just to our physical possessions, but to our code, our relationships, and our mental space.",
  },
  {
    slug: "code-as-poetry",
    title: "Code as Poetry",
    date: "September 15, 2023",
    tags: ["Programming", "Poetry"],
    excerpt: "A reflection on the similarities between writing elegant code and crafting a beautiful poem. Both require precision, structure, and a deep understanding of the medium.",
  },
  {
    slug: "backend-as-foundation",
    title: "The Backend as a Foundation",
    date: "August 01, 2023",
    tags: ["SpringBoot", "Java", "Architecture"],
    excerpt: "Why a strong, well-architected backend is the unseen hero of any successful application. A dive into the principles of building scalable and secure systems.",
  },
  {
    slug: "finding-stillness",
    title: "Finding Stillness in a Digital World",
    date: "July 22, 2023",
    tags: ["Thoughts", "Well-being", "Digital Minimalism"],
    excerpt: "Navigating the constant stream of information and finding moments of quiet focus is a modern superpower. Here are some strategies that have helped me.",
  }
];

export default function ThoughtsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.header 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="font-headline text-5xl md:text-7xl mb-4">Thoughts</h1>
        <p className="text-xl text-muted-foreground">A collection of musings and articles.</p>
      </motion.header>

      <div className="max-w-3xl mx-auto space-y-8">
        {thoughts.map((thought, index) => (
           <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
           >
            <Link href={`/thoughts/${thought.slug}`}>
              <Card className="hover:border-primary transition-colors duration-300 group">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl group-hover:text-primary transition-colors">{thought.title}</CardTitle>
                      <CardDescription>{thought.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">{thought.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                      <div className="flex flex-wrap gap-2">
                      {thought.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                      </div>
                  </CardFooter>
              </Card>
            </Link>
           </motion.div>
        ))}
      </div>
    </div>
  );
}
