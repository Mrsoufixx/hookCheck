import React from 'react';
import MovieCard from './MovieCard';


function MovieList({ movies }) {
  return (
    <div className='flexRow'>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;