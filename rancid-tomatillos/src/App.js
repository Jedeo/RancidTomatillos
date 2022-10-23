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
      errorMessage: '',
      error: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if(response.ok) {
          return response.json()
        }
        throw new Error(this.setState({errorMessage: response.status}))
      })
      .then((data) => this.setState({ movies: data.movies }))
      .catch((err) => this.setState({error: true }))
  };

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
  };

  render() {
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
                  error={this.state.error}
                  errorMessage={this.state.errorMessage}
                  handleClick={this.handleClick}
                  movies={this.state.movies}
                />{" "}
              </React.Fragment>
            )}
          />
          <Route
            path="/movieDetails/:id"
            render={({match}) => {
              return (<div className="navbarMovieDetails"> <Navbar/> <MovieDetails movieId={match.params.id} details={this.state.selectedMovie}/> </div>)}}/>
        </Switch> 
      </main>
    );
  }
}

export default App;
