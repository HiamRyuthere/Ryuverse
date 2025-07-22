
export default function VivekChudamaniPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl mb-4">Vivek Chudamani</h1>
          <p className="text-xl text-muted-foreground">The Crest-Jewel of Discrimination by Adi Shankaracharya</p>
        </header>

        <div className="bg-card/50 p-4 rounded-lg border">
            <div className="aspect-[560/384] w-full">
                <iframe
                    src="https://archive.org/embed/vivek-chudamani-adi-shankaracharya"
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
                Vivek Chudamani is one of the most significant works of Adi Shankaracharya. This masterpiece of Advaita Vedanta is presented as a dialogue between a master and a disciple, systematically expounding the path to self-realization.
            </p>
            <p>
                The text meticulously distinguishes between the eternal (the Real) and the ephemeral (the Unreal), guiding the seeker to turn their awareness inward. It emphasizes the importance of a qualified Guru, self-effort, and deep inquiry (Vichara) to dismantle the ignorance that veils our true nature as Brahman.
            </p>
        </article>
      </div>
    </div>
  );
}
