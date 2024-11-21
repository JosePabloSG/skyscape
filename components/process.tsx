import { MessageSquare, Calendar, Camera, Rocket } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    icon: MessageSquare,
    title: "Consulta Inicial",
    description: "Nos reunimos para entender tu visión y necesidades específicas del proyecto.",
    details: [
      "Definimos el tipo de proyecto (Evento, marketing, inspección, etc.)",
      "Determinamos la ubicación y el alcance del trabajo",
      "Establecemos los resultados esperados (Estilo, formatos, tiempos de entrega)"
    ]
  },
  {
    icon: Calendar,
    title: "Planificación",
    description: "Creamos un plan personalizado para asegurar el éxito de tu proyecto.",
    details: [
      "Estudiamos la ubicación para identificar los mejores ángulos y horarios",
      "Revisamos las condiciones meteorológicas para garantizar seguridad y calidad",
      "Obtenemos los permisos necesarios para volar el dron (si aplica)",
      "Preparamos nuestros drones con tecnología de última generación"
    ]
  },
  {
    icon: Camera,
    title: "Captura",
    description: "Realizamos la grabación o fotografía con creatividad y profesionalismo.",
    details: [
      "Operación segura y eficiente del dron por un piloto certificado",
      "Captura de tomas dinámicas y creativas desde perspectivas únicas",
      "Flexibilidad para adaptarnos a cambios o requerimientos en el momento"
    ]
  },
  {
    icon: Rocket,
    title: "Entrega",
    description: "Procesamos y entregamos resultados que superan expectativas.",
    details: [
      "Edición profesional para resaltar la belleza y calidad de las imágenes o videos",
      "Entrega en los formatos que necesitas (RAW, JPEG, MP4, etc.)",
      "Cumplimiento de los tiempos acordados para una entrega rápida"
    ]
  }
]

export default function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Nuestro Proceso de Trabajo</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-muted-foreground">
          Nuestro enfoque garantiza calidad y atención en cada detalle. Descubre cómo trabajamos:
        </p>
        <div className="relative">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Bolita en la línea temporal */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <Card className="relative bg-white/30 backdrop-blur-md shadow-lg border border-white/20 rounded-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 justify-center md:justify-start">
                          <step.icon className="h-6 w-6 text-primary" />
                          {step.title}
                        </CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className={`text-sm space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <span className="mr-2 text-primary">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="md:w-2/12 flex justify-center items-center my-4 md:my-0">
                    {/* Número del paso */}
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
                      {index + 1}
                    </div>
                  </div>
                  <div className="md:w-5/12">
                    {/* Espacio para mantener la alineación en desktop */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
