import { useState } from "react";
import Navbar from "./Navbar";

const ToDo = () => {
  const [newItem, setNewItem] = useState("");

  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <div className=" m-2 text-blue-900">
          <label htmlFor="item">New Item</label>
          <input
            className="bg-gray-300 m-2 p-1 text-black "
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn bg-red-500 p-1 rounded">Add</button>
      </form>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-blue-800 underline">ToDo list</h1>
        <ul className="my-2">
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <label className="m-2 text-2xl">
                  <input className="m-2"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
                </label>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 rounded p-1"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDo;
