export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 py-4 sm:py-6 h-16 sm:h-18 md:h-21">
      <nav className="flex items-center gap-6 sm:gap-8 md:gap-12">
        <a
          href="https://x.com/PaluNFTS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-extrabold text-sm sm:text-base tracking-wide [text-shadow:0_3px_12px_rgba(0,0,0,0.35)] hover:scale-110 hover:text-blue-300 hover:[text-shadow:0_4px_16px_rgba(59,130,246,0.6)] transition-all duration-300 ease-in-out cursor-pointer"
        >
          TWITTER
        </a>
        <a
          href="https://www.launchmynft.io/collections/0x82B821d15A82960Bd4cC475fE5e383e22dBBbA1B/mf0YPE7kxj2TvDnIWH6p"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-extrabold text-sm sm:text-base tracking-wide [text-shadow:0_3px_12px_rgba(0,0,0,0.35)] hover:scale-110 hover:text-purple-300 hover:[text-shadow:0_4px_16px_rgba(147,51,234,0.6)] transition-all duration-300 ease-in-out cursor-pointer"
        >
          COLLECTION
        </a>
        <a
          href="https://paluverse.gitbook.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-extrabold text-sm sm:text-base tracking-wide [text-shadow:0_3px_12px_rgba(0,0,0,0.35)] hover:scale-110 hover:text-green-300 hover:[text-shadow:0_4px_16px_rgba(34,197,94,0.6)] transition-all duration-300 ease-in-out cursor-pointer"
        >
          DOCS
        </a>
      </nav>
    </header>
  )
}
