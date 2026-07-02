import InstallationFooter from '../components/Layout/InstallationFooter'
import InstallationHeader from '../components/Layout/InstallationHeader'
import InstructionCard from '../components/Layout/InstructionCard'

const InstallationGuide = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <InstallationHeader />
      <main className="mx-auto w-full max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <section aria-label="Zoom installation steps" className="space-y-8">
          <InstructionCard title="Step 1: Locate the Downloaded File">
            <p>
              Open your{' '}
              <a
                className="font-medium text-[#2D8CFF] underline decoration-[#2D8CFF] underline-offset-4 transition hover:text-white"
                href="#"
              >
                Downloads
              </a>{' '}
              folder and find the installer file.
            </p>
            <p>
              If you can't find the file, you can{' '}
              <a
                className="font-medium text-[#2D8CFF] transition hover:text-white"
                download
                href="/zoom-demo-installer.txt"
              >
                download again
              </a>
              .
            </p>
          </InstructionCard>

          <InstructionCard title="Step 2: Double-click to Start Installation">
            <p>Double-click the file to launch the installer.</p>
            <p>
              If prompted with a security warning, click <strong>Yes</strong> or{' '}
              <strong>Run</strong>.
            </p>
          </InstructionCard>

          <InstructionCard title="Step 3: Follow the Setup Wizard">
            <p>Follow the instructions in the Zoom Setup Wizard.</p>
            <p>
              Accept the terms and click <strong>Next</strong> to complete
              installation.
            </p>
          </InstructionCard>

          <InstructionCard title="Step 4: Launch Zoom">
            <p>After the installation finishes, Zoom will launch automatically.</p>
            <p>You can also find it in your Start menu or Desktop.</p>
          </InstructionCard>
        </section>
      </main>
      <InstallationFooter />
    </div>
  )
}

export default InstallationGuide
