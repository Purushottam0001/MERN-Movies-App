import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import moviesRoutes from "./routes/moviesRoutes.js";

dotenv.config();
connectDB();

const app = express();

// ===== MIDDLEWARE =====
app.use(express.json());

// ===== CORS =====
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mern-movies-app-ten.vercel.app",
      "https://mern-movies-ly6hz1yg-purushottams-projects-ec542b57.vercel.app",
    ],
    credentials: true,
  })
);

// ===== TEST ROUTE =====
app.get("/", (req, res) => {
  res.send("🚀 MERN Movies API is running...");
});

// ===== ROUTES =====
app.use("/api/v1/movies", moviesRoutes);

// ===== SERVER =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
