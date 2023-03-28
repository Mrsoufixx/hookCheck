import { useState } from "react";
import movieIcon from "./../../../assets/addMovieIcon.svg"
import "../style/movieInput.css";

function MovieInput({ onAddMovie, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddMovie(title, description, posterURL, rating, trailer);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailer("");
    
  }

  function handleCancel(e) {
    e.preventDefault();
    onCancel();
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailer("");
    
  }

  return (
    
      <form onSubmit={handleSubmit}>
        <div className="movieIcon"><img src={movieIcon} alt="icon" /></div>
        <fieldset>
          <legend>Add Movie Info</legend>
        <div className="gridInput">
          
          
          <div className="description">
            <label>Description</label>
            <textarea
              placeholder=" Ecrire ici la description du film"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="title">
            <label>Title</label>
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
            <textarea
              placeholder="Coller ici embed video"
              value={trailer.src}
              onChange={(e) => setTrailer({src : e.target.value.substring(e.target.value.indexOf('https://'),e.target.value.indexOf('" title'))})}
              required
            ></textarea>
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
            <button type="submit" >Add Movie</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
        </fieldset>
      </form>
 
  );
}

export default MovieInput;
