import React from "react";
import Details from "./Details";
import './MovieDetails.css'

const MovieDetails = ({details,movieId}) => {
    return (
        <div className="movieDetailsContainer">
            <Details movieId={movieId} details={details}/>
        </div>
    )
}

export default MovieDetails
