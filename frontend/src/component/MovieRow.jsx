import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

export default function MovieRow({ title, movies }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="flex gap-5 overflow-x-auto pb-2">

        {/* Loading Skeleton */}
        {(!movies || movies.length === 0) &&
          Array(6)
            .fill(0)
            .map((_, i) => <SkeletonCard key={i} />)}

        {/* Movie Cards */}
        {movies &&
          movies.map((movie) => (
            <Link
              key={movie._id}
              to={`/movies/${movie._id}`}
              className="min-w-[180px] movie-card relative rounded-xl overflow-hidden"
            >
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-[260px] object-cover"
              />

              <div className="absolute bottom-0 w-full p-3 movie-overlay">
                <h3 className="text-sm font-semibold">
                  {movie.name}
                </h3>
                <p className="text-xs text-gray-300">
                  ⭐ {movie.rating}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
