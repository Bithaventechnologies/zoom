import ZoomAppIcon from './ZoomAppIcon'

const ProductHeader = () => {
  return (
    <section className="mb-6 flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
      <ZoomAppIcon size="sm" />
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666]">
          Apps
        </p>
        <h1 className="text-lg font-semibold text-[#1a1a1a]">
          Zoom for Meetings
        </h1>
      </div>
    </section>
  )
}

export default ProductHeader
