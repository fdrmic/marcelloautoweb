import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
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
            <span>Auto RiKu AG</span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Ihre vertrauensvolle Garage in Diepoldsau – Reparaturen, Service und Fahrzeughandel.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/auto.riku" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors duration-300 hover:scale-110 transform">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
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
              <span>Auto RiKu AG<br />Neugasse 13<br />CH – 9444 Diepoldsau</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#FF0000]" />
              <span>Verkauf: 076 262 68 68</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#FF0000]" />
              <span>Geschäft: 071 520 68 68</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#FF0000]" />
              <span>info@autoriku.ch</span>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="my-12 transition-all duration-300" style={{ backgroundColor: "rgba(75, 85, 99, 0.3)" }} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p>&copy; 2025 Auto RiKu AG – Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
} 