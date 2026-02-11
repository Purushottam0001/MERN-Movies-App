import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Movie from "./models/Movie.js";

dotenv.config();
connectDB();

/* ===========================
   VERIFIED WORKING MOVIES
=========================== */

const baseMovies = [
  {
    name: "Inception",
    poster:
      "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    year: 2010,
    genres: ["Action", "Sci-Fi"],
    cast: ["Leonardo DiCaprio"],
    plot: "A thief enters dreams to steal secrets.",
    rating: 8.8,
  },
  {
    name: "Interstellar",
    poster:
      "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
    cast: ["Matthew McConaughey"],
    plot: "Explorers travel through a wormhole in space.",
    rating: 8.6,
  },
  {
    name: "The Dark Knight",
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    year: 2008,
    genres: ["Action", "Crime"],
    cast: ["Christian Bale"],
    plot: "Batman faces Joker in Gotham.",
    rating: 9.0,
  },
  {
    name: "Oppenheimer",
    poster:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    year: 2023,
    genres: ["Drama"],
    cast: ["Cillian Murphy"],
    plot: "Story of atomic bomb creator.",
    rating: 8.7,
  },
  {
    name: "Avengers Endgame",
    poster:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    year: 2019,
    genres: ["Action", "Adventure"],
    cast: ["Robert Downey Jr."],
    plot: "Final battle of Avengers.",
    rating: 8.4,
  },
  {
    name: "Jawan",
    poster:
      "https://image.tmdb.org/t/p/w500/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
    year: 2023,
    genres: ["Action", "Thriller"],
    cast: ["Shah Rukh Khan"],
    plot: "A man fights corruption.",
    rating: 7.6,
  },
  {
    name: "Animal",
    poster:
      "https://image.tmdb.org/t/p/w500/3N5vR3rC16kY7EYBLETymFcpnS.jpg",
    year: 2023,
    genres: ["Crime", "Drama"],
    cast: ["Ranbir Kapoor"],
    plot: "A violent emotional journey.",
    rating: 7.5,
  },
];

/* ===========================
   EXPAND TO 100 MOVIES
=========================== */

const generateMovies = () => {
  let movies = [];

  for (let i = 0; i < 15; i++) {
    baseMovies.forEach((movie) => {
      movies.push({
        ...movie,
        numReviews: Math.floor(Math.random() * 500),
        isFeatured: Math.random() > 0.7,
        isTrending: Math.random() > 0.5,
        isTopRated: movie.rating > 8,
        createdAt: new Date(),
      });
    });
  }

  return movies;
};

/* ===========================
   IMPORT DATA
=========================== */

const importData = async () => {
  try {
    await Movie.deleteMany();

    const movies = generateMovies();
    await Movie.insertMany(movies);

    console.log("✅ Movies seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
