import { useState } from "react";
import "./style/movieInput.css";

function MovieInput({ onAddMovie, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddMovie(title, description, posterURL, rating);
  }
  function handleCancel(e) {
    e.preventDefault();
    onCancel();
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="gridInput">
        <div className="description">
          <label>Description</label>
          <textarea
            placeholder="ici la description du film"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="title">
          <label >Title</label>
          <input
            className=""
            placeholder="Title"
            name="title"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="poster">
          <label>Poster URL</label>
          <input
            placeholder="Poster URL"
            type="text"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            required
          />
        </div>
        <div className="trailer">
          <label>Trailer link</label>
          <input
            placeholder="Poster URL"
            type="text"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
            required
          />
        </div>

        <div className="rating">
          <label>Rating</label>
          <input
            placeholder="Rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <div className="btn">
          <button type="submit">Add Movie</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default MovieInput;
