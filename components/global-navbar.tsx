"use client"

import { Button } from "@/components/ui/button"
import {
  Car,
  MapPin,
  Phone,
  Mail,
  Wrench,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function GlobalNavbar() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  // Funktion zur Bestimmung der aktiven Route
  const isActiveRoute = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      {/* Header */}
      <header
        className="px-4 lg:px-6 h-16 flex items-center justify-between border-b fixed top-0 w-full z-50 transition-all duration-300"
        style={getNavbarStyle()}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-[#FF0000] transition-colors">
          <span className="text-2xl font-bold">Marcello Auto GmbH</span>
        </Link>
        
        {/* Desktop Navigation - Zentriert */}
        <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          <Link 
            href="/an-und-verkauf" 
            className={`text-sm font-medium transition-colors ${
              isActiveRoute("/an-und-verkauf") 
                ? "text-[#FF0000]" 
                : "text-white hover:text-[#FF0000]"
            }`}
          >
            An- und Verkauf
          </Link>
          <Link 
            href="/dienstleistungen" 
            className={`text-sm font-medium transition-colors ${
              isActiveRoute("/dienstleistungen") 
                ? "text-[#FF0000]" 
                : "text-white hover:text-[#FF0000]"
            }`}
          >
            Dienstleistungen
          </Link>
          <Link 
            href="/ueber-uns" 
            className={`text-sm font-medium transition-colors ${
              isActiveRoute("/ueber-uns") 
                ? "text-[#FF0000]" 
                : "text-white hover:text-[#FF0000]"
            }`}
          >
            Über uns
          </Link>
          <Link 
            href="/kontakt" 
            className={`text-sm font-medium transition-colors ${
              isActiveRoute("/kontakt") 
                ? "text-[#FF0000]" 
                : "text-white hover:text-[#FF0000]"
            }`}
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <nav className="flex flex-col p-4 space-y-4 max-w-7xl mx-auto">
              <Link 
                href="/an-und-verkauf" 
                className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg hover:bg-white/5 ${
                  isActiveRoute("/an-und-verkauf") 
                    ? "text-[#FF0000] bg-white/5" 
                    : "text-white hover:text-[#FF0000]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                An- und Verkauf
              </Link>
              <Link 
                href="/dienstleistungen" 
                className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg hover:bg-white/5 ${
                  isActiveRoute("/dienstleistungen") 
                    ? "text-[#FF0000] bg-white/5" 
                    : "text-white hover:text-[#FF0000]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dienstleistungen
              </Link>
              <Link 
                href="/ueber-uns" 
                className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg hover:bg-white/5 ${
                  isActiveRoute("/ueber-uns") 
                    ? "text-[#FF0000] bg-white/5" 
                    : "text-white hover:text-[#FF0000]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link 
                href="/kontakt" 
                className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg hover:bg-white/5 ${
                  isActiveRoute("/kontakt") 
                    ? "text-[#FF0000] bg-white/5" 
                    : "text-white hover:text-[#FF0000]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
} 