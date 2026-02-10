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
// ✅ CORS CONFIGURATION
// =======================
// Allow both deployed frontend and local frontend
const allowedOrigins = [
  "https://mern-movies-app-ten.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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
