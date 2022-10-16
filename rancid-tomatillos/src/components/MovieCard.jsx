import React from "react";
import { Link } from "react-router-dom";
import './MovieCard.css'

const MovieCard = ({ movieInfo, handleClick }) => {

  const posterImg = (
    <img
      className="posterImg"
      onClick={() => handleClick(movieInfo)}
      src={movieInfo.poster_path}
      alt={movieInfo.title}
    />
  );
  return (
    <div className="individualCard">
        <Link to={`/movieDetails/${movieInfo.title}`}> {posterImg} </Link>
    </div>
  );
};

export default MovieCard;
