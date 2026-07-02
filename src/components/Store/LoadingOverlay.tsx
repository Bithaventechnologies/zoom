type LoadingOverlayProps = {
  message: string
}

const LoadingOverlay = ({ message }: LoadingOverlayProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <span
        aria-label="Loading"
        className="h-12 w-12 animate-spin rounded-full border-[3px] border-[#d8d8d8] border-t-[#0067b8]"
        role="status"
      />
      <p className="mt-6 text-lg font-semibold text-[#1a1a1a]" key={message}>
        {message}
      </p>
    </div>
  )
}

export default LoadingOverlay
