import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Card = ({ char }) => {
  const { setFavs } = useCharStates();

  const addFav = () => {
    setFavs((favs) => [...favs, char]);
  };

  return (
    <div>
      <Link to={`/detail/${char.id}`}>
        <h3>{char.name}</h3>
        <img src={char.image} alt="" />
      </Link>
      <br />
      <button onClick={addFav}>⭐</button>
    </div>
  );
};

export default Card;
