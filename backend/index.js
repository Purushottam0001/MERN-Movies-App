// =======================
// IMPORT PACKAGES
// =======================
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// =======================
// IMPORT FILES
// =======================
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// =======================
// CONFIGURATION
// =======================
dotenv.config();
connectDB();

const app = express();

// =======================
// ✅ CORS (VERY IMPORTANT - BEFORE ROUTES)
// =======================
app.use(
  cors({
    origin: [
      "https://mern-movies-app-ten.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

// =======================
// MIDDLEWARES
// =======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// =======================
// ROUTES
// =======================
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/genre", genreRoutes);
app.use("/api/v1/movies", moviesRoutes);
app.use("/api/v1/upload", uploadRoutes);

// =======================
// STATIC FOLDER (UPLOADS)
// =======================
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =======================
// SERVER START
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
