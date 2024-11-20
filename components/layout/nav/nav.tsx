'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const navItems = [
  { name: 'Servicios', href: '/servicios' },
  { name: 'Lugares', href: '/lugares' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Sobre mí', href: '/sobre-mi' },
]

const authButtons = [
  { name: 'Iniciar sesión', variant: 'outline' as const },
  { name: 'Registrarse', variant: 'default' as const },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Logo
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {authButtons.map((button) => (
              <Button key={button.name} variant={button.variant}>
                {button.name}
              </Button>
            ))}
          </div>
          
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Abrir menú principal</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4 space-y-2">
            {authButtons.map((button) => (
              <Button key={button.name} variant={button.variant} className="w-full">
                {button.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}