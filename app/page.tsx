"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Car,
  CheckCircle,
  Wrench,
  Settings,
  Shield,
  Clock,
  Award,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Component() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // CSS Animationen hinzufügen
    const style = document.createElement("style")
    style.textContent = `
    @keyframes fadeInCar {
      0% {
        opacity: 0;
        transform: scale(1.1);
        filter: blur(10px);
      }
      100% {
        opacity: 0.4;
        transform: scale(1);
        filter: blur(0px);
      }
    }
    
    @keyframes revealCar {
      0% {
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
      }
      100% {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }
    
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInDelay {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      50% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInDelay2 {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      70% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 0.8s ease-out forwards;
    }

    .animate-fade-in-delay {
      opacity: 0;
      animation: fadeInDelay 1.2s ease-out forwards;
    }

    .animate-fade-in-delay-2 {
      opacity: 0;
      animation: fadeInDelay2 1.6s ease-out forwards;
    }
  `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[100vh] flex items-center justify-center text-center overflow-hidden">
          {/* Parallax Background - Fahrzeug sofort sichtbar */}
          <div
            className="absolute inset-0 w-full h-[120%]"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.3, 200)}px)`,
            }}
          >
            <Image
              src="/images/front-view-dark-silhouette-modern-sport-black-car-isolated-black-background_698214-2938.avif"
              width={1920}
              height={1080}
              alt="Luxury Car Background"
              className="w-full h-full object-cover object-center opacity-40"
              priority
              quality={100}
              sizes="100vw"
              style={{
                objectPosition: "center center",
              }}
            />
          </div>

          {/* Car Reveal Effect - Fahrzeug sofort sichtbar */}
          <div
            className="absolute inset-0 w-full h-[120%] bg-black"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.3, 200)}px)`,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/images/front-view-dark-silhouette-modern-sport-black-car-isolated-black-background_698214-2938.avif"
              width={1920}
              height={1080}
              alt="Luxury Car Reveal"
              className="w-full h-full object-cover object-center opacity-40"
              priority
              quality={100}
              sizes="100vw"
              style={{
                objectPosition: "center center",
              }}
            />
          </div>

          {/* Parallax Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.2, 150)}px)`,
            }}
          />

          {/* Content - Slogan und Buttons mit Einblend-Effekt */}
          <div
            className="relative z-10 space-y-4 md:space-y-6 lg:space-y-8 px-4 md:px-6 max-w-6xl mx-auto w-full"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.1, 100)}px)`,
            }}
          >
            <h1 
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl leading-tight px-2 animate-fade-in`}
            >
              Ihre Vertrauensvolle
              <br />
              <span className="text-[#FF0000] drop-shadow-[0_0_30px_rgba(255,0,0,0.3)] animate-pulse">
                Autogarage
              </span>
            </h1>
            <p 
              className={`max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 drop-shadow-lg leading-relaxed px-2 md:px-4 animate-fade-in-delay`}
            >
              Professionelle Reparaturen, Wartung und Fahrzeughandel - Ihr Auto ist bei uns in den besten Händen.
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center pt-2 sm:pt-4 md:pt-8 px-2 md:px-4 animate-fade-in-delay-2`}>
              <Link href="/dienstleistungen" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#FF0000] text-white hover:bg-[#E60000] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300 transform hover:scale-105"
                >
                  Unsere Services
                </Button>
              </Link>
              <Link href="/ueber-uns" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-[#FF0000] hover:border-[#FF0000] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  Über uns
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating Elements - erscheinen nach dem Content */}
          <div
            className="absolute top-20 left-10 w-4 h-4 bg-[#FF0000] rounded-full opacity-60 animate-[fadeInContent_1s_ease-out_2.5s_forwards] opacity-0"
            style={{
              transform: `translateY(${scrollY * 0.8}px) rotate(${scrollY * 0.5}deg)`,
            }}
          />
          <div
            className="absolute top-40 right-20 w-6 h-6 border-2 border-[#FF0000] rounded-full opacity-40 animate-[fadeInContent_1s_ease-out_2.7s_forwards] opacity-0"
            style={{
              transform: `translateY(${scrollY * 0.6}px) rotate(${-scrollY * 0.3}deg)`,
            }}
          />
          <div
            className="absolute bottom-40 left-20 w-8 h-8 border border-white/20 rounded-full opacity-30 animate-[fadeInContent_1s_ease-out_2.9s_forwards] opacity-0"
            style={{
              transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.2}deg)`,
            }}
          />
        </section>

        {/* Services Section - schwarzer Hintergrund */}
        <section className="py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden">
          {/* Background Pattern - angepasst */}
          <div
            className="absolute inset-0 opacity-3"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              backgroundImage: `radial-gradient(circle at 25% 25%, #FF0000 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-12 md:space-y-16 relative z-10">
            <div
              className="space-y-4 md:space-y-6"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 800) * 0.1)}px)`,
              }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white px-2">Unsere Dienstleistungen</h2>
              <p className="max-w-4xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-4">
                Von Service bis Verkauf – bei Marcello Auto erhalten Sie alles aus einer Hand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center max-w-7xl mx-auto">
              {/* Reparatur & Wartung */}
              <div
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.05)}px)`,
                }}
              >
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 text-white flex flex-col h-full hover:bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group">
                  <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                    <CardTitle className="text-lg md:text-xl font-bold text-center">Reparatur & Wartung</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 flex-grow flex flex-col justify-between">
                    <div className="space-y-2 min-h-[120px] md:min-h-[140px]">
                      <CardDescription className="text-gray-400 text-xs md:text-sm text-center">
                        Kompletter Service für alle Fahrzeugmarken – zuverlässig, schnell und professionell.
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-300 text-xs mb-3 md:mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Inspektion & MFK
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Motor- und Getriebeservice
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Bremsen & Fahrwerk
                      </div>
                    </div>
                    <Button className="w-full bg-[#FF0000] text-white hover:bg-[#E60000] rounded-full py-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 text-xs md:text-sm">
                      <Link href="/dienstleistungen">Mehr Erfahren</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Karosserie & Lackierung */}
              <div
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 1100) * 0.05)}px)`,
                }}
              >
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 text-white flex flex-col h-full hover:bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group">
                  <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                    <CardTitle className="text-lg md:text-xl font-bold text-center">Karosserie & Lackierung</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 flex-grow flex flex-col justify-between">
                    <div className="space-y-2 min-h-[120px] md:min-h-[140px]">
                      <CardDescription className="text-gray-400 text-xs md:text-sm text-center">
                        Wir bringen Ihr Auto wieder in Topform – von kleinen Kratzern bis zur Unfallinstandsetzung.
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-300 text-xs mb-3 md:mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Unfallreparaturen
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Lackierung & Politur
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Dellen- und Kratzerentfernung
                      </div>
                    </div>
                    <Button className="w-full bg-[#FF0000] text-white hover:bg-[#E60000] rounded-full py-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 text-xs md:text-sm">
                      <Link href="/dienstleistungen">Mehr Erfahren</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* An- & Verkauf */}
              <div
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 1200) * 0.05)}px)`,
                }}
              >
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 text-white flex flex-col h-full hover:bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group">
                  <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                    <CardTitle className="text-lg md:text-xl font-bold text-center">Fahrzeug An- & Verkauf</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 flex-grow flex flex-col justify-between">
                    <div className="space-y-2 min-h-[120px] md:min-h-[140px]">
                      <CardDescription className="text-gray-400 text-xs md:text-sm text-center">
                        Faire Angebote und geprüfte Occasionen direkt vor Ort.
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-300 text-xs mb-3 md:mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Fahrzeugbewertung
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Sofortiger Ankauf
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Occasionen mit Garantie
                      </div>
                    </div>
                    <Button className="w-full bg-[#FF0000] text-white hover:bg-[#E60000] rounded-full py-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 text-xs md:text-sm">
                      <Link href="/dienstleistungen">Mehr Erfahren</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Reifen & Räder */}
              <div
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 1300) * 0.05)}px)`,
                }}
              >
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 text-white flex flex-col h-full hover:bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group">
                  <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                    <CardTitle className="text-lg md:text-xl font-bold text-center">Reifen & Räder</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 flex-grow flex flex-col justify-between">
                    <div className="space-y-2 min-h-[120px] md:min-h-[140px]">
                      <CardDescription className="text-gray-400 text-xs md:text-sm text-center">
                        Sicherheit zu jeder Jahreszeit.
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-300 text-xs mb-3 md:mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Reifenwechsel & Einlagerung
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Auswuchten & Montage
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#FF0000]" /> Beratung für Sommer- und Winterreifen
                      </div>
                    </div>
                    <Button className="w-full bg-[#FF0000] text-white hover:bg-[#E60000] rounded-full py-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 text-xs md:text-sm">
                      <Link href="/dienstleistungen">Mehr Erfahren</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 1400) * 0.08)}px)`,
              }}
            >
              <Link href="/dienstleistungen">
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-12 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-[#FF0000] hover:border-[#FF0000] text-lg px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Alle Services Ansehen
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - schwarzer Hintergrund */}
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
          {/* Parallax Background Elements */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-3xl"
            style={{
              transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.05}px)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF0000]/3 rounded-full blur-3xl"
            style={{
              transform: `translateY(${-scrollY * 0.1}px) translateX(${-scrollY * 0.03}px)`,
            }}
          />

          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-16 relative z-10">
            <div
              className="space-y-6"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 1800) * 0.1)}px)`,
              }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Warum Marcello Auto?</h2>
              <p className="max-w-4xl mx-auto text-gray-300 text-xl leading-relaxed">
                Über 20 Jahre Erfahrung und höchste Qualitätsstandards für Ihr Fahrzeug.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div
                className="flex flex-col items-center text-center space-y-6 group"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 2000) * 0.08)}px)`,
                }}
              >
                <div className="w-24 h-24 bg-[#FF0000]/10 rounded-full flex items-center justify-center group-hover:bg-[#FF0000]/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                  <Shield className="h-12 w-12 text-[#FF0000]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Technische Exzellenz</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                Wir verbinden Erfahrung mit neuester Technologie – für nachhaltige Qualität und Sicherheit
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center space-y-6 group"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 2100) * 0.08)}px)`,
                }}
              >
                <div className="w-24 h-24 bg-[#FF0000]/10 rounded-full flex items-center justify-center group-hover:bg-[#FF0000]/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                  <Clock className="h-12 w-12 text-[#FF0000]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Schneller Service</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                Zügige Abwicklung und klare Kommunikation – damit Sie schnell wieder mobil sind.
                </p>
              </div>

              <div
                className="flex flex-col items-center text-center space-y-6 group"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 2200) * 0.08)}px)`,
                }}
              >
                <div className="w-24 h-24 bg-[#FF0000]/10 rounded-full flex items-center justify-center group-hover:bg-[#FF0000]/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                  <Users className="h-12 w-12 text-[#FF0000]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Persönliche Betreuung</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                Wir nehmen uns Zeit für Sie – mit ehrlicher Beratung und Betreuung rund um Ihr Fahrzeug.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - schwarzer Hintergrund */}
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/5 via-transparent to-[#FF0000]/5"
            style={{
              transform: `translateX(${scrollY * 0.1}px)`,
            }}
          />

          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-10 relative z-10">
            <div
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 2600) * 0.1)}px)`,
              }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Braucht Ihr Auto einen Service?
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed mb-10">
                Vereinbaren Sie noch heute einen Termin oder lassen Sie sich unverbindlich beraten.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/dienstleistungen">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-[#FF0000] hover:border-[#FF0000] text-lg px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    Services ansehen
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button
                    size="lg"
                    className="bg-[#FF0000] text-white hover:bg-[#E60000] text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                  >
                    Termin vereinbaren
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
