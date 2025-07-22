"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, KeyRound, Mail, User } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.14))] items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl md:text-4xl">{isSignIn ? 'Sign In' : 'Sign Up'}</CardTitle>
          <CardDescription>to access the RyuVerse social platform</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {!isSignIn && (
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="username" placeholder="ryu_verse" required className="pl-10" />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
               <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="your@email.com" required className="pl-10" />
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
               <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" required className="pl-10" />
                </div>
            </div>
            <Button type="submit" className="w-full">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          
          <div className="mt-6 text-center text-sm">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={() => setIsSignIn(!isSignIn)} className="font-medium text-primary hover:underline">
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
