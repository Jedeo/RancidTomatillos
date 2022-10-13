import React from "react";
import MovieCard from "./MovieCard";

const Movie = ({movies}) => {
    const movieDataStyle = {
        marginLeft: "20rem",
        display: "flex",
        flexWrap: 'wrap',

    }
    const moviesData = movies.map(movie => <MovieCard movieInfo={movie} />)
    return(
        <div style={movieDataStyle}>
            {moviesData}
        </div>
    )
}



export default Movie;