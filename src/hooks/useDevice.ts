import { useEffect, useState } from 'react'

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    platform?: string
    mobile?: boolean
  }
}

export type DeviceInfo = {
  isMobile: boolean
  isWindows: boolean
  isSupported: boolean
}

const getDeviceInfo = (): DeviceInfo => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isWindows: false,
      isSupported: false,
    }
  }

  const navigatorData = window.navigator as NavigatorWithUserAgentData
  const userAgent = navigatorData.userAgent.toLowerCase()
  const platform = (
    navigatorData.userAgentData?.platform ||
    navigatorData.platform ||
    ''
  ).toLowerCase()
  const maxTouchPoints = navigatorData.maxTouchPoints || 0

  const isAndroid = /android/.test(userAgent)
  const isIPhone = /iphone/.test(userAgent)
  const isIPad =
    /ipad/.test(userAgent) ||
    (platform === 'macintel' && maxTouchPoints > 1)
  const isMobileBrowser =
    navigatorData.userAgentData?.mobile === true ||
    /mobile|phone|tablet|iemobile|blackberry|opera mini/.test(userAgent) ||
    window.matchMedia('(max-width: 767px)').matches

  const isMobile = isAndroid || isIPhone || isIPad || isMobileBrowser
  const isWindows = platform.includes('win') || userAgent.includes('windows')

  return {
    isMobile,
    isWindows,
    isSupported: isWindows && !isMobile,
  }
}

export const useDevice = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => getDeviceInfo())

  useEffect(() => {
    const handleResize = () => {
      setDeviceInfo(getDeviceInfo())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return deviceInfo
}
