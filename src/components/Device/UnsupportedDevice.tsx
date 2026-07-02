const UnsupportedDevice = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111111] px-6 text-center text-white">
      <section aria-labelledby="session-error" className="max-w-xl">
        <h1 id="session-error" className="text-4xl font-semibold sm:text-5xl">
          Session Error
        </h1>
        <p className="mt-8 text-xl leading-8 text-[#A0A0A0] sm:text-2xl">
          Oh Sorry,
          <br />
          This session is only available for Windows Devices.
        </p>
      </section>
    </main>
  )
}

export default UnsupportedDevice
