import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      title: "Fotografía y Video Aéreo Profesional",
      description: "Ideal para proyectos de marketing, publicidad o capturas impresionantes para redes sociales. Ofrecemos imágenes y videos de alta calidad desde perspectivas únicas.",
    },
    {
      title: "Inspección y Monitoreo Aéreo",
      description: "Diseñado para industrias como construcción, agricultura o bienes raíces. Incluye inspección de estructuras, monitoreo de cultivos y supervisión de proyectos.",
    },
    {
      title: "Cobertura Aérea para Bodas y Eventos",
      description: "Captura momentos inolvidables con vistas espectaculares. Ideal para bodas, aniversarios o cualquier celebración especial, agregando un toque mágico desde el cielo.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image
                  src="/img/hero.jpg"
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
