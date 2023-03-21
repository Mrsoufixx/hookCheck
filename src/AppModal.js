import React, { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Movies from "./components/Movies";
import AddMovies from "./components/AddMovies";

function App() {
  const [movies, setMovies] = useState(Movies);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [showAddMovies, setShowAddMovies] = useState(false);

  function handleTitleFilterChange(value) {
    setTitleFilter(value);
  }

  function handleRatingFilterChange(value) {
    setRatingFilter(value);
  }
  
  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie]);
    setShowAddMovies(false);
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
    <div>
      <h1>My Movie App</h1>
      <button onClick={() => setShowAddMovies(true)}>Add Movie</button>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleFilterChange={handleTitleFilterChange}
        onRatingFilterChange={handleRatingFilterChange}
      />
      <MovieList movies={filteredMovies} />
      {showAddMovies && (
        <AddMovies onAddMovie={handleAddMovie} onClose={() => setShowAddMovies(false)} />
      )}
    </div>
  );
}

export default App;
