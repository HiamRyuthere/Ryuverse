
"use client";

import { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Slider } from './ui/slider';
import { Label } from './ui/label';

interface MatrixRainProps {
  onExit: () => void;
}

const shivaVariants = {
    hidden: { 
        opacity: 0,
    },
    visible: { 
        opacity: [0, 0.15, 0], // Fades in to 15% opacity then fades out
        transition: {
            duration: 10, // A long, slow 10-second loop
            ease: "easeInOut",
            repeat: Infinity, // Loop forever
        }
    }
};

export default function MatrixRain({ onExit }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [speed, setSpeed] = useState(0.05);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const sanskrit = "अहं ब्रह्मास्मि प्रज्ञानं ब्रह्म तत्त्वमसि अयमात्मा ब्रह्म अद्वैत मोक्ष माया विवेक वैराग्य ॐ";
    const characters = sanskrit.split(' ').join('').split('');
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = Array.from({ length: columns }).fill(1).map(() => 1);

    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${speed})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };
    
    const animate = () => {
        draw();
        animationFrameId = window.requestAnimationFrame(animate);
    }
    
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [speed]);

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.svg 
                viewBox="0 0 512 512" 
                className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 text-green-400"
                initial="hidden"
                animate="visible"
            >
                {/* Shiva Linga SVG with a subtle looping fade */}
                <motion.g variants={shivaVariants}>
                    <path 
                        d="M208 384C154.6 384 112 341.4 112 288S154.6 192 208 192h96c53.4 0 96 42.6 96 96s-42.6 96-96 96h-96z"
                        stroke="currentColor" strokeWidth="4" fill="none"
                    />
                     <path 
                        d="M256 128v136c0 39.8-32.2 72-72 72h-48"
                        stroke="currentColor" strokeWidth="4" fill="none"
                    />
                     <path 
                        d="M256 128c44.2 0 80 35.8 80 80s-35.8 80-80 80"
                        stroke="currentColor" strokeWidth="4" fill="none"
                    />
                     <path 
                        d="M256,128A128,128,0,0,0,128,256"
                        stroke="currentColor" strokeWidth="4" fill="none"
                     />
                </motion.g>
            </motion.svg>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <Button onClick={onExit} variant="destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Exit Matrix
        </Button>
      </div>
      <div className="absolute top-4 left-4 z-10 w-48 text-white">
        <Label htmlFor="speed-slider" className="text-sm">Rain Speed</Label>
        <Slider 
            id="speed-slider"
            min={0.01} 
            max={0.2} 
            step={0.01} 
            value={[speed]} 
            onValueChange={(value) => setSpeed(value[0])}
            className="mt-2"
        />
      </div>
    </div>
  );
}
