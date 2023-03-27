import React from "react";
import MovieCard from "./MovieCard";
import "./style/movieList.css";

function MovieList({ movies }) {
  
  return (
    <div className="grid-4">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
      
    </div>
  );
}

export default MovieList;
