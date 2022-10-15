import React, { Component } from "react";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
      movie: {
        isClick: false,
      },
    };
  }

 componentDidMount () {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(err => {
      if(err === 500) {
        this.setState({error: true})
      }
    })
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
    let home = {...this.state.movie}
    this.setState({movie: { isClick: false, home}});
  };

  handleDetailPage = () => {
    if (this.state.movie.isClick === false) {
      return "hidden";
    }
  }

  render() {
    console.log(this.state.movies);
    const flexStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    return (
      <main style={flexStyle}>

        {!this.state.error && <Navbar home={this.handleHome} hidden={this.handleHidden} />}
        {this.state.error && <h2>Server Error, please try again...</h2>}
        {this.state.movie.isClick === false && (
          <div className={this.handleHidden}>
            <Movie handleClick={this.handleClick} movies={this.state.movies} />{" "}
          </div>
        )}

        {this.state.movie.isClick === true && (
          <div className={this.handleDetailPage}>
            <MovieDetails details={this.state.movie} />{" "}
          </div>
        )}
      </main>
    );
  }
}

export default App;
