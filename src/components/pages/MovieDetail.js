import React from "react";
import { Link, useParams } from "react-router-dom";
import Movies from "../Movies";

function MovieDetail() {
  const {title}= useParams()
  console.table(title)
  const movie=  Movies.find((movie) => movie.title === title);
  return (
    
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe title={movie.title} width="560" height="315" src={movie.trailer} allowFullScreen />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;