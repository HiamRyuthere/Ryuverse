
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Palette, BrainCircuit } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";
import Head from "next/head";

const services = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Minimalist Web Development",
    description: "I will design and build a clean, fast, and aesthetically pleasing website for you or your business, just like this one. Focus on exceptional user experience and elegant design.",
    features: [
      "Next.js & React Development",
      "Tailwind CSS for sleek styling",
      "Responsive on all devices",
      "Performance optimization"
    ],
    price: "Starts at $500",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Backend Architecture",
    description: "Need a robust, scalable, and secure backend? I specialize in building powerful systems using Spring Boot and Java for complex applications.",
    features: [
      "RESTful API Development",
      "Spring Security Implementation",
      "Database Design & JPA",
      "Scalable Microservices"
    ],
    price: "Starts at $800",
  },
   {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Code & Philosophy Audit",
    description: "A unique service where I review your project for technical quality, clarity, and purpose. I'll provide actionable feedback to make your code more elegant and maintainable.",
    features: [
      "Code Readability Review",
      "Simplicity & Efficiency Analysis",
      "Architectural Suggestions",
      "Report on 'Code as Poetry' principles"
    ],
    price: "Starts at $250",
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
    <>
    <Head>
        <title>Services | Harsh Parmar</title>
        <meta name="description" content="Offering professional services in minimalist web development, backend architecture with Spring Boot, and unique code & philosophy audits." />
    </Head>
    <div className="container mx-auto px-4 py-16">
      <motion.header 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-headline text-5xl md:text-7xl mb-4">Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Leverage my expertise in technology and design to build something exceptional.</p>
      </motion.header>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        {...sectionAnimation}
      >
        {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
                <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="font-headline text-3xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-3 text-muted-foreground">
                        {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                    <p className="text-lg font-semibold">{service.price}</p>
                    <Button asChild className="w-full">
                        <Link href="/contact">Book a Consultation</Link>
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </motion.div>
      
      <motion.section 
        className="text-center bg-card/50 border rounded-lg p-8"
        {...sectionAnimation}
      >
          <h2 className="font-headline text-3xl mb-4">Pro Bono Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              I am passionate about using my skills for good. I am willing to work for free for non-profit organizations dedicated to causes like Environmentalism, Humanism, and Philosophy. If your project aligns with these values, please reach out.
          </p>
          <Button asChild variant="secondary">
              <Link href="/contact">Discuss a Pro Bono Project</Link>
          </Button>
      </motion.section>

    </div>
    </>
  );
}
