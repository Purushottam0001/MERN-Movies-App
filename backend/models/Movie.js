import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    poster: {
      type: String,
      required: true,
    },

    banner: {
      type: String,
      default: "",
    },

    year: Number,

    genre: [String],

    cast: [String],

    plot: String,

    duration: String,

    language: {
      type: String,
      default: "English",
    },

    rating: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    isTrending: {
      type: Boolean,
      default: false,
    },

    isTopRated: {
      type: Boolean,
      default: false,
    },

    isNewRelease: {
      type: Boolean,
      default: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
