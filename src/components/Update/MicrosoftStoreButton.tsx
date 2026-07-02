import { Link } from 'react-router-dom'

const MicrosoftLogo = () => {
  return (
    <span aria-hidden="true" className="grid h-6 w-6 grid-cols-2 gap-0.5">
      <span className="bg-[#f25022]" />
      <span className="bg-[#7fba00]" />
      <span className="bg-[#00a4ef]" />
      <span className="bg-[#ffb900]" />
    </span>
  )
}

const MicrosoftStoreButton = () => {
  return (
    <Link
      className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full border-2 border-[#2D8CFF] px-8 text-base font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-[#2D8CFF]/10 focus:outline-none focus:ring-2 focus:ring-[#2D8CFF] focus:ring-offset-2 focus:ring-offset-[#111111] sm:min-w-80"
      to="/store"
    >
      <MicrosoftLogo />
      <span>Go to Microsoft Store</span>
    </Link>
  )
}

export default MicrosoftStoreButton
