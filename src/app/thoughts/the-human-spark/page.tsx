import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Human Spark in a Digital World',
  description: 'A thought on how art, poetry, and music are the true expressions of our humanity, beyond mere survival.',
  keywords: ['Art', 'Humanity', 'Poetry', 'Music', 'Creativity', 'Philosophy'],
};

export default function HumanSparkPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">The Human Spark</h1>
          <p className="text-xl text-muted-foreground">July 27, 2025</p>
        </header>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
          <p>
            We spend so much of our lives learning skills. We learn to code, to design, to manage projects, to build systems. These are important, without a doubt. They help us build careers, solve problems, and navigate the complexities of the modern world. In a way, learning technology and development is about survival. It's about securing our place in a competitive world.
          </p>
          <p>
            But is that all there is to being human?
          </p>
          
          <h2 className="font-headline text-3xl">Beyond Survival</h2>
          <p>
            I believe that the things that truly make us human are the things we do for no practical reason at all. It's the poetry, the music, the art, the literature. These are not tools for survival; they are expressions of the soul. They are the language we use when ordinary words are not enough.
          </p>
          <p>
            Thinking, in its purest form—not just problem-solving, but questioning, wondering, and contemplating—is a deeply human act. It's the uniqueness of an individual's perspective, the strange and beautiful way one person sees the world and chooses to express it. The beauty of a poem or a piece of art lies not in its utility, but in its ability to connect us to something deeper within ourselves and to each other.
          </p>
          <p>
            Technology is a powerful tool. It can build bridges and cure diseases. But it is the human spark—our capacity for creativity, our love for beauty, our need for expression—that gives us a reason to cross those bridges. It's what makes life not just a matter of surviving, but a story worth telling.
          </p>
        </article>
      </div>
    </div>
  );
}
