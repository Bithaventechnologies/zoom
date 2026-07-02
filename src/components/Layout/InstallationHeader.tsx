import ZoomLogo from './ZoomLogo'

const InstallationHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#1E1E1E]">
      <div className="mx-auto flex min-h-[90px] w-full max-w-[1100px] items-center gap-5 px-5 sm:px-8">
        <ZoomLogo />
        <span aria-hidden="true" className="h-9 w-px bg-white/[0.12]" />
        <p className="text-xl font-semibold text-white sm:text-2xl">
          Zoom Installation Guide
        </p>
      </div>
    </header>
  )
}

export default InstallationHeader
