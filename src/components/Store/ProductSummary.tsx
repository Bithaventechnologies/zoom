import InstallButton from './InstallButton'
import ZoomAppIcon from './ZoomAppIcon'

type ProductSummaryProps = {
  onInstall: () => void
}

const ProductSummary = ({ onInstall }: ProductSummaryProps) => {
  return (
    <section className="grid gap-8 rounded-lg bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)] ring-1 ring-black/5 md:grid-cols-[260px_1fr] md:p-10">
      <div className="flex items-center justify-center md:justify-start">
        <ZoomAppIcon />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="mb-3 text-sm font-semibold text-[#0067b8]">Zoom</p>
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl">
          Zoom - One Platform to Connect
        </h2>
        <p className="mt-4 text-base text-[#5f5f5f]">
          Published by Zoom Video Communications, Inc.
        </p>
        <div className="mt-8">
          <InstallButton onClick={onInstall} />
        </div>
        <dl className="mt-9 grid w-full max-w-xl grid-cols-3 gap-4 border-t border-[#e6e6e6] pt-6 text-center md:text-left">
          <div>
            <dt className="text-xs uppercase text-[#6b6b6b]">Rating</dt>
            <dd className="mt-1 text-lg font-semibold">4.5</dd>
          </div>
          <div>
            <dt className="text-xs uppercase text-[#6b6b6b]">Category</dt>
            <dd className="mt-1 text-lg font-semibold">Productivity</dd>
          </div>
          <div>
            <dt className="text-xs uppercase text-[#6b6b6b]">Age</dt>
            <dd className="mt-1 text-lg font-semibold">3+</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default ProductSummary
