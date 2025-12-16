"use client"

import { Header } from "@/components/header"
import { Wrench, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-14 flex flex-col items-center justify-center min-h-[calc(100vh-56px)]">
        <div className="flex flex-col items-center text-center px-4 sm:px-6 max-w-md">
          <div className="relative mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-emerald-100 flex items-center justify-center animate-pulse">
              <Wrench className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            </div>
          </div>
          <div className="flex gap-1 mb-4 sm:mb-6">
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></span>
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Tehniskie darbi</h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Atvainojiet, šobrīd ir radušās īslaicīgas tehniskas problēmas. Mēs jau strādājam pie to novēršanas. Lūdzu,
            mēģiniet vēlāk.
          </p>
        </div>
      </main>
    </div>
  )
}
