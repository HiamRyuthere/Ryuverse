
"use client";

import Link from 'next/link';
import { Feather, Mail, Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:hiamryu@duck.com',
    icon: Mail,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/Mayimweird',
    icon: Instagram,
  },
  {
    name: 'Linkedin',
    href: 'https://linkedin.com/in/Harsh-Parmar-2212b2201',
    icon: Linkedin,
  },
  {
    name: 'Github',
    href: 'https://github.com/hiamryuthere',
    icon: Github,
  },
];

const footerLinks = [
  
  { name: 'Disclaimer', href: '/disclaimer' },
  { name: 'About This Website', href: '/about-website' },
  { name: 'Credit / Content Removal', href: '/credit-removal' },
  { name: 'Other Issue', href: '/other-issue' },
];


export default function Footer() {

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex justify-center md:justify-start items-center space-x-2 mb-4">
              <Feather className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">RyuVerse</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ryu's Verse. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Made in Bharat 🇮🇳 with ❤️
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="font-headline text-lg font-medium text-foreground mb-4">Navigate</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:ml-auto">
             <h3 className="font-headline text-lg font-medium text-foreground mb-4">Connect</h3>
             <p className="text-muted-foreground text-sm mb-4">
               Have a project in mind or want to connect?
             </p>
             <Button asChild>
                <Link href="/contact">Get in Touch</Link>
             </Button>
          </div>

        </div>
      </div>
    </footer>
  );
}
