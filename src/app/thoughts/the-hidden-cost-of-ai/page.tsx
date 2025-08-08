import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Hidden Cost of AI',
  description: 'Exploring the environmental impact of artificial intelligence, from data centers to e-waste.',
  keywords: ['AI', 'Environment', 'Technology', 'Data Centers', 'Energy Consumption'],
};

export default function HiddenCostOfAiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">The Hidden Cost of AI</h1>
          <p className="text-xl text-muted-foreground">July 12, 2025</p>
        </header>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
          <p>
            Artificial intelligence feels like magic. With a simple prompt, we can create stunning images, write complex code, or get answers to difficult questions. But this magic has a hidden cost—one that is paid by our planet. Behind the seamless interfaces and intelligent responses lies a massive physical infrastructure that has a significant environmental footprint.
          </p>
          
          <h2 className="font-headline text-3xl">Energy-Hungry Data Centers</h2>
          <p>
            Training a single large AI model can be incredibly energy-intensive. A 2021 study from researchers at the University of Massachusetts, Amherst, found that training one common large AI model could emit more than 626,000 pounds of carbon dioxide equivalent—nearly five times the lifetime emissions of the average American car.
          </p>
          <p>
            These models run in vast data centers that are packed with thousands of powerful computer chips. These centers consume enormous amounts of electricity, not just to run the computers, but also for the cooling systems required to prevent them from overheating. According to the International Energy Agency (IEA), data centers already account for about 1-1.5% of global electricity use, and the explosion of AI is pushing that number higher every day.
          </p>

          <h2 className="font-headline text-3xl">Water Consumption and E-Waste</h2>
          <p>
            It's not just about electricity. These data centers also consume vast quantities of water for cooling. A report from researchers at the University of California, Riverside, estimated that training just one model like GPT-3 could consume up to 700,000 liters of fresh water.
          </p>
          <p>
            Furthermore, the rapid advancement of AI is accelerating the cycle of electronic waste (e-waste). The specialized hardware used for AI, like GPUs and TPUs, becomes obsolete quickly, leading to a growing mountain of discarded electronics that are difficult to recycle and often contain toxic materials.
          </p>
          <p>
            As we continue to embrace AI, we must also be honest about its environmental trade-offs. The magic of AI is real, but it's not without consequence. True innovation must include not just building more powerful models, but also finding ways to make them more efficient and sustainable for the planet we all share.
          </p>
        </article>
      </div>
    </div>
  );
}
