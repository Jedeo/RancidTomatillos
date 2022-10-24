import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Details.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      id: props.id,
      isRedirectTrue: false, 
      error: ''
    };
  }

  async componentDidMount() {
    const { movieId } = this.props;
    const resp = await fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`
    ).catch((error) => console.log(error));
    if(resp.status === 404){
      const respJson = await resp.json();
      this.setState(()=> {return {error: respJson, isRedirectTrue: true}}, ()=> {console.log(this.state)})
    }else{
      const respJson = await resp.json();
      await this.setState(() => {
        
        return { selectedMovie: respJson.movie };
      });
  
    }
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

    if(this.state.isRedirectTrue === true){
      console.log("Redirecting");
      return <Redirect to="/pageNotFound" />
    }

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
