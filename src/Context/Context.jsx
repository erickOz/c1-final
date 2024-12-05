import { createContext, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { reducer } from "../reducers/reducer";

const CharStates = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  chars: [],
  favs: lsFavs,
  theme: "",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [favs, setFavs] = useState(lsFavs);
  // const [chars, setChars] = useState([]);
  // const [theme, setTheme] = useState(true);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      dispatch({ type: "GET_CHARS", payload: res.data.results });
      // setChars(res.data.results);
    });
  }, []);
  return (
    <CharStates.Provider value={{ state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => useContext(CharStates);
