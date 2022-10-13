import React from "react";

const MovieCard = ({ movieInfo }) => {
  console.log(movieInfo);
 const imgStyle = {
    height: "30rem",
    width:"25rem",
    margin: 10
 }

  const posterImg = <img style={imgStyle} src={movieInfo.poster_path} alt={movieInfo.title} />;
  return (
    <div>
      {posterImg}
    </div>
  );
};

export default MovieCard;
