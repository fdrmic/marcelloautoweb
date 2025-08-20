"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Headphones,
  Globe,
  Smartphone,
  VoicemailIcon as Fax,
  Navigation,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { submitKontaktForm } from "./actions"

export default function KontaktPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lokale Submit-Funktion für das Formular (später mit Resend zu konfigurieren)
  const handleSubmit = async (formData: FormData) => {
    // TODO: Hier später Resend-Integration für E-Mail-Versand implementieren
    console.log('Formular abgesendet:', formData)
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

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      primary: "+49 (0) 30 123 456 78",
      secondary: "Mo-Fr: 7:00-18:00 Uhr",
      description: "Rufen Sie uns direkt an",
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "E-Mail",
      primary: "info@autowerkstatt-pro.de",
      secondary: "Antwort binnen 24h",
      description: "Schreiben Sie uns eine Nachricht",
      color: "bg-blue-500",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      primary: "+49 (0) 151 123 456 78",
      secondary: "Mo-Sa: 8:00-20:00 Uhr",
      description: "Schnelle Kommunikation",
      color: "bg-green-600",
    },
    {
      icon: Headphones,
      title: "Notdienst",
      primary: "+49 (0) 172 987 654 32",
      secondary: "24/7 Verfügbar",
      description: "Pannenhilfe & Abschleppdienst",
      color: "bg-red-500",
    },
  ]

  const openingHours = [
    { day: "Montag", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { day: "Dienstag", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { day: "Mittwoch", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { day: "Donnerstag", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { day: "Freitag", hours: "08:00 - 12:00, 13:30 - 18:00" },
    { day: "Samstag", hours: "09:00 - 12:00" },
    { day: "Sonntag", hours: "Geschlossen" },
  ]

  const departments = [
    {
      name: "Werkstattleitung",
      contact: "Sarah Müller",
      phone: "+49 (0) 30 123 456 79",
      email: "werkstatt@autowerkstatt-pro.de",
      speciality: "Reparaturen & Wartung",
    },
    {
      name: "Verkauf & Ankauf",
      contact: "Anna Hoffmann",
      phone: "+49 (0) 30 123 456 80",
      email: "verkauf@autowerkstatt-pro.de",
      speciality: "Fahrzeughandel",
    },
    {
      name: "Lackiererei",
      contact: "Thomas Schmidt",
      phone: "+49 (0) 30 123 456 81",
      email: "lackierung@autowerkstatt-pro.de",
      speciality: "Karosserie & Lack",
    },
    {
      name: "Geschäftsführung",
      contact: "Michael Weber",
      phone: "+49 (0) 30 123 456 82",
      email: "geschaeftsfuehrung@autowerkstatt-pro.de",
      speciality: "Allgemeine Anfragen",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-white">
      <main className="flex-1 pt-16">
        {/* Main Content Grid */}
        <section className="py-24 bg-gray-950 relative">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight text-white">Kontaktieren Sie uns</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Nutzen Sie unser Kontaktformular - wir
                    melden uns schnellstmöglich bei Ihnen.
                  </p>
                </div>

                <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <Send className="h-6 w-6 text-[#FF0000]" />
                      Kontaktformular
                    </CardTitle>
                    <CardDescription className="text-gray-300">Alle Felder mit * sind Pflichtfelder</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form action={handleSubmit} className="space-y-6">
                      {/* Persönliche Daten */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vorname">Vorname *</Label>
                          <Input
                            id="vorname"
                            name="vorname"
                            required
                            className="bg-gray-700 border-gray-600 text-white focus:border-[#FF0000]"
                            placeholder="Max"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nachname">Nachname *</Label>
                          <Input
                            id="nachname"
                            name="nachname"
                            required
                            className="bg-gray-700 border-gray-600 text-white focus:border-[#FF0000]"
                            placeholder="Mustermann"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">E-Mail *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="bg-gray-700 border-gray-600 text-white focus:border-[#FF0000]"
                            placeholder="max@beispiel.de"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefon">Telefon</Label>
                          <Input
                            id="telefon"
                            name="telefon"
                            className="bg-gray-700 border-gray-600 text-white focus:border-[#FF0000]"
                            placeholder="+41 76 123 56 89"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="betreff">Betreff *</Label>
                        <Select name="betreff" required>
                          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                            <SelectValue placeholder="Wählen Sie einen Betreff" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="termin">Terminanfrage</SelectItem>
                            <SelectItem value="reparatur">Reparaturanfrage</SelectItem>
                            <SelectItem value="verkauf">Fahrzeug verkaufen</SelectItem>
                            <SelectItem value="ankauf">Fahrzeug kaufen</SelectItem>
                            <SelectItem value="kostenvoranschlag">Kostenvoranschlag</SelectItem>
                            <SelectItem value="beschwerde">Beschwerde</SelectItem>
                            <SelectItem value="lob">Lob & Feedback</SelectItem>
                            <SelectItem value="sonstiges">Sonstiges</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="nachricht">Ihre Nachricht *</Label>
                        <Textarea
                          id="nachricht"
                          name="nachricht"
                          required
                          rows={6}
                          className="bg-gray-700 border-gray-600 text-white focus:border-[#FF0000]"
                          placeholder="Beschreiben Sie Ihr Anliegen..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#FF0000] text-white hover:bg-[#E60000] text-lg py-4 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-300 hover:scale-105"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Nachricht Senden
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Address & Hours */}
                <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-[#FF0000]" />
                      Standort & Öffnungszeiten
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#FF0000] mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Adresse</h4>
                          <p className="text-gray-300">
                            Auto RiKu AG
                            <br />
                            Neugasse 13
                            <br />
                            9444 Diepoldsau
                            <br />
                            Schweiz
                          </p>
                        </div>
                      </div>

                      <Separator className="bg-gray-700" />

                      <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2">
                          <Clock className="h-5 w-5 text-[#FF0000]" />
                          Öffnungszeiten
                        </h4>
                        <div className="space-y-2">
                          {openingHours.map((schedule, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-gray-300">{schedule.day}</span>
                              <span
                                className={`font-medium ${
                                  schedule.hours === "Geschlossen" ? "text-gray-500" : "text-white"
                                }`}
                              >
                                {schedule.hours}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator className="bg-gray-700" />

                      {/* Telefonnummern */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white flex items-center gap-2">
                          <Phone className="h-5 w-5 text-[#FF0000]" />
                          Telefonnummern
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Verkauf:</span>
                            <a 
                              href="tel:+41762626868" 
                              className="text-[#FF0000] font-semibold hover:text-[#E60000] transition-colors cursor-pointer"
                            >
                              076 262 68 68
                            </a>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Geschäft:</span>
                            <a 
                              href="tel:+41715206868" 
                              className="text-[#FF0000] font-semibold hover:text-[#E60000] transition-colors cursor-pointer"
                            >
                              071 520 68 68
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
