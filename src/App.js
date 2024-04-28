import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=17249cd7'

// const movie1 = {
//   "Title": "Spiderman",
//   "Year": "1990",
//   "imdbID": "tt0100669",
//   "Type": "movie",
//   "Poster": "N/A"
// }

// const movie2 =     {
//   "Title": "Superman, Spiderman or Batman",
//   "Year": "2011",
//   "imdbID": "tt2084949",
//   "Type": "series",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }

// const movie3 =     {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }

const MovieCardMe = (props) => {
  return (
    <div className='oldComponent'>
      <h4>Title: {props.name}</h4>
      <h4>Year: 1996</h4>
    </div>
  )
}
// если мы больше одной строки то фрагмент использовать обязательно <></>

function App(props) {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.subject}</h1>
      </header>

      <h1>
        Лучшие фильмы
      </h1>

      {movies?.length > 0 ? (
        <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

      <div className="old">
        <MovieCardMe name='Spiderman' />
        <MovieCardMe name='Bananaman' />
        <MovieCardMe name='Superman' />
        <MovieCardMe name='Batman' />
        <MovieCardMe name='Man' />
      </div>
  
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  );
};

export default App;
