import React, { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Movies from "./components/Movies";
import "./App.css";
import NavBar from "./components/layouts/NavBar";
import { TbSquareRoundedPlus } from "react-icons/tb";

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
    <>
      <NavBar />
      <div className="container marginLR">
        <h1>Découvrer les meilleurs films sur SoukFilm</h1>
        <button onClick={() => setShowInputForm(true)} className="addBtn">
          <TbSquareRoundedPlus />
        </button>
        {showInputForm && <MovieInput onAddMovie={AddMovie} />}
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
      <div className="form__group field" >
        <input 
        className="form__field"
        placeholder="Title"
        name="title"
        id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label  class="form__label">Title</label>
      </div>
      <div class="form__group field">
        <input
          type="text"
       
          class="form__field"
          placeholder="Title"
          name="title"
          
          
          required
        />
        <label htmlFor="title-filter" class="form__label">
          Title
        </label>
      </div>
      <div>
        <label>Description:</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Poster URL:</label>
        <input
          type="text"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <div className="btn">
        <button type="submit">Add Movie</button>
        <button>Cancel</button>
      </div>
    </form>
  );
}

export default App;
