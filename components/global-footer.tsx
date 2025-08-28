import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Wrench,
} from "lucide-react"
import Link from "next/link"

export default function GlobalFooter() {
  return (
    <footer
      className="py-16 border-t text-gray-400 relative transition-all duration-300"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        borderColor: "rgba(75, 85, 99, 0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-white">
            <Wrench className="h-8 w-8 text-[#FF0000]" />
            <span>Marcello Auto GmbH</span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Ihre vertrauensvolle Garage in Seewen – Reparaturen, Service und Fahrzeughandel.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white">Schnellzugriff</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/an-und-verkauf" className="hover:text-[#FF0000] transition-colors duration-300">
                An- und Verkauf
              </Link>
            </li>
            <li>
              <Link href="/dienstleistungen" className="hover:text-[#FF0000] transition-colors duration-300">
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link href="/ueber-uns" className="hover:text-[#FF0000] transition-colors duration-300">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-[#FF0000] transition-colors duration-300">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white">Kontakt</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#FF0000]" />
              <span>Marcello Auto GmbH<br />Franzosenstrasse 26<br />CH – 6423 Seewen</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#FF0000]" />
              <span>Verkauf: 076 340 73 38</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#FF0000]" />
              <span>Geschäft: 078 628 24 50</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#FF0000]" />
              <span>marcello-autohandel@bluewin.ch</span>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="my-12 transition-all duration-300" style={{ backgroundColor: "rgba(75, 85, 99, 0.3)" }} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p>&copy; 2025 Marcello Auto GmbH – Alle Rechte vorbehalten.</p>
        <p className="mt-2 text-sm text-gray-500">
          Erstellt von{" "}
          <Link 
            href="https://simpix.ch" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] transition-colors duration-300"
          >
            Simpix
          </Link>
        </p>
      </div>
    </footer>
  )
} 