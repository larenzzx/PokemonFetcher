import { PokemonFetcher } from "./components/PokemonFetcher";
import { PokemonCard } from "./components/PokemonCard";
import { FetchPrac } from "./components/FetchPrac";
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
      {/* <PokemonFetcher /> */}
      {/* <PokemonCard /> */}
      {/* <FetchPrac /> */}

      {/* ==== bug activity ==== */}
      {/* <BugTwo />  */}
      {/* <BugThree />  */}
      {/* <BugFour />  */}

      {/* useState bug exercise */}
      {/* <Counter /> */}
      {/* <FruitList /> */}
      {/* <TodoList /> */}
      {/* <BookList /> */}
      {/* <CounterList /> */}

      {/* useEffect bug exercise */}
      <UserList />
    </>
  );
}

export default App;
