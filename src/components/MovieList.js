
import React from 'react';
import MovieCard from './MovieCard';
import "./style/movieList.css"


function MovieList({ movies }) {
  // useEffect(()=>{
  //   const fetchMovie= async()=>{
  //     const url = "https://www.omdbapi.com/?t=godfather&apikey=cabf324b"
  //     const response = await fetch(url)
  //     const finalData = await response.json()
  //     console.log(finalData.Search)
  //   }
  //   fetchMovie()
  // },[])
  return (
    <div className='grid-4'>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;