import React from "react";
import MovieCard from "./MovieCard";
import "./Movie.css"

const Movie = ({ movies, handleClick }) => {

  const moviesData = movies.map((movie, index) => (
    <MovieCard  key={index} handleClick={handleClick} movieInfo={movie} />
  ));
  return (
    <div className="movieData">
      {moviesData}
    </div>
  );
};

export default Movie;
