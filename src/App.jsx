import { PokemonFetcher } from "./components/PokemonFetcher";
import { PokemonCard } from "./components/PokemonCard";
import { FetchPrac } from "./components/FetchPrac";
import BugOne from "./bugActivity/BugOne";
import BugTwo from "./bugActivity/BugTwo";
import BugThree from "./bugActivity/BugThree";
import BugFour from "./bugActivity/BugFour";
import FruitList from "./bugActivity/useState/FruitList";

function App() {
  return (
    <>
      {/* <PokemonFetcher /> */}
      {/* <PokemonCard /> */}
      {/* <FetchPrac /> */}

      {/* ==== bug activity ==== */}
      {/* <BugOne /> */}
      {/* <BugTwo />  */}
      {/* <BugThree />  */}
      {/* <BugFour />  */}

      {/* useState bug exercise */}
      <FruitList />
    </>
  );
}

export default App;
