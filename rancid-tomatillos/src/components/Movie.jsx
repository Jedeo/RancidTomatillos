import React from "react";
import MovieCard from "./MovieCard";
import "./Movie.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Movie = ({ loading, error, errorMessage, movies, handleClick }) => {
  const slidesLength = (movies.length < 4 && movies.length > 0 ? movies.length : 4);
  const moviesData = movies.map((movie) => (
    <SwiperSlide key={movie.id}>
    <MovieCard  key={movie.id} handleClick={handleClick} movieInfo={movie} loading={loading} />
    </SwiperSlide>

  ));
  return (
    <div className="movieData">
      {error === true && <h1 className="errorHeader">Error! {errorMessage}. Please Try Again</h1>}
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      style={{margin: 20}}
      slidesPerView={slidesLength}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
        >
      {moviesData}
      </Swiper>
    </div>
  );
};

export default Movie;
