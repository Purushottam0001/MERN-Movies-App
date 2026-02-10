import HeroBanner from "../component/HeroBanner";
import MovieRow from "../component/MovieRow";

import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://mern-movies-app-iw4r.onrender.com";

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/movies/new-movies`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-black text-white min-h-screen">

      {/* Hero Banner */}
      {movies && <HeroBanner movies={movies} />}

      {/* Movie Rows */}
      <MovieRow title="New Movies" movies={movies} />
      <MovieRow title="Top Movies" movies={movies} />

    </div>
  );
}
