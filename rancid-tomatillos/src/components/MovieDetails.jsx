import React from "react";
import Details from "./Details";

const MovieDetails = ({details}) => {
    return (
        <div>
            <Details details={details.clickedMovie}/>
        </div>
    )
}

export default MovieDetails