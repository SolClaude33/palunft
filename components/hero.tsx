import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[1250px] px-4 sm:px-6 py-8 sm:py-12 md:py-20 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 pt-2 md:pt-4 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/15 to-transparent" />
      </div>

      {/* Transition Clouds */}
      <div className="absolute top-16 md:top-20 left-0 w-full h-32 pointer-events-none z-10">
        {/* Cloud 1 - top left */}
        <div className="absolute left-[10%] top-0 w-[25%] opacity-60">
          <Image src="/cloud.png" alt="Transition cloud" width={300} height={120} className="w-full h-auto" />
        </div>
        
        {/* Cloud 2 - top center */}
        <div className="absolute left-[40%] top-4 w-[30%] opacity-50">
          <Image src="/cloud.png" alt="Transition cloud" width={350} height={140} className="w-full h-auto" />
        </div>
        
        {/* Cloud 3 - top right */}
        <div className="absolute right-[15%] top-2 w-[28%] opacity-55">
          <Image src="/cloud.png" alt="Transition cloud" width={320} height={130} className="w-full h-auto" />
        </div>
        
        {/* Cloud 4 - bottom left */}
        <div className="absolute left-[5%] top-16 w-[22%] opacity-45">
          <Image src="/cloud.png" alt="Transition cloud" width={280} height={110} className="w-full h-auto" />
        </div>
        
        {/* Cloud 5 - bottom center */}
        <div className="absolute left-[50%] -translate-x-1/2 top-12 w-[26%] opacity-40">
          <Image src="/cloud.png" alt="Transition cloud" width={300} height={120} className="w-full h-auto" />
        </div>
        
        {/* Cloud 6 - bottom right */}
        <div className="absolute right-[8%] top-18 w-[24%] opacity-50">
          <Image src="/cloud.png" alt="Transition cloud" width={290} height={115} className="w-full h-auto" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-end pb-0">
        {/* Left: Logo */}
        <div className="flex flex-col items-start md:items-start max-md:items-center gap-2 sm:gap-4 z-10 -mt-12 sm:-mt-20 md:-mt-32 lg:-mt-48 xl:-mt-64 -ml-4 sm:-ml-8 md:-ml-16 lg:-ml-24 xl:-ml-32">
          <Image
            src="/palu-nft-logo.png"
            alt="PALU NFT wordmark"
            aria-label="PALU NFT"
            width={640}
            height={400}
            loading="lazy"
            className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[624px] h-auto object-contain hover:scale-105 transition-all duration-500 ease-in-out"
            style={{
              filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18)) drop-shadow(0 0 20px rgba(255,255,255,0.1)) drop-shadow(0 0 40px rgba(59,130,246,0.2))",
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* Right: Character scene */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          {/* Grey-haired man - left */}
          <div className="absolute left-[8%] sm:left-[6%] md:left-[5%] -translate-x-1/2 -bottom-[25%] w-[40%] sm:w-[50%] md:w-[55%] lg:w-[63%] z-20">
            <Image
              src="/cz-character.png"
              alt="Grey-haired man with glasses"
              width={200}
              height={300}
              className="w-full h-auto hover:scale-110 transition-all duration-500 ease-in-out"
              style={{
                filter: "drop-shadow(0 8px 32px rgba(147,51,234,0.4)) drop-shadow(0 0 30px rgba(236,72,153,0.3))",
                animation: "float 8s ease-in-out infinite",
              }}
            />
          </div>

          {/* Blond boy - right */}
          <div className="absolute left-[100%] sm:left-[110%] md:left-[120%] -translate-x-1/2 -bottom-[35%] w-[50%] sm:w-[60%] md:w-[65%] lg:w-[67.5%] z-15">
            <Image 
              src="/goldieee31.png" 
              alt="Blond boy" 
              width={220} 
              height={300} 
              className="w-full h-auto hover:scale-110 transition-all duration-500 ease-in-out"
              style={{
                filter: "drop-shadow(0 8px 32px rgba(251,191,36,0.5)) drop-shadow(0 0 30px rgba(59,130,246,0.4))",
                animation: "float 7s ease-in-out infinite",
              }}
            />
          </div>

          {/* Dog mascot - center */}
          <div className="absolute left-[60%] sm:left-[62%] md:left-[62.5%] -translate-x-1/2 -bottom-[25%] w-[60%] sm:w-[70%] md:w-[80%] lg:w-[87%] z-25">
            <Image 
              src="/dog-mascot.png" 
              alt="Dog mascot" 
              width={300} 
              height={350} 
              className="w-full h-auto hover:scale-110 transition-all duration-500 ease-in-out"
              style={{
                filter: "drop-shadow(0 10px 40px rgba(34,197,94,0.4)) drop-shadow(0 0 35px rgba(168,85,247,0.3))",
                animation: "float 6s ease-in-out infinite",
              }}
            />
          </div>

          {/* Cloud 1 - bottom left */}
          <div className="absolute left-[-100%] sm:left-[-110%] md:left-[-120%] -bottom-[80%] sm:-bottom-[85%] w-[120%] sm:w-[130%] md:w-[135%] z-30">
            <Image src="/cloud.png" alt="Cloud" width={500} height={200} className="w-full h-auto" />
          </div>

          {/* Cloud 2 - bottom left further */}
          <div className="absolute left-[-150%] sm:left-[-165%] md:left-[-175%] -bottom-[90%] sm:-bottom-[95%] w-[120%] sm:w-[130%] md:w-[135%] z-30">
            <Image src="/cloud.png" alt="Cloud" width={500} height={200} className="w-full h-auto" />
          </div>

          {/* Cloud 3 - bottom right */}
          <div className="absolute right-[0%] -bottom-[70%] w-[135%] md:w-[135%] z-30">
            <Image src="/cloud.png" alt="Cloud" width={500} height={200} className="w-full h-auto" />
          </div>

          {/* Cloud 4 - bottom right further */}
          <div className="absolute -right-[55%] -bottom-[80%] w-[135%] md:w-[135%] z-30">
            <Image src="/cloud.png" alt="Cloud" width={500} height={200} className="w-full h-auto" />
          </div>

          {/* Cloud 5 - bottom right duplicated and lower */}
          <div className="absolute right-[30%] -bottom-[85%] w-[101.25%] md:w-[101.25%] z-30">
            <Image src="/cloud.png" alt="Cloud" width={500} height={200} className="w-full h-auto" />
          </div>

          {/* Cloud 6 - bottom right further duplicated and lower */}
          <div className="absolute -right-[60%] -bottom-[95%] w-[101.25%] md:w-[101.25%] z-30">
            <Image src="/cloud.png" alt="Cloud" width={500} height={200} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
