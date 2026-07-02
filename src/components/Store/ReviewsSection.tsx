import ReviewCard from './ReviewCard'

const reviews = [
  {
    author: 'Avery M.',
    body: 'The layout is clean and familiar. Joining meetings feels direct and predictable.',
    rating: 5,
    title: 'Reliable meeting app',
  },
  {
    author: 'Jordan P.',
    body: 'Simple controls, quick access, and the product page makes installation clear.',
    rating: 4,
    title: 'Easy to use',
  },
  {
    author: 'Morgan K.',
    body: 'A polished communication tool with the features teams expect every day.',
    rating: 5,
    title: 'Great for work',
  },
]

const ReviewsSection = () => {
  return (
    <section aria-labelledby="reviews" className="mt-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 id="reviews" className="text-2xl font-semibold">
            Ratings and reviews
          </h2>
          <p className="mt-2 text-sm text-[#606060]">
            Demo reviews for this frontend-only store page.
          </p>
        </div>
        <p className="hidden text-3xl font-semibold sm:block">4.5</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.author} {...review} />
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection
