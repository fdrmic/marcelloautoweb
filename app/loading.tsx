import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 text-[#FF0000] animate-spin mx-auto" />
        <p className="text-white text-lg">Laden...</p>
      </div>
    </div>
  )
} 