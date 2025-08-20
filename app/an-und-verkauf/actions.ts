"use server"

export async function submitVerkaufForm(formData: FormData) {
  // Simuliere Verarbeitung
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = {
    type: "verkauf",
    vorname: formData.get("vorname"),
    nachname: formData.get("nachname"),
    email: formData.get("email"),
    telefon: formData.get("telefon"),
    marke: formData.get("marke"),
    modell: formData.get("modell"),
    baujahr: formData.get("baujahr"),
    kilometerstand: formData.get("kilometerstand"),
    kraftstoff: formData.get("kraftstoff"),
    getriebe: formData.get("getriebe"),
    wunschpreis: formData.get("wunschpreis"),
    beschreibung: formData.get("beschreibung"),
  }

  console.log("Verkauf Form Data:", data)

  return {
    success: true,
    message: `Vielen Dank ${data.vorname}! Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.`,
  }
}

export async function submitAnkaufForm(formData: FormData) {
  // Simuliere Verarbeitung
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = {
    type: "ankauf",
    vorname: formData.get("vorname"),
    nachname: formData.get("nachname"),
    email: formData.get("email"),
    telefon: formData.get("telefon"),
    marke: formData.get("marke"),
    modell: formData.get("modell"),
    baujahrVon: formData.get("baujahrVon"),
    baujahrBis: formData.get("baujahrBis"),
    preisVon: formData.get("preisVon"),
    preisBis: formData.get("preisBis"),
    kraftstoff: formData.get("kraftstoff"),
    getriebe: formData.get("getriebe"),
    wuensche: formData.get("wuensche"),
  }

  console.log("Ankauf Form Data:", data)

  return {
    success: true,
    message: `Vielen Dank ${data.vorname}! Wir suchen jetzt nach passenden Fahrzeugen und melden uns bald bei Ihnen.`,
  }
}
