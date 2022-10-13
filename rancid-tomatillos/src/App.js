import movieData from "./movieData";
import React, { Component } from 'react';
import Movie from "./components/Movie";
import Navbar from "./components/Navbar"

class App extends Component {
  constructor(){
    super()
    this.state = {...movieData}
  }


  render() {
    const flexStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
    return (
      <div style={flexStyle}>
        <Navbar />
        <Movie movies={this.state.movies} />
      </div>
    );
  }
}


export default App;
