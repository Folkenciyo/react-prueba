import React, { useEffect, useState } from "react";
import { Gif } from "../Gif";
import { getGifs } from "../../services/getGifs";

export const ListOfGifs = ({ params }) => {
  
  const { keyword } = params;


  const [gifs, setGifs] = useState({
    loading: false,
    results:[],
  })

  useEffect(() => {
    setGifs(actualGifs => ({loading: true, results: actualGifs.results}))
    getGifs({ keyword })
      .then((gifs) =>{
      setGifs({ loading: false, results: gifs})
    })
  }, [keyword])


  if (gifs.loading) return <i>Cargando NAKAMA</i>

  return (
    <div className="gifBox">
      {gifs.results.map(({ id, title, url }) => (
    <Gif key={id} id={id} title={title} url={url} />
  ))}
    </div>
  );
};
