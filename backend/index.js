// =======================
// IMPORT PACKAGES
// =======================
import express from "express";
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
dotenv.config();        // Load .env variables
connectDB();            // Connect MongoDB

const app = express();

// =======================
// MIDDLEWARES
// =======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// =======================
// PORT CONFIGURATION
// =======================
const PORT = process.env.PORT || 3000;

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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
