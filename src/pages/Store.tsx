import DescriptionSection from '../components/Store/DescriptionSection'
import DownloadModal from '../components/Store/DownloadModal'
import MicrosoftHeader from '../components/Store/MicrosoftHeader'
import ProductGallery from '../components/Store/ProductGallery'
import ProductHeader from '../components/Store/ProductHeader'
import ProductSummary from '../components/Store/ProductSummary'
import ReviewsSection from '../components/Store/ReviewsSection'
import { useDownloadModal } from '../components/Store/useDownloadModal'

const Store = () => {
  const downloadModal = useDownloadModal()

  return (
    <main className="min-h-screen bg-[#f5f5f5] font-['Segoe_UI'] text-[#1a1a1a]">
      <MicrosoftHeader />
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <ProductHeader />
        <ProductSummary onInstall={downloadModal.open} />
        <ProductGallery />
        <DescriptionSection />
        <ReviewsSection />
      </div>
      <DownloadModal
        isOpen={downloadModal.isOpen}
        onClose={downloadModal.close}
      />
    </main>
  )
}

export default Store
