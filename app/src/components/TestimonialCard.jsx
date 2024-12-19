export default function TestimonialCard({ name, location, rating, review, starIcon }) {
  return (
    <div className="flex flex-col items-center w-full h-full md:flex-row md:justify-center gap-6">
      <div className="flex flex-col w-full h-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start gap-4 mb-6">
          <img
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-zinc-800">
              {name}
            </h3>
            <p className="text-sm text-zinc-500">
              {location}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-full">
            <img
              src={starIcon}
              alt="Star icon"
              className="w-4 h-4"
              loading="lazy"
            />
            <span className="text-sm font-medium text-orange-500">
              {rating}
            </span>
          </div>
        </div>
        <blockquote className="text-zinc-600 text-sm leading-relaxed italic">
          "{review}"
        </blockquote>
      </div>
    </div>
  );
}