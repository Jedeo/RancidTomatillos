import React, { Component } from "react";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import "./App.css";


// YOUTUBE SETUP www.youtube.com/watch?v="key"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      error: false,
      movie: {
        isClick: false,
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.movies }))
      .catch((err) => {
        if (err === 500) {
          this.setState({ error: true });
        }
      });
  };



  handleClick = (id) => {
    this.setState({selectedMovie: {}})
    const clickedMovie = this.state.movies.find(movie => movie.id === id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2//movies/${clickedMovie.id}`)
      .then(response => response.json())
      .then(data => this.setState({ selectedMovie: data.movie }))
  }
  handleSearch = (movieName) => {
    const allMovies = { ...this.state };
    const movieList = allMovies.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(movieName.toLowerCase());
    });

    if (movieName.length !== 0) {
      this.setState({
        movies: movieList,
      });
    }

    if (movieName.length == 0 || movieList.length === 0) {
      this.fetchData();
    }
    return <span>Sorry the movie is not available</span>;
  };

  render() {
    {console.log(this.state.selectedMovie)}
    return (
      <main className="flexStyle">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <div className="navbarForm">
                <Navbar handleSearch={this.handleSearch} />
                <Form className="searchForm" handleSearch={this.handleSearch}/>
                </div>
                <Movie
                  handleClick={this.handleClick}
                  movies={this.state.movies}
                />{" "}
              </React.Fragment>
            )}
          />
          <Route
            path="/movieDetails"
            render={() => <div className="navbarMovieDetails"> <Navbar/> <MovieDetails details={this.state.selectedMovie} /> </div>}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
