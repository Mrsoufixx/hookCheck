import MovieList from "../MovieList";
import React, { useState } from "react";
import Filter from "../Filter";
import Movies from "../Movies";
import MovieInput from "../MovieInput";
import "../../App.css";
import { TbSquareRoundedPlus } from "react-icons/tb";

function Home() {
  const [movies, setMovies] = useState(Movies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [showInputForm, setShowInputForm] = useState(false);

  function handleTitleFilterChange(value) {
    setTitleFilter(value);
  }

  function handleRatingFilterChange(value) {
    setRatingFilter(value);
  }

  function AddMovie(title, description, posterURL, rating, trailer) {
    const newMovie = {
      title,
      description,
      trailer,
      posterURL,
      rating:Number(rating),
    };
    setMovies([...movies, newMovie]);
    setShowInputForm(false);
  }
  function handleCancel() {
    setShowInputForm(false);
  }

  let filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase())
  );
  if (ratingFilter) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.rating === Number(ratingFilter)
    );
  }
  return (
    <>
      <div className="container marginLR">
        <h1>Découvrer les meilleurs films sur SoukFilm</h1>
        <div className="addMovie">
          <button onClick={() => setShowInputForm(true)} className="addBtn">
            <TbSquareRoundedPlus />
          </button>
          {showInputForm && (
            <MovieInput onAddMovie={AddMovie} onCancel={handleCancel} />
          )}
        </div>

        <Filter
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          onTitleFilterChange={handleTitleFilterChange}
          onRatingFilterChange={handleRatingFilterChange}
        />
        <MovieList movies={filteredMovies} />
      </div>
    </>
  );
}

export default Home;
