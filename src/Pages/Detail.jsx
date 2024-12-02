import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  console.log(params);
  const url = "https://rickandmortyapi.com/api/character/" + params.id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setChar(res.data);
    });
  }, []);

  return (
    <div>
      <h2>{char.name}</h2>
      <img src={char.image} alt="" />
      <h4>Especie: {char.species}</h4>
      <h4>Status: {char.status}</h4>
    </div>
  );
};

export default Detail;
