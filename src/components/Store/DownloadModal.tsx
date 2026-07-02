import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingOverlay from './LoadingOverlay'

type DownloadModalProps = {
  isOpen: boolean
  onClose: () => void
}

const loadingMessages = [
  'Preparing download...',
  'Verifying package...',
  'Starting download...',
]

const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)

  const handleDownloadClick = () => {
    window.setTimeout(() => {
      navigate('/install-guide')
    }, 150)
  }

  useEffect(() => {
    if (!isOpen) {
      setStep(0)
      return undefined
    }

    if (step >= loadingMessages.length) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setStep((currentStep) => currentStep + 1)
    }, 2000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isOpen, step])

  if (!isOpen) {
    return null
  }

  const isReady = step >= loadingMessages.length

  return (
    <div
      aria-labelledby="download-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm"
      role="dialog"
    >
      <div className="w-full max-w-md rounded-xl bg-white p-6 text-[#1a1a1a] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#0067b8]">
              Microsoft Store
            </p>
            <h2
              className="mt-1 text-2xl font-semibold"
              id="download-modal-title"
            >
              {isReady ? 'Download Ready' : 'Installing Zoom'}
            </h2>
          </div>
          <button
            aria-label="Close"
            className="rounded px-2 py-1 text-xl leading-none text-[#666666] transition hover:bg-[#f1f1f1] hover:text-[#1a1a1a]"
            onClick={onClose}
            type="button"
          >
            x
          </button>
        </div>
        {isReady ? (
          <div className="py-8 text-center">
            <p className="text-base text-[#555555]">
              Your demo installer is ready. Download starts only after you click
              the button below.
            </p>
            <a
              className="mt-7 inline-flex h-12 min-w-56 items-center justify-center rounded bg-[#0067b8] px-6 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#005a9e] focus:outline-none focus:ring-2 focus:ring-[#0067b8] focus:ring-offset-2"
              download
              href="/zoom-demo-installer.txt"
              onClick={handleDownloadClick}
            >
              Download Installer
            </a>
          </div>
        ) : (
          <LoadingOverlay message={loadingMessages[step]} />
        )}
      </div>
    </div>
  )
}

export default DownloadModal
