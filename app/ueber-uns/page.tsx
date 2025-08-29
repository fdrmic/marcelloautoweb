"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Phone,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function UeberUnsPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-white">
      <main className="flex-1 pt-16">
        {/* Main Content */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-950 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Hero Content - Moved to top */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
                Über <span className="text-[#FF0000]">uns</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-2">
                Ihre Garage in Seewen
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left Side - Content without Image */}
              <div className="space-y-6 sm:space-y-8">
                {/* Additional Content Box */}
                <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Warum Marcello Auto?</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      <span className="text-gray-300 text-xs sm:text-sm">Über 20 Jahre Erfahrung</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      <span className="text-gray-300 text-xs sm:text-sm">Zertifizierte Meisterwerkstatt</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      <span className="text-gray-300 text-xs sm:text-sm">Persönliche Betreuung</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      <span className="text-gray-300 text-xs sm:text-sm">Faire und transparente Preise</span>
                    </div>
                  </div>
                </div>

                {/* Unser Team Section - Moved to Left */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white border-b border-gray-700 pb-2">Unser Team</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Unser motiviertes Team besteht aus erfahrenen Fachleuten, die täglich mit Know-how und Leidenschaft an Fahrzeugen arbeiten. Ob Service, Reparatur oder Verkauf – wir vereinen technisches Können mit echter Freude am Automobil.
                  </p>
                </div>

                {/* Was uns auszeichnet Section - Moved to Left */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white border-b border-gray-700 pb-2">Was uns auszeichnet</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#FF0000] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm">Umfassendes Leistungsangebot: von der Inspektion bis zum Fahrzeugverkauf</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#FF0000] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm">Moderne Werkstatt mit aktueller Diagnosetechnik</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#FF0000] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm">Faire Konditionen und persönliche Beratung</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#FF0000] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm">Regionale Verankerung – Ihr Partner vor Ort</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {/* Über uns Section - Enhanced */}
                <div className="bg-gray-900/30 p-6 sm:p-8 rounded-2xl border border-gray-800">
                  <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-gray-600 pb-2 sm:pb-3">Über uns</h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                      Die Marcello Auto GmbH ist Ihre vertrauensvolle Anlaufstelle für Reparaturen, Service und Fahrzeughandel in der Region Seewen. Mit Leidenschaft für Autos und einem klaren Fokus auf Qualität sorgen wir dafür, dass Ihr Fahrzeug jederzeit in den besten Händen ist.
                    </p>
                  </div>
                </div>

                {/* Unsere Philosophie Section - Enhanced */}
                <div className="bg-gray-900/30 p-6 sm:p-8 rounded-2xl border border-gray-800">
                  <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-gray-600 pb-2 sm:pb-3">Unsere Philosophie</h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                      Bei uns steht Zuverlässigkeit, Ehrlichkeit und Kundennähe an erster Stelle. Wir möchten, dass Sie sich nicht nur auf Ihr Auto, sondern auch auf unsere Arbeit verlassen können.
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-lg">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FF0000] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-white text-sm sm:text-base">Persönlich:</span>
                          <span className="text-gray-300 text-sm sm:text-base"> Wir nehmen uns Zeit für Ihre Anliegen.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-lg">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FF0000] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-white text-sm sm:text-base">Transparent:</span>
                          <span className="text-gray-300 text-sm sm:text-base"> Faire Preise und klare Kommunikation sind für uns selbstverständlich.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 rounded-lg">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FF0000] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-white text-sm sm:text-base">Kompetent:</span>
                          <span className="text-gray-300 text-sm sm:text-base"> Unsere Erfahrung und modernste Technik sichern Ihnen höchste Servicequalität.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ihr Vorteil – unsere Erfahrung Section - Centered on Full Width */}
            <div className="mt-16 sm:mt-20 md:mt-24 text-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-gray-700 pb-2 sm:pb-3">Ihr Vorteil – unsere Erfahrung</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto px-2">
                  Egal ob Routine-Service, Unfallinstandsetzung oder der Kauf eines neuen Autos: Wir begleiten Sie von Anfang bis Ende mit Fachkompetenz und einem Lächeln. Denn unsere Mission ist es, dass Sie zufrieden und sicher unterwegs sind.
                </p>
                
                <div className="pt-4 sm:pt-6">
                  <Link href="/kontakt">
                    <Button
                      size="lg"
                      className="bg-[#FF0000] text-white hover:bg-[#E60000] text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Kontaktieren Sie uns
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
