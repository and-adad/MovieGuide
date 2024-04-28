import React from "react";

const MovieCard = ({ movie }) => {
  // { movie1 } вместо props чтобы везде ниже не писать ...props.movie1.Year...
    return (
      <div className='movie'>
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>
        <div className="movie-card-footet">
          <h1 className="rating">8.4</h1>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    );
}

export default MovieCard;