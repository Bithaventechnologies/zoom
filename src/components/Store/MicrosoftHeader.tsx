import MicrosoftLogo from './MicrosoftLogo'
import SearchBar from './SearchBar'
import StoreNavigation from './StoreNavigation'

const MicrosoftHeader = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-[#e5e5e5] bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a aria-label="Microsoft" href="#">
          <MicrosoftLogo />
        </a>
        <a
          className="border-l border-[#d6d6d6] pl-6 text-xl font-semibold text-[#1a1a1a]"
          href="#"
        >
          Store
        </a>
        <StoreNavigation />
        <div className="ml-auto hidden w-full max-w-sm md:block">
          <SearchBar />
        </div>
      </div>
      <div className="border-t border-[#eeeeee] px-4 py-3 md:hidden">
        <SearchBar />
      </div>
    </header>
  )
}

export default MicrosoftHeader
