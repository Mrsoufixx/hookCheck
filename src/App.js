import React, { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Movies from "./components/Movies";
import "./App.css";

function App() {
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

  function AddMovie(title, description, posterURL, rating) {
    const newMovie = {
      title,
      description,
      posterURL,
      rating,
    };
    setMovies([...movies, newMovie]);
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
    <div className="container">
      <h1>My Movie App</h1>
      <button onClick={() => setShowInputForm(true)}>Add Movie</button>
      {showInputForm && <MovieInput onAddMovie={AddMovie} />}
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleFilterChange={handleTitleFilterChange}
        onRatingFilterChange={handleRatingFilterChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

function MovieInput({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddMovie(title, description, posterURL, rating);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}>
        </textarea>
      </label>
      <label>
        Poster URL:
        <input
          type="text"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default App;
