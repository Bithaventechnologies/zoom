const galleryItems = [
  {
    title: 'Connect with anyone from anywhere',
    caption: 'HD meetings, chat, and calls in one simple workspace.',
  },
  {
    title: 'Bring teams together',
    caption: 'Share screens, collaborate, and keep conversations moving.',
  },
  {
    title: 'Simple controls for every meeting',
    caption: 'Start, join, mute, and present with a clean meeting toolbar.',
  },
]

const ProductGallery = () => {
  return (
    <section aria-labelledby="screenshots" className="mt-8">
      <h2 id="screenshots" className="mb-4 text-2xl font-semibold">
        Screenshots
      </h2>
      <div className="grid gap-5 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <article
            className="min-h-56 overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
            key={item.title}
          >
            <div className="flex h-36 items-center justify-center bg-linear-to-br from-[#e8f3ff] via-white to-[#dff7ef] p-5">
              <div className="h-24 w-full rounded-md border border-[#cfd8e3] bg-white shadow-sm">
                <div className="flex h-8 items-center gap-2 border-b border-[#e5e7eb] px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e74856]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffb900]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#13a10e]" />
                </div>
                <div className="grid h-16 grid-cols-3 gap-2 p-3">
                  <span className="rounded bg-[#2D8CFF]" />
                  <span className="rounded bg-[#dde7f3]" />
                  <span className="rounded bg-[#c8f0df]" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase text-[#0067b8]">
                Image {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#606060]">
                {item.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductGallery
