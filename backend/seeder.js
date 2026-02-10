import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Movie from "./models/Movie.js";

dotenv.config();
connectDB();

/* ===============================
   BASE MOVIES (HOLLYWOOD)
================================= */

const hollywoodMovies = [
  {
    name: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwozPUI.jpg",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    cast: ["Leonardo DiCaprio"],
    plot: "A thief enters dreams to steal secrets.",
    rating: 8.8,
  },
  {
    name: "Interstellar",
    poster:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
    cast: ["Matthew McConaughey"],
    plot: "Explorers travel through a wormhole.",
    rating: 8.6,
  },
  {
    name: "The Dark Knight",
    poster:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    year: 2008,
    genres: ["Action", "Crime"],
    cast: ["Christian Bale"],
    plot: "Batman faces Joker.",
    rating: 9.0,
  },
  {
    name: "Oppenheimer",
    poster:
      "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    year: 2023,
    genres: ["Drama"],
    cast: ["Cillian Murphy"],
    plot: "The story of atomic bomb creation.",
    rating: 8.7,
  },
  {
    name: "Avengers: Endgame",
    poster:
      "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    year: 2019,
    genres: ["Action", "Adventure"],
    cast: ["Robert Downey Jr."],
    plot: "Avengers assemble for the final battle.",
    rating: 8.4,
  },
];

/* ===============================
   BOLLYWOOD MOVIES
================================= */

const bollywoodMovies = [
  {
    name: "Dhurandhar",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Dhurandhar_film_poster.jpg",
    year: 2025,
    genres: ["Action", "Drama"],
    cast: ["Ranveer Singh"],
    plot: "A high intensity action drama.",
    rating: 7.8,
  },
  {
    name: "Jawan",
    poster:
      "https://image.tmdb.org/t/p/original/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
    year: 2023,
    genres: ["Action", "Thriller"],
    cast: ["Shah Rukh Khan"],
    plot: "A man fights corruption.",
    rating: 7.6,
  },
  {
    name: "Animal",
    poster:
      "https://image.tmdb.org/t/p/original/3N5vR3rC16kY7EYBLETymFcpnS.jpg",
    year: 2023,
    genres: ["Crime", "Drama"],
    cast: ["Ranbir Kapoor"],
    plot: "A violent emotional journey.",
    rating: 7.5,
  },
  {
    name: "Pathaan",
    poster:
      "https://image.tmdb.org/t/p/original/9Z9A1rGkRkNvztNFVQVw1Gc7jqx.jpg",
    year: 2023,
    genres: ["Action"],
    cast: ["Shah Rukh Khan"],
    plot: "Spy action thriller.",
    rating: 7.2,
  },
];

/* ===============================
   EXPAND TO 100 MOVIES
================================= */

const expandMovies = () => {
  const base = [...hollywoodMovies, ...bollywoodMovies];
  let expanded = [];

  for (let i = 0; i < 12; i++) {
    base.forEach((movie) => {
      expanded.push({
        ...movie,
        numReviews: Math.floor(Math.random() * 500),
        isFeatured: Math.random() > 0.7,
        isTrending: Math.random() > 0.5,
        isTopRated: movie.rating > 8,
        createdAt: new Date(),
      });
    });
  }

  return expanded;
};

/* ===============================
   IMPORT DATA
================================= */

const importData = async () => {
  try {
    await Movie.deleteMany();

    const movies = expandMovies();
    await Movie.insertMany(movies);

    console.log("✅ 100+ Movies Inserted Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
