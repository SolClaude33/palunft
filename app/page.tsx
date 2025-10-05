import { Hero } from "@/components/hero"
import { Showcase } from "@/components/showcase"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#7ecbff] to-white -z-10" />

      <Header />
      <Hero />

      {/* Separator */}
      <div className="h-px bg-black/5" />

      <Showcase />
    </div>
  )
}
