import { Timer } from "./useEffect/Timer";
import { TitleUpdater } from "./useEffect/TitleUpdater";
import { WindowWidth } from "./useEffect/WindowWidth";
import { UFsample } from "./useEffect/.then/ufSample";
import { Pikachu } from "./useEffect/.then/Pikachu";
import { PokemonFetcher } from "./useEffect/async/PokemonFetcher";
import { PokemonCard } from "./useEffect/async/PokemonCard";
import { PokemonList } from "./useEffect/.then/PokemonList";
import { NameList } from "./useEffect/.then/NameList";

// useStates bug fix
import Counter from "./bugActivity/useState/Counter";
import FruitList from "./bugActivity/useState/FruitList";
import TodoList from "./bugActivity/useState/Todolist";
import BookList from "./bugActivity/useState/BookList";
import CounterList from "./bugActivity/useState/CounterList";
import ToggleText from "./bugActivity/useState/ToggleText";
import ColorChanger from "./bugActivity/useState/ColorChange";
import TextList from "./bugActivity/useState/TextList";

// useEffect bug fix
import UserList from "./bugActivity/useEffect/UserList";
import PostList from "./bugActivity/useEffect/PostList";
import Comments from "./bugActivity/useEffect/Comments";
import Time from "./bugActivity/useEffect/Time";
import RandomDog from "./bugActivity/useEffect/RandomDog";

function App() {
  return (
    <>
      {/* == useEffect sample === */}
      {/* .then */}
      <Timer />
      {/* <TitleUpdater /> */}
      {/* <WindowWidth /> */}
      {/* <UFsample /> */}
      {/* <Pikachu /> */}
      {/* <PokemonList /> */}
      {/* <NameList /> */}

      {/* async */}
      {/* <PokemonFetcher /> */}
      {/* <PokemonCard /> */}

      {/* === useState bug exercise ===  */}
      {/* <Counter /> */}
      {/* <FruitList /> */}
      {/* <TodoList /> */}
      {/* <BookList /> */}
      {/* <CounterList /> */}
      {/* <ToggleText /> */}
      {/* <ColorChanger /> */}
      {/* <TextList /> */}

      {/* useEffect bug exercise */}
      {/* <UserList /> */}
      {/* <PostList /> */}
      {/* <Comments /> */}
      {/* <Time /> */}
      {/* <RandomDog /> */}
    </>
  );
}

export default App;
