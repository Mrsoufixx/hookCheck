import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Movies from "../../../data/Movies";
import MovieInput from "./components/MovieInput";
import "../../../App.css";
import { TbSquareRoundedPlus } from "react-icons/tb";
import Modal from "react-modal";

function Home() {
  const [movies, setMovies] = useState(Movies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      rating: Number(rating),
    };
    setMovies([...movies, newMovie]);
    setShowModal(false);
  }
  function handleCancel() {
    setShowModal(false);
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
          <button onClick={() => setShowModal(true)} className="addBtn">
            <TbSquareRoundedPlus />
          </button>
          <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            contentLabel="Add Movie Modal"
            className="modal"
            overlayClassName="overlay"
          >
            <MovieInput onAddMovie={AddMovie} onCancel={handleCancel} />
          </Modal>
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
