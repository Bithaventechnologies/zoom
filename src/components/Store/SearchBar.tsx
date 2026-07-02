import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <form className="relative w-full max-w-sm" role="search">
      <label className="sr-only" htmlFor="store-search">
        Search Microsoft Store
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#666666]"
      />
      <input
        className="h-9 w-full rounded-sm border border-[#8a8a8a] bg-white py-1.5 pl-10 pr-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#0067b8] focus:ring-1 focus:ring-[#0067b8]"
        id="store-search"
        placeholder="Search apps, games, movies, and more"
        type="search"
      />
    </form>
  )
}

export default SearchBar
