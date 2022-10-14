import React from "react";
import './Details.css'
const Details = ({ details }) => {
  const clickedImage = <img style={{width:300, height:400}}src={details.poster_path} />;
  const backimg ={
    backgroundImage: `url(${details.backdrop_path})`
  } 
  return (
    <section style={backimg} className="details-container">
      <div className="movie-poster">{clickedImage}</div>
      <div className="movie-details">
        <h1>{details.title}</h1>
        <p>Release date: {details.release_date} </p>
        <p>Average rating: {details.average_rating}</p>
        <p>Genres: {details.genres}</p>
        <p>Budget: {details.budget}</p>
        <p>Revenue: {details.revenue}</p>
        <p>Runtime: {details.runtime}</p>
        <p>Tagline: {details.tagline}</p>
        <p>{details.overview}</p>

      </div>
    </section>
  );
};

export default Details;
