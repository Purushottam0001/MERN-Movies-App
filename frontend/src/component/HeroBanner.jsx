import { useEffect, useState } from "react";

export default function HeroBanner({ movies }) {
  const [index, setIndex] = useState(0);

  // Auto change movie every 5 seconds
  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  const movie = movies[index];
  if (!movie) return null;

  return (
    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10 transition-all duration-700">

      {/* Background */}
      <img
        src={movie.image}
        alt={movie.name}
        className="absolute w-full h-full object-cover scale-110 blur-[2px]"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-10 max-w-xl">
        <h1 className="text-4xl font-bold mb-3">
          {movie.name}
        </h1>

        <p className="text-gray-300 text-sm mb-5 line-clamp-3">
          {movie.plot}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>

          <button className="bg-gray-700/70 px-6 py-2 rounded-lg hover:bg-gray-600 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
