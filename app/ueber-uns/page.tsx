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
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] flex items-center justify-center text-center overflow-hidden bg-gray-950">
          {/* Content */}
          <div className="relative z-10 space-y-8 px-4 md:px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
              Über uns – Auto RiKu AG
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow-lg leading-relaxed">
              Ihre Garage in Diepoldsau
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-gray-950 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Image and Team Placeholder */}
              <div className="space-y-8">
                {/* Main Image - Side Entry Effect */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div 
                    className="bg-gray-800 h-96 rounded-2xl flex items-center justify-center transform transition-all duration-1000 ease-out"
                    style={{
                      transform: `translateX(${Math.max(0, (scrollY - 200) * 0.3)}px)`,
                      opacity: Math.min(1, (scrollY - 100) * 0.01)
                    }}
                  >
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">🏢</div>
                      <p className="text-lg">Auto RiKu AG Werkstatt</p>
                      <p className="text-sm">Professionelle Werkstatt in Diepoldsau</p>
                    </div>
                  </div>
                </div>

                {/* Additional Content Box */}
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">Warum Auto RiKu?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      <span className="text-gray-300 text-sm">Über 20 Jahre Erfahrung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      <span className="text-gray-300 text-sm">Zertifizierte Meisterwerkstatt</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      <span className="text-gray-300 text-sm">Persönliche Betreuung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                      <span className="text-gray-300 text-sm">Faire und transparente Preise</span>
                    </div>
                  </div>
                </div>

                {/* Unser Team Section - Moved to Left */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-2">Unser Team</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Unser motiviertes Team besteht aus erfahrenen Fachleuten, die täglich mit Know-how und Leidenschaft an Fahrzeugen arbeiten. Ob Service, Reparatur oder Verkauf – wir vereinen technisches Können mit echter Freude am Automobil.
                  </p>
                </div>

                {/* Was uns auszeichnet Section - Moved to Left */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-2">Was uns auszeichnet</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#FF0000] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Umfassendes Leistungsangebot: von der Inspektion bis zum Fahrzeugverkauf</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#FF0000] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Moderne Werkstatt mit aktueller Diagnosetechnik</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#FF0000] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Faire Konditionen und persönliche Beratung</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#FF0000] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Regionale Verankerung – Ihr Partner vor Ort</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white border-b border-gray-700 pb-3">Über uns</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Die Auto RiKu AG ist Ihre vertrauensvolle Anlaufstelle für Reparaturen, Service und Fahrzeughandel in der Region Diepoldsau. Mit Leidenschaft für Autos und einem klaren Fokus auf Qualität sorgen wir dafür, dass Ihr Fahrzeug jederzeit in den besten Händen ist.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white border-b border-gray-700 pb-3">Unsere Philosophie</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Bei uns steht Zuverlässigkeit, Ehrlichkeit und Kundennähe an erster Stelle. Wir möchten, dass Sie sich nicht nur auf Ihr Auto, sondern auch auf unsere Arbeit verlassen können.
                  </p>
                  
                  <div className="space-y-4 bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-white">Persönlich:</span>
                        <span className="text-gray-300"> Wir nehmen uns Zeit für Ihre Anliegen.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-white">Transparent:</span>
                        <span className="text-gray-300"> Faire Preise und klare Kommunikation sind für uns selbstverständlich.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-white">Kompetent:</span>
                        <span className="text-gray-300"> Unsere Erfahrung und modernste Technik sichern Ihnen höchste Servicequalität.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Placeholder with Scroll Animation - Right Side */}
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div 
                      className="bg-gray-800 h-80 rounded-2xl flex items-center justify-center transform transition-all duration-1000 ease-out"
                      style={{
                        transform: `translateX(${Math.max(0, (scrollY - 400) * 0.1)}px)`,
                        opacity: Math.min(1, (scrollY - 300) * 0.005)
                      }}
                    >
                      <div className="text-center text-gray-400">
                        <div className="text-6xl mb-4">🛠️</div>
                        <p className="text-lg">Unsere Werkstatt</p>
                        <p className="text-sm">Platzhalter für Werkstattbild</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ihr Vorteil – unsere Erfahrung Section - Centered on Full Width */}
            <div className="mt-24 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white border-b border-gray-700 pb-3">Ihr Vorteil – unsere Erfahrung</h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Egal ob Routine-Service, Unfallinstandsetzung oder der Kauf eines neuen Autos: Wir begleiten Sie von Anfang bis Ende mit Fachkompetenz und einem Lächeln. Denn unsere Mission ist es, dass Sie zufrieden und sicher unterwegs sind.
                </p>
                
                <div className="pt-6">
                  <Link href="/kontakt">
                    <Button
                      size="lg"
                      className="bg-[#FF0000] text-white hover:bg-[#E60000] text-lg px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="h-5 w-5 mr-2" />
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
