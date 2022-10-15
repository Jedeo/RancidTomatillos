import movieData from "./movieData";
import React, { Component } from "react";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...movieData,
      movie: {
        isClick: false,
      },
    };
  }

  handleClick = (movieDetails) => {
    let clickedMovie = { ...this.state.movie };
    clickedMovie = movieDetails;

    this.setState({ movie: { isClick: true, clickedMovie } });
  };
  handleHidden = () => {
    if (this.state.movie.isClick === true) {
      return "hidden";
    }
  };

  handleHome = () => {
    let home = { ...this.state.movie };
    this.setState({ movie: { isClick: false, home } });
  };

  handleDetailPage = () => {
    if (this.state.movie.isClick === false) {
      return "hidden";
    }
  };

  handleSearch = (movieName) => {
    if (movieName.length !== 0) {
      const allMovies = { ...this.state };
      this.setState({
        movies: allMovies.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(movieName.toLowerCase());
        }),
      });
    }

    if (movieName.length == 0) {
      this.setState({
        ...movieData,
      });
    }
  };

  render() {
    const flexStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    return (
      <main style={flexStyle}>
        <Navbar handleSearch={this.handleSearch} hidden={this.handleHidden} home={this.handleHome} />

        {this.state.movie.isClick === false && (
          <div className={this.handleHidden()}>
            <Movie handleClick={this.handleClick} movies={this.state.movies} />{" "}
          </div>
        )}

        {this.state.movie.isClick === true && (
          <div className={this.handleDetailPage()}>
            <MovieDetails details={this.state.movie} />{" "}
          </div>
        )}
      </main>
    );
  }
}

export default App;
