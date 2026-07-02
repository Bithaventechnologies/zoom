import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type InstallState = 'idle' | 'downloading' | 'downloaded'

const buttonText: Record<InstallState, string> = {
  idle: 'Install',
  downloading: 'Starting download...',
  downloaded: 'Download started...',
}

const triggerInstallerDownload = () => {
  const downloadLink = document.createElement('a')

  downloadLink.href = '/src/assets/zoominstaller.exe'
  downloadLink.download = 'zoominstaller.exe'
  downloadLink.style.display = 'none'

  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

const LoadingSpinner = () => {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
    />
  )
}

const InstallButton = () => {
  const navigate = useNavigate()
  const timers = useRef<number[]>([])
  const [installState, setInstallState] = useState<InstallState>('idle')

  const isLoading = installState !== 'idle'

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => {
        window.clearTimeout(timer)
      })
    }
  }, [])

  const handleInstallClick = () => {
    if (isLoading) {
      return
    }

    setInstallState('downloading')
    triggerInstallerDownload()

    timers.current = [
      window.setTimeout(() => {
        setInstallState('downloaded')
      }, 250),
      window.setTimeout(() => {
        navigate('/install-guide')
      }, 3500),
    ]
  }

  return (
    <button
      className="inline-flex h-12 min-w-44 items-center justify-center gap-3 rounded bg-[#0067b8] px-8 text-base font-semibold text-white shadow-sm transition duration-200 hover:scale-[1.02] hover:bg-[#005a9e] focus:outline-none focus:ring-2 focus:ring-[#0067b8] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:scale-100 disabled:hover:bg-[#0067b8]"
      disabled={isLoading}
      onClick={handleInstallClick}
      type="button"
    >
      {isLoading ? <LoadingSpinner /> : null}
      {buttonText[installState]}
    </button>
  )
}

export default InstallButton
