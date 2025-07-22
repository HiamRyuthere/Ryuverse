export default function AboutWebsitePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">About This Website</h1>
          <p className="text-xl text-muted-foreground">The technology and philosophy behind RyuVerse.</p>
        </header>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
          <p>
            Welcome to RyuVerse. This website is a personal project built to reflect my professional skills and personal philosophies. It serves as a digital canvas where I explore the intersection of technology, design, and minimalism.
          </p>
          
          <h2 className="font-headline text-3xl">Technology Stack</h2>
          <p>
            This website is built with a modern, performant, and scalable tech stack, chosen to deliver a seamless user experience.
          </p>
          <ul>
            <li><strong>Framework:</strong> Next.js (App Router)</li>
            <li><strong>Styling:</strong> Tailwind CSS</li>
            <li><strong>UI Components:</strong> Shadcn/UI</li>
            <li><strong>Language:</strong> TypeScript</li>
            <li><strong>AI Integration:</strong> Google Gemini via Genkit</li>
            <li><strong>Hosting:</strong> Vercel / Firebase Hosting</li>
          </ul>

          <h2 className="font-headline text-3xl">Design Philosophy</h2>
          <p>
            The design of this site is guided by the principles of minimalism.
          </p>
          <ul>
            <li><strong>Clarity:</strong> A clean, uncluttered interface that prioritizes content and readability.</li>
            <li><strong>Intentionality:</strong> Every element on the page serves a distinct purpose. There is no decoration for decoration's sake.</li>
            <li><strong>Responsiveness:</strong> A fully responsive design that provides an optimal experience on all devices, from mobile phones to desktop monitors.</li>
            <li><strong>Performance:</strong> Fast load times and smooth interactions are a core feature, not an afterthought.</li>
          </ul>
          <p>
            Thank you for visiting. I hope you enjoy exploring the site as much as I enjoyed building it.
          </p>
        </article>
      </div>
    </div>
  );
}
