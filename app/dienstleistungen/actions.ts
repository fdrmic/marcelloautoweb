"use server"

export async function submitTerminForm(formData: FormData) {
  // Simuliere Verarbeitung
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = {
    // Kontaktdaten
    vorname: formData.get("vorname"),
    nachname: formData.get("nachname"),
    email: formData.get("email"),
    telefon: formData.get("telefon"),

    // Fahrzeugdaten
    marke: formData.get("marke"),
    modell: formData.get("modell"),
    baujahr: formData.get("baujahr"),
    kennzeichen: formData.get("kennzeichen"),

    // Service & Termin
    service: formData.get("service"),
    dringlichkeit: formData.get("dringlichkeit"),
    wunschtermin: formData.get("wunschtermin"),
    uhrzeit: formData.get("uhrzeit"),
    beschreibung: formData.get("beschreibung"),
  }

  console.log("Termin Form Data:", data)

  return {
    success: true,
    message: `Vielen Dank ${data.vorname}! Ihr Terminwunsch wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen zur Terminbestätigung.`,
  }
}
