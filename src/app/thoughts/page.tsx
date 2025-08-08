"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from 'framer-motion';
import Head from "next/head";

const thoughts = [
  {
    slug: "the-ai-hype-train",
    title: "The AI Hype Train: Are We All Aboard?",
    date: "August 18, 2025",
    tags: ["AI", "Technology", "Marketing"],
    excerpt: "AI won't replace you, but the person who knows how to use it might. Or will they? A look past the marketing hype and into the real-world costs and applications of artificial intelligence.",
  },
  {
    slug: "the-illusion-of-more",
    title: "The Illusion of More",
    date: "August 05, 2025",
    tags: ["Philosophy", "Maya", "Life"],
    excerpt: "You get the things you want, the things you need, yet satisfaction remains a distant shore. A reflection on the endless chase for more and the nature of Maya.",
  },
  {
    slug: "the-human-spark",
    title: "The Human Spark in a Digital World",
    date: "July 27, 2025",
    tags: ["Art", "Humanity", "Poetry"],
    excerpt: "Learning tech feels like a survival skill. But is that what makes us human? A thought on how art, poetry, and music are the true expressions of our humanity.",
  },
  {
    slug: "the-hidden-cost-of-ai",
    title: "The Hidden Cost of AI",
    date: "July 12, 2025",
    tags: ["AI", "Environment", "Technology"],
    excerpt: "Behind the magic of AI lies a world of data centers, energy consumption, and e-waste. Let's look at the environmental impact that we don't often talk about.",
  }
];

export default function ThoughtsPage() {
  return (
    <>
      <Head>
        <title>Thoughts | Harsh Parmar</title>
        <meta name="description" content="A collection of musings and articles by Harsh Parmar on minimalism, programming, philosophy, and well-being." />
      </Head>
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
    </>
  );
}
