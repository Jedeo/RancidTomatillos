import React from "react";
import Details from "./Details";
import './MovieDetails.css'

const MovieDetails = ({details, id}) => {
    return (
        <div className="movieDetailsContainer">
            <Details details={details}/>
        </div>
    )
}

export default MovieDetails
