
"use client";

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageSquare, Repeat, Send, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SocialLoader from '@/components/social-loader';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialPosts = [
  {
    id: 1,
    author: 'Harsh Parmar',
    handle: 'ryu_verse',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait',
    content: 'Just deployed the first version of the RyuVerse social platform. A space for poets, thinkers, and creators to connect. Let the verses flow!',
    timestamp: '2h ago',
    likes: 15,
    comments: 4,
    reposts: 2,
  },
  {
    id: 2,
    author: 'Poetess',
    handle: 'inkandquill',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait',
    content: 'The moon is a loyal companion.\nIt never leaves. It’s always there, watching, steadfast, knowing us in our light and dark moments.',
    timestamp: '5h ago',
    likes: 32,
    comments: 8,
    reposts: 7,
  },
  {
    id: 3,
    author: 'The Minimalist',
    handle: 'less_is_more',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'abstract art',
    content: 'Simplicity is the ultimate sophistication. This applies to design, code, and life itself.',
    timestamp: '1d ago',
    likes: 58,
    comments: 12,
    reposts: 15,
  }
];

export default function SocialPlatformPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Simulate loading for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'Harsh Parmar',
      handle: 'ryu_verse',
      avatar: 'https://placehold.co/100x100.png',
      avatarHint: 'man portrait',
      content: newPostContent,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      reposts: 0,
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <AnimatePresence>
        {isLoading && <SocialLoader />}
      </AnimatePresence>
      <AnimatePresence>
        {!isLoading && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <header className="mb-6 flex items-center justify-between">
                    <h1 className="font-headline text-4xl">Feed</h1>
                    <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Welcome, <Link href="/about" className="text-primary hover:underline">@ryu_verse</Link></span>
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="@ryu_verse" data-ai-hint="man portrait"/>
                        <AvatarFallback>RY</AvatarFallback>
                    </Avatar>
                    </div>
                </header>

                <Alert className="mb-8 border-accent">
                  <AlertTriangle className="h-4 w-4 text-accent" />
                  <AlertTitle className="text-accent">Under Development</AlertTitle>
                  <AlertDescription>
                    This section is a non-functional demo. All features and data shown are for demonstration purposes only.
                  </AlertDescription>
                </Alert>

                <Card className="mb-8">
                    <CardContent className="p-4">
                    <form onSubmit={handlePostSubmit} className="flex flex-col gap-4">
                        <Textarea
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="Share your thoughts or poetry..."
                        className="resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-base"
                        rows={3}
                        />
                        <div className="flex justify-end">
                        <Button type="submit" disabled={!newPostContent.trim()}>
                            <Send className="mr-2 h-4 w-4" />
                            Post
                        </Button>
                        </div>
                    </form>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    {posts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                        <CardHeader className="flex flex-row items-start gap-4 p-4">
                        <Avatar>
                            <AvatarImage src={post.avatar} alt={post.author} data-ai-hint={post.avatarHint} />
                            <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                            <span className="font-bold">{post.author}</span>
                            <span className="text-sm text-muted-foreground">@{post.handle}</span>
                            <span className="text-sm text-muted-foreground">·</span>
                            <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                            </div>
                            <p className="mt-1 text-card-foreground/90 whitespace-pre-wrap">{post.content}</p>
                        </div>
                        </CardHeader>
                        <CardFooter className="px-4 pb-3 pt-0">
                        <div className="flex w-full justify-between text-muted-foreground">
                            <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-primary">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.comments}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-green-500">
                            <Repeat className="h-4 w-4" />
                            <span>{post.reposts}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-red-500">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                            </Button>
                        </div>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
