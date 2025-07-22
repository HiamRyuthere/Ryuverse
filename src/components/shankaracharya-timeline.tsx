"use client";

import { motion } from 'framer-motion';
import { BookText, Compass, Mountain, Users, MessageSquare } from 'lucide-react';
import type { ReactNode } from 'react';

type TimelineEvent = {
    year: string;
    title: string;
    description: string;
};

interface ShankaracharyaTimelineProps {
    timelineEvents: TimelineEvent[];
}

const icons: Record<number, ReactNode> = {
    0: <Mountain />,
    1: <Users />,
    2: <BookText />,
    3: <MessageSquare />,
    4: <Compass />
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const iconPulse = {
    scale: [1, 1.1, 1],
    transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
    }
};

export default function ShankaracharyaTimeline({ timelineEvents }: ShankaracharyaTimelineProps) {
    return (
        <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
            <motion.div 
                className="space-y-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {timelineEvents.map((event, index) => (
                    <motion.div key={index} className="relative group" variants={itemVariants}>
                         <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background transition-transform group-hover:scale-125"></div>
                         <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-x-8">
                            <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                                <p className="text-muted-foreground text-sm font-semibold">{event.year}</p>
                                <h3 className="font-headline text-2xl text-foreground mb-1">{event.title}</h3>
                                <p className="text-muted-foreground">{event.description}</p>
                            </div>
                             <div className={`flex justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-2'}`}>
                                <motion.div 
                                    className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-primary"
                                    animate={iconPulse}
                                >
                                    {icons[index]}
                                </motion.div>
                            </div>
                            <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
                         </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
