import React, { Component } from "react";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Form from "./components/Form";
import "./App.css";

// YOUTUBE SETUP www.youtube.com/watch?v="key"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errorMessage: "",
      error: false,
      filterMessage: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(this.setState({ errorMessage: response.status }));
      })
      .then((data) => this.setState({ movies: data.movies, loading: false }))
      .catch((err) => this.setState({ error: true }));
  };

  handleSearch = (movieName) => {
    const allMovies = { ...this.state };

    const movieList = allMovies.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(movieName.toLowerCase());
    });

    if (movieList.length === 0) {
      this.setState(() => {
        return { filterMessage: `${movieName} Not In data Base` };
      });
      console.log("no movie");
    } else {
      this.setState(() => {
        return { filterMessage: "" };
      });
    }

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
                  <Form
                    filterMessage={this.state.filterMessage}
                    className="searchForm"
                    handleSearch={this.handleSearch}
                  />
                </div>
                <Movie
                  loading={this.state.loading}
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
            render={({ match }) => {
              return (
                <div className="navbarMovieDetails">
                  {" "}
                  <Navbar />{" "}
                  <MovieDetails
                    movieId={match.params.id}
                    details={this.state.selectedMovie}
                  />{" "}
                </div>
              );
            }}
          />
          <Route path="/pageNotFound" render={()=> <PageNotFound/>}/>
        </Switch>
      </main>
    );
  }
}

export default App;
