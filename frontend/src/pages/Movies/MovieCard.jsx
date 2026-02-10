import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group m-6 w-[200px] flex-shrink-0">
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.poster}
          alt={movie.name}
          className="w-full h-[300px] object-cover rounded-lg
                     transition duration-300 ease-in-out
                     group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x450?text=Movie";
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 h-24
                        bg-gradient-to-t from-black via-black/60 to-transparent
                        opacity-0 group-hover:opacity-100
                        transition duration-300 rounded-b-lg" />

        <p className="absolute bottom-4 left-3 right-3
                      text-white text-sm font-semibold
                      opacity-0 group-hover:opacity-100
                      transition duration-300">
          {movie.name}
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
