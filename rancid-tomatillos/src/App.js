import movieData from "./movieData";
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {...movieData} 
  }
  

  render() { 
    return (
      <h1> Hello </h1>
    );
  }
}


export default App;
