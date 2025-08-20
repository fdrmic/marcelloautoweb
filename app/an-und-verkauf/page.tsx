"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Car,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Wrench,
  Upload,
  Euro,
  Settings,
  CheckCircle,
  ArrowLeft,
  Award,
  Shield,
  Clock,
  Users,
  X,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { submitAnkaufForm, submitVerkaufForm } from "./actions"

export default function AnUndVerkaufPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lokale Submit-Funktion für das Formular
  const handleSubmit = async (formData: FormData) => {
    try {
      await submitVerkaufForm(formData)
    } catch (error) {
      console.error('Fehler beim Absenden des Formulars:', error)
    }
  }

  // Berechne die Navbar-Transparenz basierend auf der Scroll-Position
  const getNavbarStyle = () => {
    if (scrollY < 200) {
      return {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }
    } else {
      return {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        backdropFilter: "blur(10px)",
        borderColor: "rgba(75, 85, 99, 0.3)",
      }
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-white">
      <main className="flex-1 pt-16">
        {/* Hero Section - zentriert */}
        <section className="relative w-full h-[40vh] flex items-center justify-center text-center overflow-hidden bg-black">
          {/* Content - zentriert */}
          <div className="relative z-10 space-y-6 px-4 md:px-6 max-w-6xl mx-auto w-full">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
              An- & Verkauf
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-200 drop-shadow-lg leading-relaxed">
              Verkaufen Sie Ihr Fahrzeug oder finden Sie Ihr Traumauto bei uns
            </p>
          </div>
        </section>

        {/* Main Content - zentriert */}
        <section className="py-24 bg-black relative">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <Tabs defaultValue="verkauf" className="w-full">
              <TabsList className="flex w-full mb-12 bg-gray-800 border border-gray-700 rounded-xl p-1">
                <TabsTrigger
                  value="verkauf"
                  className="flex-1 data-[state=active]:bg-[#FF0000] data-[state=active]:text-white data-[state=active]:shadow-lg text-lg py-4 px-6 rounded-lg transition-all duration-300 data-[state=inactive]:text-gray-300 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-gray-700 text-center justify-center"
                >
                  Fahrzeug Verkaufen
                </TabsTrigger>
                <TabsTrigger
                  value="ankauf"
                  className="flex-1 data-[state=active]:bg-[#FF0000] data-[state=active]:text-white data-[state=active]:shadow-lg text-lg py-4 px-6 rounded-lg transition-all duration-300 data-[state=inactive]:text-gray-300 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-gray-700 text-center justify-center"
                >
                  Fahrzeug Kaufen
                </TabsTrigger>
              </TabsList>

              {/* Verkauf Tab - angepasst für schwarzen Hintergrund */}
              <TabsContent value="verkauf">
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 text-white">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold mb-4">Fahrzeug Verkaufen</CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      Geben Sie hier alle wichtigen Informationen Ihres Fahrzeugs an und wir melden uns bei Ihnen.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form action={handleSubmit} className="space-y-8">
                      {/* Persönliche Daten */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
                          Persönliche Daten
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                              Vorname *
                            </Label>
                            <Input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="Ihr Vorname"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                              Nachname *
                            </Label>
                            <Input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="Ihr Nachname"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                              E-Mail *
                            </Label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="ihre.email@beispiel.ch"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
                              Telefon *
                            </Label>
                            <Input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="+41 76 123 66 78"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Fahrzeugdaten */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
                          Fahrzeugdaten
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="brand" className="text-sm font-medium text-gray-300">
                              Marke *
                            </Label>
                            <Input
                              type="text"
                              id="brand"
                              name="brand"
                              required
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="z.B. BMW, Mercedes, Audi"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="model" className="text-sm font-medium text-gray-300">
                              Modell *
                            </Label>
                            <Input
                              type="text"
                              id="model"
                              name="model"
                              required
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="z.B. 3er, C-Klasse, A4"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="year" className="text-sm font-medium text-gray-300">
                              Baujahr *
                            </Label>
                            <Input
                              type="number"
                              id="year"
                              name="year"
                              required
                              min="1900"
                              max={new Date().getFullYear() + 1}
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="2020"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mileage" className="text-sm font-medium text-gray-300">
                              Kilometerstand *
                            </Label>
                            <Input
                              type="number"
                              id="mileage"
                              name="mileage"
                              required
                              min="0"
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="50000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="fuelType" className="text-sm font-medium text-gray-300">
                              Kraftstoffart *
                            </Label>
                            <Select name="fuelType" required>
                              <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:ring-[#FF0000] focus:border-[#FF0000]">
                                <SelectValue placeholder="Bitte wählen" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                <SelectItem value="benzin">Benzin</SelectItem>
                                <SelectItem value="diesel">Diesel</SelectItem>
                                <SelectItem value="hybrid">Hybrid</SelectItem>
                                <SelectItem value="elektro">Elektro</SelectItem>
                                <SelectItem value="lpg">LPG</SelectItem>
                                <SelectItem value="cng">CNG</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="priceExpectation" className="text-sm font-medium text-gray-300">
                              Preisvorstellung
                            </Label>
                            <Input
                              type="number"
                              id="priceExpectation"
                              name="priceExpectation"
                              min="0"
                              step="100"
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                              placeholder="15000"
                            />
                            <p className="text-xs text-gray-400">Geben Sie Ihren gewünschten Verkaufspreis in CHF an</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="condition" className="text-sm font-medium text-gray-300">
                              Fahrzeugzustand
                            </Label>
                            <Select name="condition">
                              <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:ring-[#FF0000] focus:border-[#FF0000]">
                                <SelectValue placeholder="Zustand wählen" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                <SelectItem value="excellent">Ausgezeichnet</SelectItem>
                                <SelectItem value="good">Gut</SelectItem>
                                <SelectItem value="fair">Befriedigend</SelectItem>
                                <SelectItem value="poor">Schlecht</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description" className="text-sm font-medium text-gray-300">
                            Beschreibung
                          </Label>
                          <Textarea
                            id="description"
                            name="description"
                            rows={4}
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000] resize-none"
                            placeholder="Beschreiben Sie den Zustand Ihres Fahrzeugs, besondere Ausstattungen, etc."
                          ></Textarea>
                        </div>

                        {/* Bild-Upload */}
                        <div className="space-y-4">
                          <Label className="text-sm font-medium text-gray-300">
                            Fahrzeugbilder (max. 6 Bilder)
                          </Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Upload-Buttons für 6 Bilder */}
                            {[1, 2, 3, 4, 5, 6].map((index) => (
                              <div key={index} className="relative">
                                <input
                                  type="file"
                                  id={`image-${index}`}
                                  name={`image-${index}`}
                                  accept="image/*"
                                  className="hidden"
                                />
                                <label
                                  htmlFor={`image-${index}`}
                                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 hover:border-[#FF0000] transition-all duration-300 group"
                                >
                                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <div className="w-8 h-8 mb-3 text-gray-400 group-hover:text-[#FF0000] transition-colors">
                                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                      </svg>
                                    </div>
                                    <p className="mb-2 text-sm text-gray-400 group-hover:text-gray-300">
                                      <span className="font-semibold">Bild {index} hochladen</span>
                                    </p>
                                    <p className="text-xs text-gray-500">JPG, PNG oder GIF</p>
                                  </div>
                                </label>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-gray-400">
                            Laden Sie bis zu 6 Bilder Ihres Fahrzeugs hoch. Empfohlen: Seitenansicht, Front, Heck, Innenraum, Motorraum, weitere Details.
                          </p>
                        </div>
                      </div>

                      {/* Datenschutz */}
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          required
                          className="mt-1 w-4 h-4 text-[#FF0000] bg-gray-800 border-gray-600 rounded focus:ring-[#FF0000] focus:ring-2"
                        />
                        <Label htmlFor="privacy" className="text-sm text-gray-300">
                          Ich stimme der{" "}
                          <a href="#" className="text-[#FF0000] hover:underline">
                            Datenschutzerklärung
                          </a>{" "}
                          zu *
                        </Label>
                      </div>

                      <div className="pt-6">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-[#FF0000] text-white hover:bg-[#E60000] text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                        >
                          <Car className="h-5 w-5 mr-2" />
                          Anfrage absenden
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Ankauf Tab - angepasst für schwarzen Hintergrund */}
              <TabsContent value="ankauf">
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800 text-white">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold mb-4">Fahrzeug Kaufen</CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      Entdecken Sie unsere geprüften Fahrzeuge mit Garantie
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-8">
                      <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                          Wir bieten Ihnen eine sorgfältig ausgewählte Auswahl an qualitativ hochwertigen Fahrzeugen.
                        </p>

                        {/* AutoScout24 HCI Integration */}
                        <div className="mt-8">
                          <div className="hci-container" data-config-id="12354" data-language="de" data-entry-point="search"></div>
                          <script src="https://www.autoscout24.ch/assets/hci/v2/hci.current.js"></script>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
