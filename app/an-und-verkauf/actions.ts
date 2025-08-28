"use server"

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitVerkaufForm(formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const brand = formData.get('brand') as string
    const model = formData.get('model') as string
    const year = formData.get('year') as string
    const mileage = formData.get('mileage') as string
    const fuelType = formData.get('fuelType') as string
    const priceExpectation = formData.get('priceExpectation') as string
    const condition = formData.get('condition') as string
    const description = formData.get('description') as string

    // E-Mail an marcello-autohandel@bluewin.ch senden
    const { data, error } = await resend.emails.send({
      from: 'Marcello Auto GmbH <noreply@marcello-auto.ch>',
      to: ['marcello-autohandel@bluewin.ch'],
      subject: `Fahrzeugverkauf: ${brand} ${model} (${year})`,
      html: generateVerkaufEmailHTML({
        firstName,
        lastName,
        email,
        phone,
        brand,
        model,
        year,
        mileage,
        fuelType,
        priceExpectation,
        condition,
        description
      })
    })

    if (error) {
      console.error('Fehler beim Senden der E-Mail:', error)
      throw new Error('E-Mail konnte nicht gesendet werden')
    }

    console.log('E-Mail erfolgreich gesendet:', data)
    return { success: true, message: 'Ihre Anfrage wurde erfolgreich gesendet!' }

  } catch (error) {
    console.error('Fehler beim Verarbeiten des Formulars:', error)
    throw new Error('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
  }
}

export async function submitAnkaufForm(formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const brand = formData.get('brand') as string
    const model = formData.get('model') as string
    const year = formData.get('year') as string
    const mileage = formData.get('mileage') as string
    const fuelType = formData.get('fuelType') as string
    const priceExpectation = formData.get('priceExpectation') as string
    const condition = formData.get('condition') as string
    const description = formData.get('description') as string

    // E-Mail an marcello-autohandel@bluewin.ch senden
    const { data, error } = await resend.emails.send({
      from: 'Marcello Auto GmbH <noreply@marcello-auto.ch>',
      to: ['marcello-autohandel@bluewin.ch'],
      subject: `Fahrzeugankauf: ${brand} ${model} (${year})`,
      html: generateAnkaufEmailHTML({
        firstName,
        lastName,
        email,
        phone,
        brand,
        model,
        year,
        mileage,
        fuelType,
        priceExpectation,
        condition,
        description
      })
    })

    if (error) {
      console.error('Fehler beim Senden der E-Mail:', error)
      throw new Error('E-Mail konnte nicht gesendet werden')
    }

    console.log('E-Mail erfolgreich gesendet:', data)
    return { success: true, message: 'Ihre Anfrage wurde erfolgreich gesendet!' }

  } catch (error) {
    console.error('Fehler beim Verarbeiten des Formulars:', error)
    throw new Error('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
  }
}

function generateVerkaufEmailHTML(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  brand: string
  model: string
  year: string
  mileage: string
  fuelType: string
  priceExpectation: string
  condition: string
  description: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Fahrzeugverkauf Anfrage</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #FF0000; border-bottom: 2px solid #FF0000; padding-bottom: 10px;">
          🚗 Neue Fahrzeugverkauf Anfrage
        </h2>
        
        <h3>Persönliche Daten:</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        
        <h3>Fahrzeugdaten:</h3>
        <p><strong>Marke:</strong> ${data.brand}</p>
        <p><strong>Modell:</strong> ${data.model}</p>
        <p><strong>Baujahr:</strong> ${data.year}</p>
        <p><strong>Kilometerstand:</strong> ${data.mileage} km</p>
        <p><strong>Kraftstoffart:</strong> ${data.fuelType}</p>
        <p><strong>Preisvorstellung:</strong> ${data.priceExpectation ? data.priceExpectation + ' CHF' : 'Nicht angegeben'}</p>
        <p><strong>Zustand:</strong> ${data.condition || 'Nicht angegeben'}</p>
        
        <h3>Beschreibung:</h3>
        <p>${data.description || 'Keine Beschreibung angegeben'}</p>
        
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">
          Diese E-Mail wurde über das Kontaktformular auf marcello-auto.ch gesendet.
        </p>
      </div>
    </body>
    </html>
  `
}

function generateAnkaufEmailHTML(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  brand: string
  model: string
  year: string
  mileage: string
  fuelType: string
  priceExpectation: string
  condition: string
  description: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Fahrzeugankauf Anfrage</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #FF0000; border-bottom: 2px solid #FF0000; padding-bottom: 10px;">
          🛒 Neue Fahrzeugankauf Anfrage
        </h2>
        
        <h3>Persönliche Daten:</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        
        <h3>Gewünschtes Fahrzeug:</h3>
        <p><strong>Marke:</strong> ${data.brand}</p>
        <p><strong>Modell:</strong> ${data.model}</p>
        <p><strong>Baujahr:</strong> ${data.year}</p>
        <p><strong>Maximaler Kilometerstand:</strong> ${data.mileage} km</p>
        <p><strong>Kraftstoffart:</strong> ${data.fuelType}</p>
        <p><strong>Budget:</strong> ${data.priceExpectation ? data.priceExpectation + ' CHF' : 'Nicht angegeben'}</p>
        <p><strong>Minimaler Zustand:</strong> ${data.condition || 'Nicht angegeben'}</p>
        
        <h3>Weitere Anforderungen:</h3>
        <p>${data.description || 'Keine weiteren Anforderungen angegeben'}</p>
        
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">
          Diese E-Mail wurde über das Kontaktformular auf marcello-auto.ch gesendet.
        </p>
      </div>
    </body>
    </html>
  `
}
