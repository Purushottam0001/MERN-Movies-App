import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imageUrl =
    movie?.image?.startsWith("http")
      ? movie.image
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="relative group w-[200px] flex-shrink-0">
      <Link to={`/movies/${movie._id}`}>
        <img
          src={imageUrl}
          alt={movie.name}
          className="w-full h-[300px] object-cover rounded-lg transition duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x450?text=No+Image";
          }}
        />
      </Link>

      <p className="mt-2 text-sm text-gray-300 truncate">
        {movie.name}
      </p>
    </div>
  );
};

export default MovieCard;
