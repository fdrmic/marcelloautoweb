"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "general"
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ungültige E-Mail-Adresse"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "", service: "general" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="text-center space-y-4 p-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h3 className="text-2xl font-bold text-white">Nachricht gesendet!</h3>
        <p className="text-gray-400">
          Vielen Dank für Ihre Nachricht. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
        </p>
        <Button
          onClick={() => setSubmitStatus("idle")}
          className="bg-[#FF0000] hover:bg-[#E60000]"
        >
          Neue Nachricht
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`bg-gray-800 border-gray-700 text-white ${errors.name ? "border-red-500" : ""}`}
            placeholder="Ihr vollständiger Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">E-Mail *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`bg-gray-800 border-gray-700 text-white ${errors.email ? "border-red-500" : ""}`}
            placeholder="ihre.email@beispiel.de"
          />
          {errors.email && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">Telefon (optional)</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="bg-gray-800 border-gray-700 text-white"
          placeholder="+49 (0) 30 123 456 78"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-white">Service</Label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => handleInputChange("service", e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
        >
          <option value="general">Allgemeine Anfrage</option>
          <option value="repair">Reparatur & Wartung</option>
          <option value="bodywork">Karosserie & Lackierung</option>
          <option value="trade">An- & Verkauf</option>
          <option value="appointment">Terminbuchung</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">Nachricht *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className={`bg-gray-800 border-gray-700 text-white min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.message}
          </p>
        )}
      </div>

      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#FF0000] hover:bg-[#E60000] disabled:opacity-50"
      >
        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
      </Button>
    </form>
  )
} 