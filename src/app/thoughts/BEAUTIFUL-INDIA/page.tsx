import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Beautiful Country India', // Changed this line
  description: 'Exploring India\'s journey from independence to a global influence, highlighting our strong Constitution, human rights, and freedoms. Despite challenges, we have achieved remarkable progress.',
  keywords: [
    'India',
    'Independence',
    'Constitution',
    'Fundamental Rights',
    'Democracy',
    'Human Rights',
    'Freedom',
    'Global Power',
    'Ancient India',
    'Unity',
    'Future Growth',
    'Jai Hind'
  ],
};

export default function IndiaJourneyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          {/* Also changed the main heading to match */}
          <h1 className="font-headline text-5xl md:text-7xl mb-4">The Beautiful Country India</h1>
          <p className="text-xl text-muted-foreground">Aug 15, 2025</p>
        </header>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
          <p>
            Think about it – so many countries that broke free from colonial rule ended up in a tough spot. Either dictators took charge, or they struggled to even function as a nation. But look at our India! 🇮🇳 We shook off the colonial shackles and built a vibrant, influential global power.
          </p>

          <h2 className="font-headline text-3xl">Our Constitution: The Real MVP</h2>
          <p>
            What's the secret sauce? Our amazing Constitution! It's not just a rulebook; it's the foundation of our freedom and rights. It guarantees us every kind of freedom you can imagine, making sure every Indian citizen has a voice and a chance.
          </p>
          <p>
            And the human rights we have? वो तो कमाल है! Our Constitution ensures that everyone is treated with dignity and respect. It's what makes us stand tall on the world stage. 💪
          </p>

          <h2 className="font-headline text-3xl">A Glimpse of Our Glorious Past</h2>
          <p>
            Let's not forget where we come from. Ancient India was a land of knowledge, innovation, and culture. Our history is rich and deep, and it's a part of what makes us who we are today. बस थोड़ा सा याद दिलाना ज़रूरी था! ✨
          </p>

          <p>
            Haan, maana problems toh bohot hain – poverty, inequality, aur bhi challenges hain jo hum face kar rahe hain. But we can't just focus on the negatives. We've come so far, and we've done incredible things together.
          </p>
          <p>
            The future? It's in our hands. We'll keep growing, keep building, and keep making our mark on the world, together. Ek saath badhenge, ek saath aage badhenge.
          </p>

          <p className="text-center font-bold text-2xl mt-8">Jai Hind! 🇮🇳</p>
        </article>
      </div>
    </div>
  );
}