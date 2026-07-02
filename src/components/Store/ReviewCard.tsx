type ReviewCardProps = {
  author: string
  body: string
  rating: number
  title: string
}

const ReviewCard = ({ author, body, rating, title }: ReviewCardProps) => {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)]">
      <div aria-label={`${rating} out of 5 stars`} className="text-[#0067b8]">
        {'★'.repeat(rating)}
        <span className="text-[#d8d8d8]">{'★'.repeat(5 - rating)}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#606060]">{body}</p>
      <p className="mt-5 text-sm font-semibold text-[#4a4a4a]">{author}</p>
    </article>
  )
}

export default ReviewCard
