'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from '@/hooks/use-toast'

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Listo para elevar tu proyecto?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contáctanos hoy para obtener una cotización personalizada o agendar una llamada.
          </p>
        </div>
        <div className="max-w-md mx-auto bg-white/30 backdrop-blur-md shadow-lg border border-white/20 p-8 rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tu mensaje" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Solicitar Cotización"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            ¿Prefieres contactarnos directamente?
          </p>
          <p className="font-semibold mt-2">
            Email: <a href="mailto:info@tuempresa.com" className="text-primary hover:underline">info@tuempresa.com</a>
          </p>
          <p className="font-semibold mt-1">
            WhatsApp: <a href="https://wa.me/1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
          </p>
        </div>
      </div>
    </section>
  )
}
