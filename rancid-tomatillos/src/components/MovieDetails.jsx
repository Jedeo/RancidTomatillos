import React from "react";
import Details from "./Details";
import './MovieDetails.css'

const MovieDetails = ({details}) => {
    return (
        <div className="movieDetailsContainer">
            <Details details={details.clickedMovie}/>
        </div>
    )
}

export default MovieDetails
