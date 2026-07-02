import { useCallback, useState } from 'react'

export const useDownloadModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    close,
    isOpen,
    open,
  }
}
