import type React from "react"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export default function PrizesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      
    </div>
  )
}

