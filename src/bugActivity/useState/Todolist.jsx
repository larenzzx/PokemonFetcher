import { useState } from "react";

function TodoList() {
  // When you add a new todo, the list does not update.
  // (Hint: Never directly mutate state.)

  const [todos, setTodos] = useState(["Learn React", "Build a project"]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    todos.push(newTodo);
    setTodos(todos);
    setNewTodo("");
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input
        className="input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
