type ZoomAppIconProps = {
  size?: 'sm' | 'lg'
}

const sizeClasses: Record<NonNullable<ZoomAppIconProps['size']>, string> = {
  sm: 'h-10 w-10 rounded-lg',
  lg: 'h-44 w-44 rounded-[28px] sm:h-52 sm:w-52',
}

const cameraClasses: Record<NonNullable<ZoomAppIconProps['size']>, string> = {
  sm: 'h-4 w-5 rounded-[3px]',
  lg: 'h-16 w-20 rounded-xl',
}

const ZoomAppIcon = ({ size = 'lg' }: ZoomAppIconProps) => {
  return (
    <span
      aria-hidden="true"
      className={`${sizeClasses[size]} flex items-center justify-center bg-[#2D8CFF] shadow-[0_18px_45px_rgba(45,140,255,0.24)]`}
    >
      <span className={`${cameraClasses[size]} relative bg-white`}>
        <span className="absolute -right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 rounded-sm bg-white sm:-right-5 sm:h-7 sm:w-7" />
      </span>
    </span>
  )
}

export default ZoomAppIcon
