'use client'

import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/skyscape_cr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  ]

  return (
    <footer className="bg-white/30 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">
              SkyScape 
            </Link>
            <p className="text-sm text-gray-600 text-center md:text-left">
              Elevando perspectivas, capturando momentos
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} aria-label={link.label} className="text-gray-600 hover:text-primary transition-colors">
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} SkyScape. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

