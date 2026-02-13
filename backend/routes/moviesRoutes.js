import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();


// ========================================
// ✅ GET ALL MOVIES
// ========================================
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ========================================
// ✅ NEW MOVIES (Homepage)
// ========================================
router.get("/new-movies", async (req, res) => {
  try {
    const movies = await Movie.find({ isNewRelease: true }).limit(10);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ========================================
// ✅ TRENDING MOVIES (Netflix Row)
// ========================================
router.get("/trending", async (req, res) => {
  try {
    const movies = await Movie.find({ isTrending: true }).limit(10);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ========================================
// ✅ TOP RATED MOVIES
// ========================================
router.get("/top-rated", async (req, res) => {
  try {
    const movies = await Movie.find({ isTopRated: true }).limit(10);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ========================================
// ✅ RANDOM MOVIES (For "Choose For You")
// ========================================
router.get("/random-movies", async (req, res) => {
  try {
    const movies = await Movie.aggregate([{ $sample: { size: 10 } }]);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ========================================
// ✅ GET MOVIE BY ID
// ========================================
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ========================================
// ✅ CREATE MOVIE (ADMIN)
// ========================================
router.post("/", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// ========================================
// ✅ UPDATE MOVIE
// ========================================
router.put("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    Object.assign(movie, req.body);
    const updatedMovie = await movie.save();

    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ========================================
// ✅ DELETE MOVIE
// ========================================
router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    await movie.deleteOne();
    res.json({ message: "Movie removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;