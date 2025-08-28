# 🚀 Resend.com E-Mail-Integration Setup

## 📋 **Schritt-für-Schritt Anleitung für marcello-auto.ch**

### **Schritt 1: Resend.com Account einrichten**
1. Gehen Sie zu [resend.com](https://resend.com) und erstellen Sie einen Account
2. Verifizieren Sie Ihre E-Mail-Adresse
3. Gehen Sie zu "Domains" → "Add Domain"

### **Schritt 2: Domain marcello-auto.ch verifizieren**
Da Ihre Domain bei Kreativmedia gehostet wird, müssen Sie dort DNS-Einträge hinzufügen:

**Benötigte DNS-Einträge (werden von Resend bereitgestellt):**

#### **TXT Record für Domain-Verifizierung:**
```
Name: @ (oder leer lassen)
Value: resend-verification=abc123def456... (wird von Resend bereitgestellt)
TTL: 3600 (oder Standard)
```

#### **CNAME Record für E-Mail-Tracking:**
```
Name: email
Value: tracking.resend.com
TTL: 3600 (oder Standard)
```

### **Schritt 3: DNS-Einträge bei Kreativmedia hinzufügen**
1. Loggen Sie sich in Ihr Kreativmedia Control Panel ein
2. Gehen Sie zu "Domains" → "DNS-Verwaltung"
3. Fügen Sie die oben genannten Einträge hinzu
4. Warten Sie 5-15 Minuten, bis die Änderungen wirksam werden

### **Schritt 4: Domain in Resend verifizieren**
1. Gehen Sie zurück zu Resend.com → "Domains"
2. Klicken Sie auf "Verify" bei Ihrer Domain
3. Warten Sie auf die Bestätigung

### **Schritt 5: API Key generieren**
1. In Ihrem Resend Dashboard → "API Keys" → "Create API Key"
2. Wählen Sie "Full Access" (für den Anfang)
3. Kopieren Sie den API Key (beginnt mit `re_...`)

### **Schritt 6: Umgebungsvariablen konfigurieren**
1. Erstellen Sie eine `.env.local` Datei im Root-Verzeichnis Ihres Projekts
2. Fügen Sie folgende Zeile hinzu:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

**Wichtig:** Ersetzen Sie `re_your_actual_api_key_here` durch Ihren echten API Key!

### **Schritt 7: Projekt neu starten**
```bash
npm run dev
```

### **Schritt 8: Testen**
1. Füllen Sie das Kontaktformular aus
2. Füllen Sie das An- und Verkaufsformular aus
3. Überprüfen Sie, ob E-Mails an `marcello-autohandel@bluewin.ch` gesendet werden

## 🔧 **Troubleshooting**

### **Fehler: "Domain not verified"**
- Warten Sie länger auf die DNS-Propagierung (kann bis zu 24h dauern)
- Überprüfen Sie die DNS-Einträge mit [mxtoolbox.com](https://mxtoolbox.com)

### **Fehler: "Invalid API key"**
- Überprüfen Sie, ob der API Key korrekt in `.env.local` steht
- Stellen Sie sicher, dass die Datei im Root-Verzeichnis liegt

### **E-Mails werden nicht gesendet**
- Überprüfen Sie die Browser-Konsole auf Fehlermeldungen
- Überprüfen Sie die Resend.com Logs in Ihrem Dashboard

## 📧 **E-Mail-Templates**

Die folgenden E-Mail-Templates werden automatisch generiert:

1. **Kontaktformular:** Professionelle HTML-E-Mail mit allen Formulardaten
2. **Fahrzeugverkauf:** Detaillierte Übersicht des zu verkaufenden Fahrzeugs
3. **Fahrzeugankauf:** Anforderungen für den Fahrzeugankauf

Alle E-Mails werden an `marcello-autohandel@bluewin.ch` gesendet.

## 🚀 **Nächste Schritte**

Nach erfolgreicher Integration können Sie:
- E-Mail-Templates anpassen
- Automatische Antworten einrichten
- E-Mail-Tracking aktivieren
- Webhook-Integration für E-Mail-Status hinzufügen

## 📞 **Support**

Bei Problemen:
1. Überprüfen Sie die Resend.com Dokumentation
2. Kontaktieren Sie den Kreativmedia Support für DNS-Fragen
3. Überprüfen Sie die Projekt-Logs
