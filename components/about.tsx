'use client'

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DrillIcon as Drone, Camera, Zap, Target } from 'lucide-react';

export default function AboutSection() {
  const aboutContent = [
    {
      icon: <Drone className="w-10 h-10 text-primary" />,
      title: "Perspectiva Única",
      description: "Capturamos el mundo desde ángulos inimaginables, ofreciendo vistas que desafían la percepción convencional."
    },
    {
      icon: <Camera className="w-10 h-10 text-primary" />,
      title: "Fotografía Aérea",
      description: "Nos especializamos en crear imágenes aéreas impresionantes que cuentan historias y capturan la esencia de cada proyecto."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Tecnología de Punta",
      description: "Utilizamos equipos de última generación para garantizar la más alta calidad en cada toma y video que producimos."
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Enfoque Personalizado",
      description: "Trabajamos de cerca con nuestros clientes para transformar sus ideas en contenido visual extraordinario."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Sobre Nosotros
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <Image
              src="/hero.jpg"
              alt="Nuestro equipo en acción"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <p className="text-xl leading-relaxed mb-6">
              Capturamos el mundo desde una perspectiva única, combinando creatividad y tecnología de punta. Nos especializamos en fotografía aérea, ofreciendo contenido visual impresionante para proyectos personales y comerciales.
            </p>
            <p className="text-xl font-semibold text-primary">
              ¡Elevamos tus ideas a nuevas alturas!
            </p>
          </motion.div>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {aboutContent.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-white/30 backdrop-blur-md rounded-lg h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

