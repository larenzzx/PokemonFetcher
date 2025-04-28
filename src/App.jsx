import { UFsample } from "./useEffect/.then/ufSample";
import { Pikachu } from "./useEffect/.then/Pikachu";
import { PokemonFetcher } from "./useEffect/async/PokemonFetcher";
import { PokemonCard } from "./useEffect/async/PokemonCard";
import { PokemonList } from "./useEffect/.then/PokemonList";
import { NameList } from "./useEffect/.then/NameList";
import Counter from "./bugActivity/useState/Counter";
import BugTwo from "./bugActivity/BugTwo";
import BugThree from "./bugActivity/BugThree";
import BugFour from "./bugActivity/BugFour";
import FruitList from "./bugActivity/useState/FruitList";
import TodoList from "./bugActivity/useState/Todolist";
import BookList from "./bugActivity/useState/BookList";
import CounterList from "./bugActivity/useState/CounterList";
import UserList from "./bugActivity/useEffect/UserList";



function App() {
  return (
    <>
      {/* == useEffect sample === */}
      {/* .then */}
      {/* <UFsample /> */}
      {/* <Pikachu /> */}
      {/* <PokemonList /> */}
      <NameList />

      {/* async */}
      {/* <PokemonFetcher /> */}
      {/* <PokemonCard /> */}


      {/* ==== bug activity ==== */}
      {/* <BugTwo />  */}
      {/* <BugThree />  */}
      {/* <BugFour />  */}

      {/* === useState bug exercise ===  */}
      {/* <Counter /> */}
      {/* <FruitList /> */}
      {/* <TodoList /> */}
      {/* <BookList /> */}
      {/* <CounterList /> */}

      {/* useEffect bug exercise */}
      {/* <UserList /> */}
    </>
  );
}

export default App;
