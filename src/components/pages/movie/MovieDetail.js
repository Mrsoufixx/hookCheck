import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Movies from "../../../data/Movies";
import "./movieDetail.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Modal from "react-modal";

Modal.setAppElement('#root');

function MovieDetail() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  const { title } = useParams();
  console.table(title);
  const movie = Movies.find((movie) => movie.title === title);
  return (
    <>
      <div className="movieDetail marginLR">
        <Link to="/" className="iconBack">
          <IoIosArrowDropleftCircle />
        </Link>
        <div className=" details">
          <figure className="poster">
            <img src={movie.posterURL} alt={movie.title} />
          </figure>
          <div className="propDetail">
            <h1 className="title">{movie.title} <span>{movie.rating}/5</span></h1>
            <div className="detailInfo">
              <div className="info">{movie.annee}</div>
              <div className="info">{movie.type}</div>
              <div className="info">{movie.heure}</div>
            </div>
            <p className="description">{movie.description}</p>
            <div className="btnDetail">
              <button className="watch" onClick={openModal}>
                Watch Trailer
              </button>
              <button className="watchList">Add to Watchlist</button>
              <button className="share">Share</button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isOpenModal}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          <div>{movie.trailer}</div>
        </Modal>
      </div>
    </>
  );
}

export default MovieDetail;
