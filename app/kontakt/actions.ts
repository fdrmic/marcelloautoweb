"use server"

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitKontaktForm(formData: FormData) {
  try {
    const vorname = formData.get('vorname') as string
    const nachname = formData.get('nachname') as string
    const email = formData.get('email') as string
    const telefon = formData.get('telefon') as string
    const betreff = formData.get('betreff') as string
    const nachricht = formData.get('nachricht') as string

    // E-Mail an marcello-autohandel@bluewin.ch senden
    const { data, error } = await resend.emails.send({
      from: 'Marcello Auto GmbH <noreply@marcello-auto.ch>',
      to: ['marcello-autohandel@bluewin.ch'],
      subject: `Kontaktanfrage: ${betreff}`,
      html: generateKontaktEmailHTML({
        vorname,
        nachname,
        email,
        telefon,
        betreff,
        nachricht
      })
    })

    if (error) {
      console.error('Fehler beim Senden der E-Mail:', error)
      throw new Error('E-Mail konnte nicht gesendet werden')
    }

    console.log('E-Mail erfolgreich gesendet:', data)
    return { success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet!' }

  } catch (error) {
    console.error('Fehler beim Verarbeiten des Formulars:', error)
    throw new Error('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
  }
}

function generateKontaktEmailHTML(data: {
  vorname: string
  nachname: string
  email: string
  telefon: string
  betreff: string
  nachricht: string
}) {
  const betreffLabels: { [key: string]: string } = {
    'termin': 'Terminanfrage',
    'reparatur': 'Reparaturanfrage',
    'verkauf': 'Fahrzeug verkaufen',
    'ankauf': 'Fahrzeug kaufen',
    'kostenvoranschlag': 'Kostenvoranschlag',
    'beschwerde': 'Beschwerde',
    'lob': 'Lob & Feedback',
    'sonstiges': 'Sonstiges'
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Kontaktanfrage</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #FF0000; border-bottom: 2px solid #FF0000; padding-bottom: 10px;">
          📧 Neue Kontaktanfrage
        </h2>
        
        <h3>Persönliche Daten:</h3>
        <p><strong>Name:</strong> ${data.vorname} ${data.nachname}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.telefon || 'Nicht angegeben'}</p>
        
        <h3>Anfrage:</h3>
        <p><strong>Betreff:</strong> ${betreffLabels[data.betreff] || data.betreff}</p>
        
        <h3>Nachricht:</h3>
        <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FF0000; margin: 20px 0;">
          ${data.nachricht}
        </p>
        
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">
          Diese E-Mail wurde über das Kontaktformular auf marcello-auto.ch gesendet.
        </p>
      </div>
    </body>
    </html>
  `
}
