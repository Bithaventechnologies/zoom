import ZoomLogo from './ZoomLogo'

const TopBar = () => {
  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
      <ZoomLogo />
      <nav aria-label="Helpful links" className="flex items-center gap-8">
        <a
          className="text-sm font-medium text-white/90 transition hover:text-[#2D8CFF]"
          href="#"
        >
          Support
        </a>
        <a
          className="text-sm font-medium text-white/90 transition hover:text-[#2D8CFF]"
          href="#"
        >
          English
        </a>
      </nav>
    </header>
  )
}

export default TopBar
