const Star = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-4 h-4 ${filled ? "text-yellow-500" : "text-gray-300"}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

export const StarRating = ({ value, outOf = 5 }: { value: number; outOf?: number }) => (
  <div className="flex items-center gap-1" aria-label={`Rating: ${value} out of ${outOf}`}>
    {Array.from({ length: outOf }).map((_, i) => (
      <Star key={i} filled={i < value} />
    ))}
  </div>
);