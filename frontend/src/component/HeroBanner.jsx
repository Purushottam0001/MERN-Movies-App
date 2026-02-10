const HeroBanner = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="relative w-full h-[500px] mb-8">
      <img
        src={movie.poster}
        alt={movie.name}
        className="w-full h-full object-cover rounded-lg"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/1200x500?text=Movie";
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent rounded-lg" />

      <div className="absolute bottom-10 left-10 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">{movie.name}</h1>
        <p className="text-gray-300 line-clamp-3">{movie.plot}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
