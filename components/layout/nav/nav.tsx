'use client'
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "#services" },
    { name: "Proceso", href: "#process" },
    { name: "Contacto", href: "#contact" },
  ]

  const authButtons: { name: string; variant: "link" | "outline" | "default" | "ghost" | "destructive" | "secondary" }[] = [
    { name: "Iniciar Sesión", variant: "ghost" },
    { name: "Registrarse", variant: "default" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <nav className="fixed inset-x-0 top-0 md:m-3 z-50 bg-white/30 backdrop-blur-md rounded-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="font-bold text-2xl text-primary">
              SkyScape
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-2"
            >
              {authButtons.map((button) => (
                <motion.div
                  key={button.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant={button.variant}>
                    {button.name}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white/30 backdrop-blur-md border-t border-white/20"
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="pt-4 pb-3 border-t border-gray-200 px-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {authButtons.map((button, index) => (
                <motion.div
                  key={button.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Button variant={button.variant} className="w-full">
                    {button.name}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
