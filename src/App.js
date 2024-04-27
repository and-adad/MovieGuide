import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=17249cd7'

const movie1 = {
  "Title": "Spiderman",
  "Year": "1990",
  "imdbID": "tt0100669",
  "Type": "movie",
  "Poster": "N/A"
}

const movie2 =     {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const movie3 =     {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

const MovieCard = (props) => {
  return (
    <>
      <h1>Title: {props.name}</h1>
    </>
  )
}


function App(props) {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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

        <h2>
          Лучшие фильмы
        </h2>

        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

        <MovieCard name={'Spiderman'} />
        <MovieCard name={'Superman'} />
        <MovieCard name={'Batman'} />
        <MovieCard name={'Bananaman'} />
        <MovieCard name={'Man'} />
        <div className='container'>
          <div className='movie'>
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>

          <div className='movie'>
            <div>
              <p>{movie2.Year}</p>
            </div>
            <div>
              <img src={movie2.Poster !== 'N/A' ? movie2.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>

          <div className='movie'>
            <div>
              <p>{movie3.Year}</p>
            </div>
           <div>
              <img src={movie3.Poster !== 'N/A' ? movie3.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>
          <div className='movie'>
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>

          <div className='movie'>
            <div>
              <p>{movie2.Year}</p>
            </div>
            <div>
              <img src={movie2.Poster !== 'N/A' ? movie2.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>

          <div className='movie'>
            <div>
              <p>{movie3.Year}</p>
            </div>
           <div>
              <img src={movie3.Poster !== 'N/A' ? movie3.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>
          <div className='movie'>
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>

          <div className='movie'>
            <div>
              <p>{movie2.Year}</p>
            </div>
            <div>
              <img src={movie2.Poster !== 'N/A' ? movie2.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>

          <div className='movie'>
            <div>
              <p>{movie3.Year}</p>
            </div>
           <div>
              <img src={movie3.Poster !== 'N/A' ? movie3.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
