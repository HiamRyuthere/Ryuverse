export default function OtherIssuePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">Report an Issue</h1>
          <p className="text-xl text-muted-foreground">For bugs, feedback, or other concerns.</p>
        </header>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
          <p>
            If you've encountered a bug, a technical problem, or have any other feedback regarding the website that doesn't fall under content removal or disclaimer queries, this is the right place to report it.
          </p>
          
          <h2 className="font-headline text-3xl">How to Report an Issue</h2>
          <p>
            Your feedback is valuable in helping me improve this website. When reporting an issue, please be as detailed as possible.
          </p>
          <p>
            Please send an email to <a href="mailto:hiamryu@duck.com" className="text-primary hover:underline">hiamryu@duck.com</a> with the subject line "Website Issue Report". Include the following details in your message:
          </p>
          <ul>
            <li>A clear and concise description of the issue.</li>
            <li>The URL of the page where you encountered the problem.</li>
            <li>The browser and operating system you were using (e.g., Chrome on Windows 11, Safari on iOS).</li>
            <li>Steps to reproduce the issue, if applicable.</li>
            <li>Screenshots or screen recordings, which are extremely helpful.</li>
          </ul>
          <p>
            Thank you for taking the time to help me make RyuVerse a better experience for everyone.
          </p>
        </article>
      </div>
    </div>
  );
}
