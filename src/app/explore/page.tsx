
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, FileText, GitBranch, Shield, Terminal, Users } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

const projectFeatures = [
    {
        title: "Terminal",
        href: "/terminal",
        icon: <Terminal className="h-6 w-6" />,
        description: "A command-line interface to navigate the website."
    },
    {
        title: "Social Platform",
        href: "/social-platform",
        icon: <Users className="h-6 w-6" />,
        description: "A conceptual demo of a minimalist social feed."
    },
    {
        title: "RyuVerse Versions",
        href: "https://sites.google.com/view/ryuverse/version",
        icon: <GitBranch className="h-6 w-6" />,
        description: "See the evolution of this website across different versions.",
        external: true
    },
    {
        title: "Sign In / Sign Up",
        href: "/signin",
        icon: <Users className="h-6 w-6" />,
        description: "Access user-specific features and content."
    }
];

const siteInfo = [
    {
        title: "About This Website",
        href: "/about-website",
        description: "The tech stack and philosophy behind RyuVerse."
    },
    {
        title: "Disclaimer",
        href: "/disclaimer",
        description: "Important legal disclaimers for the site."
    },
    {
        title: "Terms & Conditions",
        href: "/terms",
        description: "The rules and guidelines for using this website."
    },
    {
        title: "Credit / Content Removal",
        href: "/credit-removal",
        description: "Policy on attribution and content removal."
    },
    {
        title: "Report an Issue",
        href: "/other-issue",
        description: "Found a bug? Let me know here."
    }
]

function TerminalDialog() {
    const [username, setUsername] = useState('');
    const router = useRouter();

    const handleLaunch = () => {
        const params = new URLSearchParams();
        if (username) {
            params.set('username', username);
        }
        router.push(`/terminal?${params.toString()}`);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="h-full hover:border-primary transition-colors duration-300 group flex flex-col cursor-pointer">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <Terminal className="h-6 w-6" />
                                Terminal
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">A command-line interface to navigate the website.</p>
                        </CardContent>
                    </Card>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-headline text-2xl">Launch Terminal</DialogTitle>
                    <DialogDescription>
                        Enter a username to personalize your session. This is optional.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Username
                        </Label>
                        <Input 
                            id="name" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="col-span-3"
                            placeholder="guest"
                        />
                    </div>
                </div>
                <p className="text-xs text-muted-foreground px-6">
                    <strong>Disclaimer:</strong> To determine your location for the welcome message, your IP address will be used. No data is stored.
                </p>
                <DialogFooter>
                    <Button onClick={handleLaunch}>Launch Terminal</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default function ExplorePage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.header 
                className="text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="font-headline text-5xl md:text-7xl mb-4">Explore More</h1>
                <p className="text-xl text-muted-foreground">A collection of additional resources, project insights, and site information.</p>
            </motion.header>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h2 className="font-headline text-3xl md:text-4xl text-center mb-8">Project Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {projectFeatures.map((item) => (
                        item.href === "/terminal" ? (
                            <TerminalDialog key={item.title} />
                        ) : (
                            <Link href={item.href} key={item.title} target={item.external ? '_blank' : '_self'} rel={item.external ? 'noopener noreferrer' : ''}>
                                <Card className="h-full hover:border-primary transition-colors duration-300 group flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3">
                                            {item.icon}
                                            {item.title}
                                            {item.external && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    ))}
                </div>
            </motion.section>

            <motion.section 
                className="mt-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 className="font-headline text-3xl md:text-4xl text-center mb-8">Site Information</h2>
                 <div className="max-w-3xl mx-auto space-y-4">
                    {siteInfo.map((item) => (
                       <Link href={item.href} key={item.title}>
                         <Card className="hover:border-primary transition-colors duration-300 group">
                            <CardContent className="p-4 flex justify-between items-center">
                               <div>
                                 <h3 className="font-semibold text-foreground">{item.title}</h3>
                                 <p className="text-sm text-muted-foreground">{item.description}</p>
                               </div>
                               <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </CardContent>
                         </Card>
                       </Link>
                    ))}
                 </div>
            </motion.section>
        </div>
    )
}
