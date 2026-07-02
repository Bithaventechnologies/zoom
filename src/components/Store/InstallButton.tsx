type InstallButtonProps = {
  onClick: () => void
}

const InstallButton = ({ onClick }: InstallButtonProps) => {
  return (
    <button
      className="h-12 min-w-44 rounded bg-[#0067b8] px-8 text-base font-semibold text-white shadow-sm transition duration-200 hover:scale-[1.02] hover:bg-[#005a9e] focus:outline-none focus:ring-2 focus:ring-[#0067b8] focus:ring-offset-2"
      onClick={onClick}
      type="button"
    >
      Install
    </button>
  )
}

export default InstallButton
