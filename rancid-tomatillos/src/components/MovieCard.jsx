import React from "react";
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
     {posterImg}
    </div>
  );
};

export default MovieCard;
