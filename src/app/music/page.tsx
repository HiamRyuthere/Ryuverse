"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.header 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="font-headline text-5xl md:text-7xl mb-4">The Music</h1>
        <p className="text-xl text-muted-foreground">The soul of philosophy</p>
      </motion.header>

      <motion.section 
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
        {...sectionAnimation}
      >
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-4xl mb-4">The Rap</h2>
          <h3 className="text-lg text-muted-foreground mb-4">The Vocal Of Society</h3>
          <article className="prose prose-invert text-muted-foreground space-y-4">
            <p>I began my rap journey when I was just 13. It all started the day my brother introduced me to the legendary diss game between Raftaar and Emiway. The first rap I ever heard? Sheikh Chilli. And from that moment—something sparked inside me.</p>
            <p>I became obsessed—memorizing every single verse Raftaar dropped. Back in 7th grade, I used to spit those lines in front of my school friends, feeling like I owned the world. Soon, I began writing my own verses—scribbling thoughts, rhymes, and fire into my phone. But I was scared to share it. Afraid they'd laugh. Afraid they wouldn’t get it. Still, somewhere deep down—everyone kind of knew... he raps.</p>
            <p>Then one day, while chilling with friends, one of them playfully snatched my phone. He found my raps. Instead of mocking me, he praised me. That was the moment. I started owning it—spitting bars confidently, and slowly the whole school knew. Yeah, he raps.</p>
            <p>Life moved on. After 12th, the mic fell silent. I thought my rap dreams were over. But destiny had a different beat lined up. One day in college, I casually told a few friends that I used to rap. Sometime later, one of them called me up and asked, Wanna perform on stage? I said, Hell yeah.</p>
            <p>I still remember that moment—stepping onto that stage, facing a huge crowd, alone. No friends in the audience. Just me, my verses, and the vibe. And when I rapped... the energy was electric. That performance brought my confidence back like a rising beat drop. And since then? I’ve never looked back. The mic is still in my hand, the passion still burns. And the journey continues— One verse, one vibe, one dream at a time.</p>
          </article>
          <Button asChild className="mt-6">
            <Link href="#">You Can Hear Me Here</Link>
          </Button>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
            <Image 
                src="/g1.png"
                alt="My Pic"
                width={500}
                height={500}
                className="rounded-lg object-cover"
                data-ai-hint="rapper studio"
            />
        </div>
      </motion.section>

      <motion.section 
        className="max-w-4xl mx-auto"
        {...sectionAnimation}
      >
        <div className="text-center">
            <h2 className="font-headline text-4xl mb-4">Poetry</h2>
            <h3 className="text-lg text-muted-foreground mb-6">The Vocals Of Heart</h3>
        </div>
        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-4 text-center">
            <p>Sometimes, I feel like normal people cannot understand the depth of poetry in my personal opinion. Most people think poetry is just rhyming words, but for me, It is a way to express almost every feeling in this world. Either it is love, hate, sadness, happiness, or any other emotion.</p>
            <p>Even many Hindu Scriptures are written in the form of poetry. Like the Ramayan, The Ramcharitmanas, and The Summary of very beautiful philosophy "Advait Vedant" that is Nirvana Shatkam is also written in the form of poetry. Poetry becomes literature when a philosopher writes it, Poetry becomes song if a musician writes it, Poetry becomes a story when a storyteller writes it, and Poetry becomes rap when a rapper writes it.</p>
            <p>Poetry is not just limited to words, It's more about making yourself feel like you are a living being, A human. No matter what language you are writing in. Just as Poet Tulsidas wrote in his legendary literature Ramcharitmanas <span className="italic">"आखर अरथ अलंकृति नाना, छंद प्रबंध अनेक बिधान !! भाव भेद रस भेद अपारा , कबित दोष गुन बिबिध प्रकारा !!"</span> which literally means <span className="italic">"Words, meanings, and various forms, verses and compositions in many styles!! The differences in emotions and flavors are infinite, The qualities and faults of poetry come in many forms!!"</span></p>
            <p>So, I write poetry too.</p>
        </article>
        <div className="text-center mt-6">
            <Button asChild>
                <Link href="#">You can read it here: My Poetry</Link>
            </Button>
        </div>
      </motion.section>
    </div>
  );
}
