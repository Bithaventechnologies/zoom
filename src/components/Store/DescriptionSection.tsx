const DescriptionSection = () => {
  return (
    <section
      aria-labelledby="description"
      className="mt-8 rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5"
    >
      <h2 id="description" className="text-2xl font-semibold">
        Description
      </h2>
      <p className="mt-4 max-w-4xl text-base leading-7 text-[#4f4f4f]">
        Zoom is a unified communications platform for video meetings, team chat,
        phone, whiteboard, and collaboration. This demo listing recreates the
        Microsoft Store experience without connecting to any external service.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {['Meet securely', 'Share instantly', 'Collaborate anywhere'].map(
          (feature) => (
            <div
              className="rounded-md border border-[#e6e6e6] bg-[#fafafa] p-4"
              key={feature}
            >
              <h3 className="font-semibold">{feature}</h3>
              <p className="mt-2 text-sm leading-6 text-[#666666]">
                Familiar meeting tools in a polished Microsoft Store style
                product surface.
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  )
}

export default DescriptionSection
