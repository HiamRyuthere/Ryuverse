export default function CreditRemovalPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">Credit & Content Removal</h1>
          <p className="text-xl text-muted-foreground">Policy on attribution and content removal requests.</p>
        </header>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6">
          <h2 className="font-headline text-3xl">Content Attribution</h2>
          <p>
            I strive to ensure that all content, images, and materials used on this website are either original, properly licensed, or credited to the rightful owner. If you believe that any content on this site has been used without proper permission or credit, please contact me.
          </p>
          
          <h2 className="font-headline text-3xl">Content Removal Requests</h2>
          <p>
            If you are the copyright owner of any content displayed on this website and you do not wish for it to be used, please contact me immediately. I will promptly remove the specified content upon verification of your claim.
          </p>
          <p>
            To file a removal request, please send an email to <a href="mailto:hiamryu@outlook.com" className="text-primary hover:underline">hiamryu@outlook.com</a> with the following information:
          </p>
          <ul>
            <li>Your full name and contact information.</li>
            <li>A link to the specific content you are referring to.</li>
            <li>Proof of ownership or a statement that you are the copyright holder or are authorized to act on behalf of the owner.</li>
            <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
          </ul>
          <p>
            All valid requests will be addressed as quickly as possible.
          </p>
        </article>
      </div>
    </div>
  );
}
