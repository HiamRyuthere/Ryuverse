
export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">Disclaimer</h1>
          <p className="text-xl text-muted-foreground">Important information about this website.</p>
        </header>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
          <p>
            Everything you read on RyuVerse is for general informational purposes only. I share what I know in good faith, but I can't guarantee that all information is perfectly accurate, complete, or up-to-date.
          </p>
          <p>
            Using this site and relying on its information is at your own risk. I am not liable for any loss or damage that might occur from using the site.
          </p>
          <h2 className="font-headline text-3xl">External Links</h2>
          <p>
            Sometimes, I may link to other websites. Please note that I don't control these external sites and am not responsible for their content. These links are provided for convenience, and I don't necessarily endorse what you might find there.
          </p>
           <h2 className="font-headline text-3xl">My Views</h2>
           <p>
            The thoughts and opinions expressed here are my own and do not reflect the views of any organization I might be affiliated with. The content is for informational and educational purposes and should not be taken as professional advice. If you need professional advice, please consult an expert in the relevant field.
           </p>
           <h2 className="font-headline text-3xl">Content &amp; Attribution</h2>
            <p>
              My intention is to use only original content or materials that are open-source and free to use. I have a strong faith in the open-source community and make every effort to respect intellectual property rights.
            </p>
            <p>
              However, if you believe I have made a mistake or used something that belongs to you without proper permission or credit, please contact me immediately. I will address your concern promptly. You can reach me at <a href="mailto:hiamryu@duck.com" className="text-primary hover:underline">hiamryu@duck.com</a>.
            </p>
        </article>
      </div>
    </div>
  );
}
