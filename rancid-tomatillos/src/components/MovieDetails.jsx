import React from "react";
import Details from "./Details";

const MovieDetails = ({details}) => {
    //console.log('deteeee', details);
    return (
        <div>
            <Details details={details.clickedMovie}/>
        </div>
    )
}

export default MovieDetails