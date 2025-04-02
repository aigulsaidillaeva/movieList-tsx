import { Routes, Route, Navigate } from "react-router";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";

const MainRout = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="movie" />} />
      <Route path="movie" element={<MovieList />} />
      <Route path="movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default MainRout;
