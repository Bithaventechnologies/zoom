type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses: Record<NonNullable<SpinnerProps['size']>, string> = {
  sm: 'h-7 w-7 border-2',
  md: 'h-12 w-12 border-[3px]',
  lg: 'h-16 w-16 border-4',
}

const Spinner = ({ size = 'md' }: SpinnerProps) => {
  return (
    <span
      aria-label="Loading"
      className={`${sizeClasses[size]} inline-block animate-spin rounded-full border-white/25 border-t-[#2D8CFF]`}
      role="status"
    />
  )
}

export default Spinner
