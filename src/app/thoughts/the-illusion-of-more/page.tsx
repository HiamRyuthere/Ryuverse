import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Illusion of More',
  description: 'A reflection on the endless chase for more and the nature of Maya.',
  keywords: ['Philosophy', 'Maya', 'Life', 'Desire', 'Contentment', 'Vedanta'],
};

export default function IllusionOfMorePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">The Illusion of More</h1>
          <p className="text-xl text-muted-foreground">August 05, 2025</p>
        </header>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
          <p>
            Life has a strange way of unfolding. You spend years wishing for things. You see something you want, something you think you need, and you dedicate your energy to getting it. You try, you strive, you work for it. And then one day, maybe through luck or effort, you get it. The thing is finally yours.
          </p>
          <p>
            And for a moment, there is peace. But it's fleeting, isn't it? The satisfaction fades, and soon you find your eyes wandering again, looking for the next thing. The next goal, the next purchase, the next achievement. You're still not satisfied. You're always craving more.
          </p>
          
          <h2 className="font-headline text-3xl">The Nature of Maya</h2>
          <p>
            This endless cycle of desire and fleeting satisfaction is what ancient philosophy calls 'Maya'—the illusion. It’s the grand cosmic play that convinces us that happiness is just one more thing away. It’s the voice that whispers, "If only I had that, then I would be complete."
          </p>
          <p>
            We accumulate and store things we may never use again. Old clothes, old gadgets, old ideas. We hold onto them, thinking they are part of us, part of our identity. But they are just things. The illusion is the belief that external objects can fill an internal void. But the void is not a lack of things; it's a lack of self-awareness.
          </p>
           <p>
            The way out of this maze isn't to get more, but to understand more. To understand the nature of your own mind. To see the craving for what it is: a restless energy that can never be truly satisfied by anything outside of yourself. True contentment isn't found in possessing everything, but in realizing you need nothing.
          </p>
        </article>
      </div>
    </div>
  );
}
