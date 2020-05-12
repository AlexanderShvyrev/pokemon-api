import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [isClicked, setState] = useState(false);

  useEffect(() => {
    if (isClicked) {

      axios.get("https://pokeapi.co/api/v2/pokemon?limit=964")
        .then(response => { setPokemons(response.data.results) })

    }
  }, [isClicked])

  return (
    <Fragment>
      <div className="jumbotron">
        <button className="btn btn-lg btn-dark" onClick={(e) => setState(true)}>Fetch Pokemon</button>
      </div>
      <ul className="list-group">
        {pokemons.length > 0 && pokemons.map((pokemon, i) => {
          return (<li key={i} className="list-group-item">{pokemon.name}</li>)
        })}
      </ul>
    </Fragment>
  );

}

export default App;
