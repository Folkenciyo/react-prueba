import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./styles.css";

const POPULAR_GIFS = [
  "OnePiece",
  "DragonBall",
  "HunterXHunter",
  "Naruto",
  "BlackClover",
];

export const Home = ({ params }) => {
  const [path, pushLocation] = useState();
  const [keyword, setKeyword] = useLocation('');



  const handleChange = (evt) => {
    console.log(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navega a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  return (
    <div>
      <form onsubmit={handleSubmit}>
        <input placeholder="buscalo aqui" onChange={handleChange} type="text" value={keyword}></input>
      </form>
      <div className="Links">
        <h3>Los Gifs más populares:</h3>
        <ul>
          {POPULAR_GIFS.map((name) => {
            return (
              <li>
                <Link to={`/search/${name}`}>Gif de {name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
