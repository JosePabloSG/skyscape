'use client'

import { motion } from "framer-motion"
import { Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            ¿Listo para elevar tu proyecto?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8"
          >
            Contáctanos hoy para obtener una cotización personalizada o agendar una llamada.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <a href="https://wa.me/50664251906" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              <a href="mailto:suarezgomezjosepablo03@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground"
          >
            Estamos disponibles de lunes a viernes, de 9:00 a 18:00 horas.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="font-semibold mt-2"
          >
            Responderemos a tu solicitud en menos de 24 horas.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

