import DescriptionSection from '../components/Store/DescriptionSection'
import MicrosoftHeader from '../components/Store/MicrosoftHeader'
import ProductGallery from '../components/Store/ProductGallery'
import ProductHeader from '../components/Store/ProductHeader'
import ProductSummary from '../components/Store/ProductSummary'
import ReviewsSection from '../components/Store/ReviewsSection'

const Store = () => {
  return (
    <main className="min-h-screen bg-[#f5f5f5] font-['Segoe_UI'] text-[#1a1a1a]">
      <MicrosoftHeader />
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <ProductHeader />
        <ProductSummary />
        <ProductGallery />
        <DescriptionSection />
        <ReviewsSection />
      </div>
    </main>
  )
}

export default Store
