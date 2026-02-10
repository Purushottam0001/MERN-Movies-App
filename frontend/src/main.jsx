import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store.js";

import { Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

// Layout
import App from "./App.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Profile from "./pages/User/Profile.jsx";

import AllMovies from "./pages/Movies/AllMovies.jsx";
import MovieDetails from "./pages/Movies/MovieDetails.jsx";

// Admin
import AdminRoute from "./pages/Admin/AdminRoute.jsx";
import PrivateRoute from "./pages/Auth/PrivateRoute.jsx";
import GenreList from "./pages/Admin/GenreList.jsx";
import AdminMoviesList from "./pages/Admin/AdminMoviesList.jsx";
import UpdateMovie from "./pages/Admin/UpdateMovie.jsx";
import CreateMovie from "./pages/Admin/CreateMovie.jsx";
import AllComments from "./pages/Admin/AllComments.jsx";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route index element={<Home />} />
      <Route path="movies" element={<AllMovies />} />
      <Route path="movies/:id" element={<MovieDetails />} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* PRIVATE ROUTES */}
      <Route element={<PrivateRoute />}>
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route element={<AdminRoute />}>
        <Route path="admin/movies/genre" element={<GenreList />} />
        <Route path="admin/movies/create" element={<CreateMovie />} />
        <Route path="admin/movies-list" element={<AdminMoviesList />} />
        <Route path="admin/movies/update/:id" element={<UpdateMovie />} />
        <Route path="admin/movies/dashboard" element={<AdminDashboard />} />
        <Route path="admin/movies/comments" element={<AllComments />} />
      </Route>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
