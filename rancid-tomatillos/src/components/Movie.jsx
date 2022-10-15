import React from "react";
import MovieCard from "./MovieCard";

const Movie = ({ movies, handleClick }) => {
  console.log(movies)
  const movieDataStyle = {
    marginLeft: "20rem",
    display: "flex",
    flexWrap: "wrap",
  };
  const moviesData = movies.map((movie, index) => (
    <MovieCard key={index} handleClick={handleClick} movieInfo={movie} />
  ));
  return (
    <div style={movieDataStyle}>
      {moviesData}
    </div>
  );
};

export default Movie;
