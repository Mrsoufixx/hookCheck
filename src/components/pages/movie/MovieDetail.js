import React from "react";
import { Link, useParams } from "react-router-dom";
import Movies from "../../../data/Movies";
import "./movieDetail.css"

function MovieDetail() {
  const {title}= useParams()
  console.table(title)
  const movie=  Movies.find((movie) => movie.title === title);
  return (
    <>
    <Link to="/">Back to Home</Link>
    <div className="marginLR details">
      <figure className="poster">
        <img src={movie.posterURL} alt={movie.title} />
      </figure>
      <h1 className="title">{movie.title}</h1>
      <p className="description">{movie.description}</p>
      
    </div>
    <iframe title={movie.title} width="560" height="315" src={movie.trailer} allowFullScreen />
    
    </>
  );
}

export default MovieDetail;