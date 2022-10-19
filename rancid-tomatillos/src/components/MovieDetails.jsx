import React from "react";
import Details from "./Details";
import './MovieDetails.css'

const MovieDetails = ({details}) => {
  console.log(details)
    return (
        <div className="movieDetailsContainer">
            <Details details={details}/>
        </div>
    )
}

export default MovieDetails
