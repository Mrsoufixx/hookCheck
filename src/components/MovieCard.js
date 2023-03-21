import React from "react";
import "./style/movieCard.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay } from "react-icons/fa";

function MovieCard({ movie }) {
  return (
    <div className="flexCol">
      <figure>
        <img src={movie.posterURL} alt={movie.title} />
        <figcaption>
          <div className="rating" style={{ width: 40, height: 40}}>
            <CircularProgressbar
              value={movie.rating}
              maxValue={10}
              text={`${movie.rating}`}
              styles={{
                path: {
                  // Path color
                  stroke: `#00ADB5`,
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "#393E46",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "#00ADB5",
                  // Text size
                  fontSize: "40px",
                  fontWeight:"600",
                  textShadow: "1px 1px 2px black"
                },
              }}
            />
            
          </div>
          <div className="playIcon"><FaPlay/></div>
          <p>{movie.description}</p>
        </figcaption>
      </figure>
      <h2>{movie.title}</h2>
    </div>
  );
}

export default MovieCard;
