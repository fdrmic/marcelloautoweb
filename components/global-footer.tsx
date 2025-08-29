"use client"

import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Wrench,
  FileText,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function GlobalFooter() {
  const [agbOpen, setAgbOpen] = useState(false)
  const [impressumOpen, setImpressumOpen] = useState(false)
  const [datenschutzOpen, setDatenschutzOpen] = useState(false)

  return (
    <>
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
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 Marcello Auto GmbH – Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={() => setAgbOpen(true)}
                className="hover:text-[#FF0000] transition-colors duration-300"
              >
                AGBs
              </button>
              <button
                onClick={() => setImpressumOpen(true)}
                className="hover:text-[#FF0000] transition-colors duration-300"
              >
                Impressum
              </button>
              <button
                onClick={() => setDatenschutzOpen(true)}
                className="hover:text-[#FF0000] transition-colors duration-300"
              >
                Datenschutzerklärung
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
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

      {/* AGBs Modal */}
      <Dialog open={agbOpen} onOpenChange={setAgbOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Allgemeine Geschäftsbedingungen</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Allgemeine Geschäftsbedingungen (AGB) der Marcello Auto GmbH</h3>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Geltungsbereich</h4>
                <p className="text-gray-700 mb-2">1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) regeln das Vertragsverhältnis zwischen der Marcello Auto GmbH, Franzosenstrasse 26, 6423 Seewen, Schweiz (nachfolgend „Unternehmen" oder „wir"), und ihren Kunden (nachfolgend „Kunde" oder „Sie").</p>
                <p className="text-gray-700 mb-2">1.2 Die AGB gelten für alle Verkäufe, Dienstleistungen und Reparaturen, die durch das Unternehmen erbracht werden.</p>
                <p className="text-gray-700">1.3 Abweichende oder ergänzende Bedingungen des Kunden sind nur gültig, wenn sie schriftlich von der Marcello Auto GmbH bestätigt wurden.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Leistungen und Vertragsabschluss</h4>
                <p className="text-gray-700 mb-2">2.1 Unsere Angebote sind unverbindlich und freibleibend.</p>
                <p className="text-gray-700 mb-2">2.2 Ein Vertrag kommt erst mit der schriftlichen Bestätigung durch das Unternehmen oder durch die Erbringung der Leistung zustande.</p>
                <p className="text-gray-700">2.3 Angaben zu Fahrzeugen, Ersatzteilen oder Dienstleistungen (z. B. in Katalogen, Websites oder Werbematerialien) sind nur Richtwerte und keine verbindlichen Zusicherungen von Eigenschaften.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Preise und Zahlungsbedingungen</h4>
                <p className="text-gray-700 mb-2">3.1 Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive gesetzlicher Mehrwertsteuer, sofern nicht anders angegeben.</p>
                <p className="text-gray-700 mb-2">3.2 Zahlungen sind je nach Vereinbarung per Barzahlung, Banküberweisung oder Kreditkarte möglich.</p>
                <p className="text-gray-700 mb-2">3.3 Rechnungen sind innerhalb der auf der Rechnung angegebenen Frist zu begleichen.</p>
                <p className="text-gray-700">3.4 Bei verspäteter Zahlung behalten wir uns das Recht vor, Mahngebühren und Verzugszinsen von 5 % pro Jahr zu erheben.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">4. Lieferung und Abholung</h4>
                <p className="text-gray-700 mb-2">4.1 Liefertermine und Abholzeiten werden nach Absprache festgelegt.</p>
                <p className="text-gray-700 mb-2">4.2 Verzögerungen, die durch höhere Gewalt oder unvorhersehbare Umstände entstehen, verlängern die Lieferfrist angemessen.</p>
                <p className="text-gray-700">4.3 Der Kunde ist verpflichtet, das Fahrzeug oder die Ware innerhalb der vereinbarten Frist abzuholen. Erfolgt die Abholung nicht rechtzeitig, können Lagerkosten berechnet werden.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">5. Gewährleistung und Haftung</h4>
                <p className="text-gray-700 mb-2">5.1 Das Unternehmen garantiert, dass verkaufte Fahrzeuge und Ersatzteile frei von wesentlichen Mängeln sind.</p>
                <p className="text-gray-700 mb-2">5.2 Die gesetzliche Gewährleistungsfrist beträgt zwei Jahre für Neuwaren und ein Jahr für Gebrauchtwaren.</p>
                <p className="text-gray-700 mb-2">5.3 Mängel sind innerhalb von 5 Werktagen nach Übergabe schriftlich anzuzeigen.</p>
                <p className="text-gray-700 mb-2">5.4 Die Haftung für Folgeschäden, entgangenen Gewinn oder andere indirekte Schäden ist – soweit gesetzlich zulässig – ausgeschlossen. Die Haftung für Vorsatz und grobe Fahrlässigkeit bleibt unberührt.</p>
                <p className="text-gray-700">5.5 Bei unsachgemässer Nutzung, falscher Wartung oder nicht autorisierten Reparaturen erlischt jegliche Garantie.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">6. Rückgabe- und Widerrufsrecht</h4>
                <p className="text-gray-700 mb-2">6.1 Ein gesetzliches Widerrufsrecht besteht nach Schweizer Recht nicht.</p>
                <p className="text-gray-700 mb-2">6.2 Ein Rücktritt vom Vertrag ist nur in Ausnahmefällen und mit unserer schriftlichen Zustimmung möglich.</p>
                <p className="text-gray-700 mb-2">6.3 Fahrzeuge und Spezialanfertigungen sind von der Rückgabe ausgeschlossen.</p>
                <p className="text-gray-700">6.4 Sollte eine Rückgabe akzeptiert werden, kann eine Bearbeitungsgebühr von bis zu 20 % des Kaufpreises erhoben werden.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">7. Datenschutz</h4>
                <p className="text-gray-700 mb-2">7.1 Das Unternehmen verarbeitet personenbezogene Daten gemäss dem Bundesgesetz über den Datenschutz (DSG) und den geltenden Datenschutzbestimmungen der Schweiz.</p>
                <p className="text-gray-700 mb-2">7.2 Die Daten werden ausschliesslich zur Vertragsabwicklung und zur Kundenbetreuung verwendet.</p>
                <p className="text-gray-700">7.3 Ohne ausdrückliche Zustimmung des Kunden werden keine personenbezogenen Daten an Dritte weitergegeben, sofern keine gesetzliche Verpflichtung dazu besteht.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">8. Schlussbestimmungen</h4>
                <p className="text-gray-700 mb-2">8.1 Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.</p>
                <p className="text-gray-700 mb-2">8.2 Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.</p>
                <p className="text-gray-700">8.3 Es gilt ausschliesslich Schweizer Recht. Für Verträge mit Konsumenten gilt der gesetzliche Gerichtsstand am Wohnsitz des Kunden. Für Verträge mit Geschäftskunden wird Seewen (Schwyz) als Gerichtsstand vereinbart.</p>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>Stand: Februar 2025</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Impressum Modal */}
      <Dialog open={impressumOpen} onOpenChange={setImpressumOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Impressum</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Marcello Auto GmbH</h3>
                <p className="text-gray-700">Franzosenstrasse 26</p>
                <p className="text-gray-700">6423 Seewen</p>
                <p className="text-gray-700">Schweiz</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vertreten durch:</h4>
                <p className="text-gray-700">Marko Milardovic (Geschäftsführer)</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Kontakt:</h4>
                <p className="text-gray-700">Telefon: 078 628 24 50 / 076 340 73 38</p>
                <p className="text-gray-700">E-Mail: marcello-autohandel@bluewin.ch</p>
                <p className="text-gray-700">Webseite: marcello-auto.ch</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Handelsregistereintrag:</h4>
                <p className="text-gray-700">Eingetragen im Handelsregister des Kantons Schwyz</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Umsatzsteuer-Identifikationsnummer:</h4>
                <p className="text-gray-700">CHE-468.732.199</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Urheberrecht:</h4>
                <p className="text-gray-700">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Externe Links:</h4>
                <p className="text-gray-700">
                  Diese Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Daher übernehmen wir für diese fremden Inhalte auch keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Datenschutzerklärung Modal */}
      <Dialog open={datenschutzOpen} onOpenChange={setDatenschutzOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Datenschutzerklärung</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Allgemeine Hinweise</h4>
                <p className="text-gray-700">
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und gemäss den gesetzlichen Datenschutzbestimmungen der Schweiz, insbesondere dem Bundesgesetz über den Datenschutz (DSG).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Verantwortliche Stelle</h4>
                <p className="text-gray-700 mb-2">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="ml-4 space-y-1">
                  <p className="text-gray-700 font-medium">Marcello Auto GmbH</p>
                  <p className="text-gray-700">Franzosenstrasse 26</p>
                  <p className="text-gray-700">6423 Seewen</p>
                  <p className="text-gray-700">Schweiz</p>
                  <p className="text-gray-700">E-Mail: marcello-autohandel@bluewin.ch</p>
                  <p className="text-gray-700">Telefon: 078 628 24 50 / 076 340 73 38</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Erhebung und Speicherung personenbezogener Daten</h4>
                <p className="text-gray-700 mb-2">
                  Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website sowie für die Erbringung unserer Dienstleistungen erforderlich ist.
                </p>
                <p className="text-gray-700 mb-2">Zu den erhobenen Daten können insbesondere gehören:</p>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>• Name, Vorname</li>
                  <li>• Adresse</li>
                  <li>• E-Mail-Adresse</li>
                  <li>• Telefonnummer</li>
                  <li>• IP-Adresse</li>
                  <li>• Browsertyp und Betriebssystem</li>
                  <li>• besuchte Seiten und Zugriffszeitpunkte auf unserer Website</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">4. Zweck der Datenverarbeitung</h4>
                <p className="text-gray-700 mb-2">Ihre Daten werden zu folgenden Zwecken verarbeitet:</p>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>• Betrieb, Bereitstellung und Sicherheit unserer Website</li>
                  <li>• Bearbeitung von Anfragen, Terminbuchungen oder Bestellungen</li>
                  <li>• Vertragsabwicklung und Kundenbetreuung</li>
                  <li>• Erfüllung gesetzlicher Pflichten</li>
                  <li>• Optimierung unserer Angebote und Dienstleistungen</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">5. Weitergabe von Daten an Dritte</h4>
                <p className="text-gray-700 mb-2">Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn:</p>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>• Sie ausdrücklich eingewilligt haben,</li>
                  <li>• dies für die Vertragsabwicklung erforderlich ist (z. B. an Zahlungs- oder Versanddienstleister),</li>
                  <li>• eine gesetzliche Verpflichtung besteht, oder</li>
                  <li>• dies zur Wahrung berechtigter Interessen des Unternehmens erforderlich ist und Ihre schutzwürdigen Interessen nicht überwiegen.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">6. Speicherung und Löschung von Daten</h4>
                <p className="text-gray-700">
                  Wir speichern personenbezogene Daten nur so lange, wie dies für die Erfüllung der genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach Ablauf dieser Fristen werden die Daten gelöscht oder anonymisiert.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">7. Cookies</h4>
                <p className="text-gray-700">
                  Unsere Website verwendet Cookies, um Funktionen bereitzustellen und die Nutzung zu verbessern. Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers einschränken oder deaktivieren. Bitte beachten Sie, dass dadurch die Funktionalität der Website eingeschränkt sein kann.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">8. Änderungen der Datenschutzerklärung</h4>
                <p className="text-gray-700">
                  Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, damit sie stets den aktuellen gesetzlichen Anforderungen entspricht oder Änderungen unserer Dienstleistungen berücksichtigt. Die jeweils aktuelle Version ist jederzeit auf unserer Website abrufbar.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">9. Kontakt</h4>
                <p className="text-gray-700">
                  Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten oder zu dieser Datenschutzerklärung können Sie uns jederzeit unter den oben angegebenen Kontaktdaten erreichen.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 