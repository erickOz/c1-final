import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";

const Favs = () => {
  const { favs } = useCharStates();
  return (
    <div>
      {favs.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};

export default Favs;
