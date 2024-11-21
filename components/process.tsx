'use client'
import { MessageSquare, Calendar, Camera, Rocket } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const steps = [
  {
    icon: MessageSquare,
    "title": "Consulta Inicial",
    "description": "Nos reunimos para entender tu visión y las necesidades específicas de tu proyecto.",
    "details": [
      "Definimos el tipo de proyecto: evento, campaña de marketing, inspección técnica, entre otros.",
      "Identificamos la ubicación y el alcance del trabajo.",
      "Establecemos los resultados esperados, como estilo, formato de entrega y tiempos."
    ]
  },
  {
    icon: Calendar,
    "title": "Planificación",
    "description": "Diseñamos un plan a la medida para garantizar el éxito de tu proyecto.",
    "details": [
      "Analizamos la ubicación para encontrar los mejores ángulos y horarios.",
      "Revisamos las condiciones climáticas para asegurar seguridad y calidad.",
      "Gestionamos los permisos necesarios para el vuelo del dron, si aplica.",
      "Preparamos nuestros drones con tecnología avanzada para un rendimiento óptimo."
    ]
  },
  {
    icon: Camera,
    "title": "Captura",
    "description": "Realizamos la grabación o fotografía con creatividad y profesionalismo.",
    "details": [
      "Un piloto certificado opera el dron de manera segura y eficiente.",
      "Capturamos imágenes dinámicas y creativas desde perspectivas únicas.",
      "Nos adaptamos rápidamente a cualquier cambio o nueva solicitud durante el trabajo."
    ]
  },
  {
    icon: Rocket,
    "title": "Entrega",
    "description": "Te entregamos resultados que superan tus expectativas.",
    "details": [
      "Editamos las imágenes y videos profesionalmente para resaltar su calidad.",
      "Ofrecemos los archivos en los formatos que necesitas: desde originales hasta listos para uso, como JPEG, MP4, entre otros.",
      "Cumplimos con los plazos acordados para una entrega rápida y puntual."
    ]
  }
]


export default function ProcessSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5
      }
    }
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-6"
        >
          Nuestro Proceso de Trabajo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg mb-12 max-w-2xl mx-auto text-muted-foreground"
        >
          Nuestro enfoque garantiza calidad y atención en cada detalle. Descubre cómo trabajamos:
        </motion.p>
        <div className="relative">
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary origin-top"
          />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="relative bg-white/30 backdrop-blur-md rounded-lg hover:shadow-lg transition-shadow duration-300">
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
                </motion.div>
                <motion.div
                  className="md:w-2/12 flex justify-center items-center my-4 md:my-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
                    {index + 1}
                  </div>
                </motion.div>
                <div className="md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
