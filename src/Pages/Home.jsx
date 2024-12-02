import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";

const Home = () => {
  const { chars } = useCharStates();

  return (
    <div>
      {chars.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};

export default Home;
