import movieData from "./movieData";
import React, { Component } from 'react';
import Movie from "./components/Movie";

class App extends Component {
  constructor(){
    super()
    this.state = {...movieData} 
  }
  

  render() { 
    return (
      <Movie movies={this.state.movies} />
    );
  }
}


export default App;
