
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";

const contactMethods = [
    {
        icon: <Mail className="h-8 w-8 text-primary" />,
        title: "Email",
        content: "The most reliable way to reach me. I make it a point to reply within 24-48 hours.",
        href: "mailto:hiamryu@outlook.com",
        cta: "Send an Email",
        external: true,
    },
    {
        icon: <Linkedin className="h-8 w-8 text-primary" />,
        title: "LinkedIn",
        content: "For professional inquiries, collaborations, and to view my detailed work experience.",
        href: "https://linkedin.com/in/Harsh-Parmar-2212b2201",
        cta: "Connect on LinkedIn",
        external: true,
    },
    {
        icon: <Github className="h-8 w-8 text-primary" />,
        title: "GitHub",
        content: "To see my code, check out my projects, and explore my contributions to the open-source world.",
        href: "https://github.com/hiamryuthere",
        cta: "Follow on GitHub",
        external: true,
    },
    {
        icon: <Instagram className="h-8 w-8 text-primary" />,
        title: "Instagram",
        content: "A glimpse into my visual world, creative pursuits, and daily life.",
        href: "https://instagram.com/Mayimweird",
        cta: "Follow on Instagram",
        external: true,
    },
     {
        icon: <Send className="h-8 w-8 text-primary" />,
        title: "Telegram",
        content: "For quick messages and informal chats, feel free to reach out on Telegram.",
        href: "https://t.me/your_telegram_username",
        cta: "Message on Telegram",
        external: true,
    },
]

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.header 
                className="text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="font-headline text-5xl md:text-7xl mb-4">Get in Touch</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    I'm currently available for freelance work and open to discussing new projects. Whether you have a question or just want to say hi, my inbox is always open.
                </p>
            </motion.header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {contactMethods.map((method, index) => (
                    <motion.div
                        key={method.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                         <Link href={method.href} target={method.external ? '_blank' : '_self'} rel="noopener noreferrer" className="h-full block">
                            <Card className="h-full hover:border-primary transition-colors duration-300 group flex flex-col">
                                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                    {method.icon}
                                    <CardTitle className="font-headline text-2xl">{method.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{method.content}</p>
                                </CardContent>
                                <div className="p-6 pt-0">
                                   <div className="text-primary font-medium flex items-center group-hover:underline">
                                       {method.cta}
                                       <Send className="ml-2 h-4 w-4" />
                                   </div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
