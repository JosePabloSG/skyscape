import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold text-primary">404</h1>
          <h2 className="mt-2 text-3xl font-bold text-foreground">Página no encontrada</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/" passHref>
            <Button className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a la página principal
            </Button>
          </Link>
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Si crees que esto es un error, por favor contacta con nuestro soporte.</p>
        </div>
      </div>
    </div>
  )
}