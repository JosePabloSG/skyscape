'use client'

import Link from 'next/link'

import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ]

  return (
    <footer className="bg-white/30 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">
              DroneCo
            </Link>
            <p className="text-sm text-gray-600 text-center md:text-left">
              Elevando perspectivas, capturando momentos
            </p>
          </div>

          <nav className="flex space-x-6">
            <Link href="/servicios" className="text-sm text-gray-600 hover:text-primary transition-colors">Servicios</Link>
            <Link href="/sobre-nosotros" className="text-sm text-gray-600 hover:text-primary transition-colors">Sobre Nosotros</Link>
            <Link href="/contacto" className="text-sm text-gray-600 hover:text-primary transition-colors">Contacto</Link>
          </nav>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} aria-label={link.label} className="text-gray-400 hover:text-primary transition-colors">
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} DroneCo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

