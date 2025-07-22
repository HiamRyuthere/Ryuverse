
"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Feather } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ThemeSwitcher } from './theme-switcher';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const navLinks = [
  { href: '/', label: 'Home', tooltip: 'The beginning of my universe.' },
  { href: '/about', label: 'About', tooltip: 'My story, skills, and journey.' },
  { href: '/music', label: 'Music', tooltip: 'Where rhythm meets my soul.' },
  { href: '/thoughts', label: 'Thoughts', tooltip: 'A collection of my musings.' },
  { href: '/advait', label: 'Advait', tooltip: 'Exploring the philosophy of non-duality.' },
  { href: '/contact', label: 'Contact', tooltip: 'Get in touch with me.' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 md:mr-6 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Feather className="h-6 w-6 text-primary" />
            <div>
              <span className="font-bold font-headline text-lg hidden sm:inline-block">RyuVerse</span>
              <p className="text-xs text-muted-foreground hidden sm:block italic">— Be the best of you</p>
            </div>
          </Link>
        </div>

        <div className="md:hidden ml-auto">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full py-6">
                   <div className="px-4 pb-4">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setSheetOpen(false)}>
                      <Feather className="h-6 w-6 text-primary" />
                      <div>
                        <span className="font-bold font-headline text-lg">RyuVerse</span>
                        <p className="text-xs text-muted-foreground italic">— Be the best of you</p>
                      </div>
                    </Link>
                   </div>
                  <div className="flex flex-col space-y-3 px-4">
                    <TooltipProvider>
                      {navLinks.map((link) => (
                        <Tooltip key={link.href} delayDuration={0}>
                          <TooltipTrigger asChild>
                            <Link
                              href={link.href}
                              onClick={() => setSheetOpen(false)}
                              className={cn(
                                'text-lg transition-colors hover:text-foreground text-left',
                                pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                              )}
                            >
                              {link.label}
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>{link.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                  <div className="mt-auto px-4">
                     <Button asChild className="w-full">
                        <Link href="/hire-me">Hire Me</Link>
                     </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
        
        <div className="flex-1 flex items-center justify-end">
            <TooltipProvider>
              <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
                  {navLinks.map((link) => (
                    <Tooltip key={link.href} delayDuration={0}>
                       <TooltipTrigger asChild>
                          <Link
                              href={link.href}
                              className={cn(
                              'transition-colors hover:text-foreground/80',
                              pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                              )}
                          >
                              {link.label}
                          </Link>
                       </TooltipTrigger>
                       <TooltipContent>
                          <p>{link.tooltip}</p>
                       </TooltipContent>
                    </Tooltip>
                  ))}
              </nav>
            </TooltipProvider>
            <div className="flex items-center ml-4">
                <ThemeSwitcher />
                <Button asChild className="hidden md:inline-flex ml-2">
                    <Link href="/hire-me">Hire Me</Link>
                </Button>
            </div>
        </div>
      </div>
    </header>
  );
}
