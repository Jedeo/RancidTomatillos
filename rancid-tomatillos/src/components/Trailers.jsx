import React, { Component } from "react"

class Trailers extends Component {
  constructor() {
    super()
    this.state = {
      movieId: 0,
    }
  }

  componentDidMount()  {
    const { id } = this.props.details.clickedMovie
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => this.setState({movieId: id}))
  }

  render() {
    console.log(this.state);
    return (
      // getVideoID()
      <h1></h1>
    )
  }
}

export default Trailers
