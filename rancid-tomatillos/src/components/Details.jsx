import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Details.css";
import VideoPlayer from "./VideoPlayer";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      videos: [],
      id: props.id,
      isRedirectTrue: false,
      error: "",
    };
  }

  async componentDidMount() {
    const { movieId, getError } = this.props;
    this.getVideos(movieId);
    const resp = await fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`
    ).catch((error) => console.log(error));
    if (resp.status >= 400) {
      const respJson = await resp.json();

      this.setState(
        () => {
          return { error: respJson, isRedirectTrue: true };
        },
        () => {
          getError(respJson);
        }
      );
    } else {
      const respJson = await resp.json();
      await this.setState(() => {
        return { selectedMovie: respJson.movie };
      });
      //console.log(respJson);
    }
  }

  getVideos = async (movieId) => {
    const resp = await fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`
    );
    const videos = await resp.json();
    if (resp.ok === true) {
      await this.setState(() => {
        return { videos: videos.videos };
      });
    }
  };

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
      height: "auto",
      width: "80vw",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    if (this.state.isRedirectTrue === true) {
      return <Redirect to="/pageNotFound" />;
    }

    const keys = this.state.videos.map((video) => video.key);
   
    return (
      <div>
        <section style={backimg} className="detailsContainer">
          <div>
            <div className="moviePoster">{clickedImage}</div>
            <div className="extraDetails">
            <p>Release date: {details.release_date} </p>
            <p>Average rating: {details.average_rating}</p>
            <p>Genres: {details.genres}</p>
            <p>Budget: {details.budget}</p>
            <p>Revenue: {details.revenue}</p>
            <p>Runtime: {details.runtime} min</p>
            </div>
          </div>
          
            <div className="movieDetails">
              <h1>{details.title}</h1>
              <h3>{details.overview}</h3>
              <VideoPlayer keys={keys}/>
            </div>

        </section>
      </div>
    );
  }
}

export default Details;
