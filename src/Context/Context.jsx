import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CharStates = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const Context = ({ children }) => {
  const [favs, setFavs] = useState(lsFavs);
  const [chars, setChars] = useState([]);
  const [theme, setTheme] = useState(true);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      setChars(res.data.results);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <CharStates.Provider value={{ chars, favs, setFavs }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => useContext(CharStates);
