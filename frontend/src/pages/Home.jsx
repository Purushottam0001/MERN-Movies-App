import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import HeroBanner from "../component/HeroBanner";
import MovieRow from "../component/MovieRow";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/v1/movies/new-movies`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />

      <div className="ml-64 w-full">
        <Navbar />

        <div className="p-6">
          {movies.length > 0 && (
            <HeroBanner movie={movies[0]} />
          )}

          <MovieRow title="New Movies" movies={movies} />
          <MovieRow title="Top Movies" movies={movies} />
        </div>
      </div>
    </div>
  );
}
