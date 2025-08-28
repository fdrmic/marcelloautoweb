"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function DienstleistungenPage() {
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
        <section className="relative w-full h-[25vh] md:h-[30vh] flex items-center justify-center text-center overflow-hidden bg-gray-950">
          {/* Content */}
          <div className="relative z-10 space-y-3 md:space-y-4 px-4 md:px-6 flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl">
              Unsere
              <br />
              <span className="text-[#FF0000] drop-shadow-[0_0_30px_rgba(255,0,0,0.3)]">Dienstleistungen</span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-lg leading-relaxed px-4">
              Professioneller Service für alle Fahrzeugmarken und -modelle
            </p>
          </div>
        </section>

        {/* Reparatur & Wartung Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gray-900 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Reparatur & Wartung
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Ihr Fahrzeug ist bei uns in den besten Händen – egal welche Marke oder welches Modell. Wir bieten Ihnen einen umfassenden Service, damit Sie sicher und sorgenfrei unterwegs sind.
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Unsere Leistungen im Überblick:</h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Inspektion & MFK:</span>
                        <span className="text-gray-300"> Vorbereitung und Durchführung für die Motorfahrzeugkontrolle</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Motor- und Getriebeservice:</span>
                        <span className="text-gray-300"> Diagnose, Reparatur und Austausch</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Bremsen & Fahrwerk:</span>
                        <span className="text-gray-300"> Wartung und Erneuerung für maximale Fahrsicherheit</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#FF0000]/10 border-l-4 border-[#FF0000] p-3 md:p-4 rounded-r-lg">
                  <p className="text-white font-medium text-sm md:text-base">
                    ➡ Mit regelmässiger Wartung verlängern Sie die Lebensdauer Ihres Autos und sparen Kosten.
                  </p>
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="bg-gray-800 rounded-lg h-64 md:h-80 lg:h-96 flex items-center justify-center">
                <Image
                  src="/reparatur.jpg"
                  alt="Professioneller Mechaniker arbeitet am Motor"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Karosserie & Lackierung Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gray-950 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Image Placeholder */}
              <div className="bg-gray-800 rounded-lg h-64 md:h-80 lg:h-96 flex items-center justify-center order-2 lg:order-1">
                <Image
                  src="/lackieren.jpg"
                  alt="Professionelle Autopflege und Lackierung"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Karosserie & Lackierung
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Ob kleiner Kratzer oder grösserer Unfallschaden – wir bringen Ihr Auto zurück in Bestform. Unsere Werkstatt arbeitet mit modernster Technik und viel Erfahrung.
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Unsere Leistungen im Überblick:</h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Unfallreparaturen:</span>
                        <span className="text-gray-300"> von der Schadenanalyse bis zur kompletten Instandsetzung</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Lackierung & Politur:</span>
                        <span className="text-gray-300"> Glanz und Schutz für Ihr Fahrzeug</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Dellen- und Kratzerentfernung:</span>
                        <span className="text-gray-300"> kosteneffizient und schnell</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#FF0000]/10 border-l-4 border-[#FF0000] p-3 md:p-4 rounded-r-lg">
                  <p className="text-white font-medium text-sm md:text-base">
                    ➡ Wir legen Wert auf perfekte Qualität, sodass Ihr Auto wieder aussieht wie neu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fahrzeug An- & Verkauf Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gray-900 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Fahrzeug An- & Verkauf
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Sie möchten Ihr Auto verkaufen oder suchen ein neues? Bei Marcello Auto sind Sie richtig. Wir bieten faire Preise beim Ankauf und geprüfte Occasionen mit Garantie.
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Unsere Leistungen im Überblick:</h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Fahrzeugbewertung:</span>
                        <span className="text-gray-300"> transparent und marktgerecht</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Sofortiger Ankauf:</span>
                        <span className="text-gray-300"> unkompliziert und zuverlässig</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div className="text-sm md:text-base">
                        <span className="font-semibold text-white">Occasionen mit Garantie:</span>
                        <span className="text-gray-300"> geprüfte Fahrzeuge für sorgenfreies Fahren</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#FF0000]/10 border-l-4 border-[#FF0000] p-3 md:p-4 rounded-r-lg">
                  <p className="text-white font-medium text-sm md:text-base">
                    ➡ Vertrauen Sie auf unsere Erfahrung und finden Sie Ihr nächstes Auto bei uns.
                  </p>
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="bg-gray-800 rounded-lg h-64 md:h-80 lg:h-96 flex items-center justify-center">
                <Image
                  src="/autos.jpg"
                  alt="Großer Fahrzeugbestand - An- und Verkauf"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reifen & Räder Section */}
        <section className="py-24 bg-gray-950 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center order-2 lg:order-1">
                <Image
                  src="/reifen.jpg"
                  alt="Professioneller Reifenwechsel und Reifenpflege"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Reifen & Räder
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Reifen sind die Verbindung zwischen Ihrem Auto und der Strasse – darum kümmern wir uns professionell um alles rund um Räder und Reifen.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">Unsere Leistungen im Überblick:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white">Reifenwechsel & Einlagerung:</span>
                        <span className="text-gray-300"> bequem und sicher, inklusive fachgerechter Lagerung</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white">Auswuchten & Montage:</span>
                        <span className="text-gray-300"> für ruhiges Fahrverhalten und lange Lebensdauer der Reifen</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#FF0000] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white">Beratung für Sommer- und Winterreifen:</span>
                        <span className="text-gray-300"> individuell auf Ihr Fahrzeug und Ihre Bedürfnisse abgestimmt</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#FF0000]/10 border-l-4 border-[#FF0000] p-4 rounded-r-lg">
                  <p className="text-white font-medium">
                    ➡ Mit den richtigen Reifen fahren Sie sicher durch jede Jahreszeit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-gray-900 relative">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Ihr Auto in besten Händen.
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed mb-10">
              Ob Service, Reparatur oder Fahrzeugkauf – wir sind für Sie da. Vereinbaren Sie jetzt einfach und unkompliziert einen Termin.
            </p>
            <div className="flex justify-center">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-[#FF0000] text-white hover:bg-[#E60000] text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Jetzt Termin vereinbaren
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
