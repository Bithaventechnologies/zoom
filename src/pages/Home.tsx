import { useEffect, useState } from 'react'
import UnsupportedDevice from '../components/Device/UnsupportedDevice'
import LoadingScreen from '../components/Loader/LoadingScreen'
import UpdateScreen from '../components/Update/UpdateScreen'
import { useDevice } from '../hooks/useDevice'

type Screen = 'loading' | 'joining' | 'update'

const Home = () => {
  const { isSupported } = useDevice()
  const [screen, setScreen] = useState<Screen>('loading')

  useEffect(() => {
    if (!isSupported) {
      return undefined
    }

    const joiningTimer = window.setTimeout(() => {
      setScreen('joining')
    }, 2000)

    const updateTimer = window.setTimeout(() => {
      setScreen('update')
    }, 4000)

    return () => {
      window.clearTimeout(joiningTimer)
      window.clearTimeout(updateTimer)
    }
  }, [isSupported])

  if (!isSupported) {
    return <UnsupportedDevice />
  }

  if (screen === 'update') {
    return <UpdateScreen />
  }

  return (
    <LoadingScreen
      message={screen === 'loading' ? 'Please wait...' : 'Joining your meeting.'}
    />
  )
}

export default Home
