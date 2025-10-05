"use client"

import Image from "next/image"
import { useState } from "react"

const avatars = [
  "/perritopiola.png",
  "/pn.png",
  "/chino-enojado.png",
  "/minita-rayo.png",
  "/simple-dog-character.png",
  "/angry-blonde-character.png",
  "/grey-hair-glasses-character.png",
  "/blonde-red-visor-character.png",
]

export function Showcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedAvatar, setSelectedAvatar] = useState<string>(avatars[3])

  return (
    <section className="relative min-h-screen lg:min-h-[1080px] px-4 sm:px-6 py-8 sm:py-12">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/section2-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto h-full pt-16 sm:pt-24 md:pt-32 mt-4 sm:mt-6 md:mt-8">
        {/* Character scene canvas */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] mb-8 sm:mb-12 md:mb-16">
          <div className="absolute left-1/2 -translate-x-1/2 top-[38%] -translate-y-1/2 w-[50%] sm:w-[45%] md:w-[38%] z-20">
            <Image
              src={selectedAvatar || "/placeholder.svg"}
              alt="Selected character"
              width={350}
              height={400}
              className="w-full h-auto transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                filter: "drop-shadow(0 12px 40px rgba(59,130,246,0.4)) drop-shadow(0 0 40px rgba(168,85,247,0.3)) drop-shadow(0 0 60px rgba(34,197,94,0.2))",
                animation: "float 8s ease-in-out infinite, glow 4s ease-in-out infinite alternate",
              }}
            />
          </div>

          <div className="absolute left-[28%] top-[90%] -translate-y-1/2 w-[26%] md:w-[26%] z-30">
            <Image src="/cloud.png" alt="Cloud left" width={400} height={160} className="w-full h-auto" />
          </div>

          <div className="absolute right-[28%] top-[90%] -translate-y-1/2 w-[26%] md:w-[26%] z-30">
            <Image src="/cloud.png" alt="Cloud right" width={400} height={160} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-7 mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-4 scrollbar-hide pt-8 sm:pt-12 md:pt-16">
          {avatars.map((avatar, index) => (
            <button
              key={index}
              className="flex-shrink-0 transition-transform duration-200 cursor-pointer"
              style={{
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedAvatar(avatar)}
            >
              <Image
                src={avatar || "/placeholder.svg"}
                alt={`Avatar ${index + 1}`}
                width={80}
                height={80}
                className={`rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.13)] transition-all w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 ${
                  selectedAvatar === avatar ? "ring-2 sm:ring-3 md:ring-4 ring-[#e6dcff]" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#e6dcff]/80 backdrop-blur-md border border-white/40 text-[#2a2340] font-extrabold text-xs sm:text-sm hover:bg-[#e6dcff]/90 transition-colors">
            TOKEN
          </button>

          <a
            href="https://x.com/Paluverse"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/70 backdrop-blur-md border border-white/40 flex items-center justify-center hover:bg-white/80 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black" aria-label="X">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#e6dcff]/80 backdrop-blur-md border border-white/40 text-[#2a2340] font-extrabold text-xs sm:text-sm hover:bg-[#e6dcff]/90 transition-colors">
            COLLECTION
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <p className="text-[#64748b] text-xs sm:text-sm font-medium">
            © 2025 PaluVerse. All rights reserved.
          </p>
          <p className="text-[#94a3b8] text-xs mt-2">
            Easy to Play, Hard to Stop. Endless Fun!
          </p>
        </div>
      </div>
    </section>
  )
}
