import React from "react";
import { Link } from "wouter";
import '../Gif'

export const Gif = ({title, id, url}) => {
  return (
    <Link href={`/gif/${id}`} className="Gif-link">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </Link>
  );
};
