import React, { Component } from "react";
import "./Details.css";
import { render } from "@testing-library/react";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {},
    };
  }

  componentDidMount() {
    const id = window.localStorage.getItem("Id");
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${parseInt(id)}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { selectedMovie: data.movie };
          }
        )
      );
  }

  render() {
    const details = this.state.selectedMovie;
    const clickedImage = (
      <img
        style={{ width: "17.5vw", height: "25vw" }}
        src={details.poster_path}
      />
    );
    const backimg = {
      backgroundImage: `url(${details.backdrop_path})`,
      height: "35vw",
      width: "70vw",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <section style={backimg} className="detailsContainer">
        <div className="moviePoster">{clickedImage}</div>
        <div className="movieDetails">
          <h1>{details.title}</h1>
          <h3>{details.overview}</h3>
          <p>Release date: {details.release_date} </p>
          <p>Average rating: {details.average_rating}</p>
          <p>Genres: {details.genres}</p>
          <p>Budget: {details.budget}</p>
          <p>Revenue: {details.revenue}</p>
          <p>Runtime: {details.runtime} min</p>
        </div>
      </section>
    );
  }
}

export default Details;
