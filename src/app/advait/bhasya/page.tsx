
export default function BhasyaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">Adi Shankaracharya Bhasya</h1>
          <p className="text-xl text-muted-foreground">The Foundational Commentaries</p>
        </header>

        <div className="bg-card/50 p-4 rounded-lg border">
            <div className="aspect-[560/384] w-full">
                <iframe
                    src="https://archive.org/embed/gita-shankarbhasya-hindi-gitapress"
                    className="w-full h-full rounded-md"
                    frameBorder="0"
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>

         <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-6 mt-12">
            <p>
                Adi Shankaracharya's commentaries (Bhasyas) on the principal Upanishads, the Brahma Sutras, and the Bhagavad Gita are the foundational texts of the Advaita Vedanta school. These works are not mere translations but are profound philosophical treatises that logically and systematically establish the non-dual nature of reality.
            </p>
            <p>
               Through rigorous analysis and deep insight, Shankaracharya illuminates the core teachings of the Vedas, demonstrating that the individual self (Atman) is identical to the ultimate reality (Brahman). His Bhasyas are considered essential reading for any serious student of Vedanta.
            </p>
        </article>
      </div>
    </div>
  );
}
