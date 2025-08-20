"use server"

export async function submitKontaktForm(formData: FormData) {
  // Simuliere Verarbeitung
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = {
    // Kontaktdaten
    vorname: formData.get("vorname"),
    nachname: formData.get("nachname"),
    email: formData.get("email"),
    telefon: formData.get("telefon"),

    // Nachricht
    betreff: formData.get("betreff"),
    nachricht: formData.get("nachricht"),
    dringlichkeit: formData.get("dringlichkeit"),
  }

  console.log("Kontakt Form Data:", data)

  return {
    success: true,
    message: `Vielen Dank ${data.vorname}! Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.`,
  }
}
