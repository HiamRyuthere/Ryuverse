"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  typingSpeed?: number;
}

export default function AnimatedHeadline({ text, className, typingSpeed = 150 }: AnimatedHeadlineProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    if (text) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
        }
      }, typingSpeed);

      return () => clearInterval(intervalId);
    }
  }, [text, typingSpeed]);

  return (
    <h1 className={cn("font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4", className)}>
      {displayedText}
      <span className="blinking-cursor" />
    </h1>
  );
}
