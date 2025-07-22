
"use client";

import { motion } from 'framer-motion';

const loaderVariants = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
        duration: 0.5,
        ease: 'easeInOut'
    }
  }
};

const iconVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(128, 7, 226, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(128, 7, 226, 0.1)",
    transition: {
      default: { duration: 2, ease: "easeInOut" },
      fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 0.5 }
    }
  }
};

export default function SocialLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      variants={loaderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-20 w-20 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path 
          d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
      <p className="mt-4 font-headline text-2xl text-muted-foreground">
        Entering RyuVerse...
      </p>
    </motion.div>
  );
}
