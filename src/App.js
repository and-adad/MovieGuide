import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=17249cd7'

const subject = "Кино справочник";
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

        <p>
          Лучшие фильмы
        </p>

        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

        <MovieCard name={'Spiderman'} />
        <MovieCard name={'Superman'} />
        <MovieCard name={'Batman'} />
        <MovieCard name={'Bananaman'} />
        <MovieCard name={'Man'} />
    </div>
  );
}

export default App;
