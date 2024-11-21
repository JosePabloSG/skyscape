import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
            Perspectivas que inspiran desde el cielo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Capturamos imágenes aéreas impresionantes que transforman cada proyecto en una experiencia visual única. Explora el mundo desde nuevas alturas con nuestra fotografía profesional con dron.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
            Explora nuestro trabajo
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/img/hero.jpg"
            alt="Imagen aérea capturada por dron"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}