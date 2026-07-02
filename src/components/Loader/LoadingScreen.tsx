import TopBar from '../Layout/TopBar'
import Spinner from './Spinner'

type LoadingScreenProps = {
  message: string
}

const LoadingScreen = ({ message }: LoadingScreenProps) => {
  return (
    <main className="relative min-h-screen bg-[#111111] text-white">
      <TopBar />
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Spinner size="md" />
        <p
          className="mt-8 text-base font-normal text-white/95 opacity-100 transition-opacity duration-500"
          key={message}
        >
          {message}
        </p>
      </section>
    </main>
  )
}

export default LoadingScreen
