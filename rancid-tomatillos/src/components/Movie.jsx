import React from "react";
import MovieCard from "./MovieCard";
import "./Movie.css"

const Movie = ({ error, errorMessage, movies}) => {
  const moviesData = movies.map((movie, index) => (
    <MovieCard  key={index}  movieInfo={movie} />
  ));
  return (
    <div className="movieData">
      {error === true && <h1 className="errorHeader">Error! {errorMessage}. Please Try Again</h1>}
      {moviesData}
    </div>
  );
};

export default Movie;
