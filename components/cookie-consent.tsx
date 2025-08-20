"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="h-6 w-6 text-[#FF0000] mt-1 flex-shrink-0" />
          <div className="text-sm text-gray-300">
            <p>
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
              Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
            </p>
          </div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
            className="text-gray-300 border-gray-600 hover:bg-gray-800"
          >
            Ablehnen
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="bg-[#FF0000] hover:bg-[#E60000]"
          >
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  )
} 