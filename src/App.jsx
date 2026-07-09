import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const addTodos = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), name: text, completed: false }]);
      setText("");
    }
  };
  const deleteTodo = (id) => {
    const todo = todos.filter((t) => t.id !== id);
    setTodos(todo);
  };
  const toggleCompleted = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo,completed: !todo.completed } : todo,
      ),
    );
  };
  const completeTask = todos.filter((t)=>t.completed===true)
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-green-500 to-blue-700">
      <div className="p-16 bg-amber-400 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">React TODO list </h1>
        <div className="flex mt-5 mb-3">
          <input
            type="text"
            value={text}
            placeholder="todo...."
            onChange={(e) => setText(e.target.value)}
            className="px-3 pt-2 border border-blue-900 rounded-l-2xl 2xl focus:outline-none foucs:ring-1 ring-blue-600"
          />
          <button
            onClick={addTodos}
            className="px-6 py-2 bg-blue-600 text-white rounded-r-2xl hover:bg-green-400 duration-300 "
          >
            ADD
          </button>
        </div>
        <ul className="mb-4">
          {todos.length > 0 ? (
            todos.map((t) => (
              <li
                key={t.id}
                className="flex justify-between items-center border-b border-blue-300
          hover:scale-105 duration-300 cursor-pointer"
              >
                <div className="flex gap-5">
                  <input
                    type="checkbox" value={t.completed} onChange={() => toggleCompleted(t.id)}/>
                  <p className={t.completed ? 'line-through' :''}>{t.name}</p>
                </div>
                <button
                  onClick={() => deleteTodo(t.id)}
                  className="py-2 px-3 bg-red-500 text-amber-50 rounded-2xl cursor-pointer hover:bg-red-500 transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))
          ) : (
            <p>No task!</p>
          )}
        </ul>
        <div>
          <p> All Task {todos.length} Completed Task {completeTask.length} </p>
        </div>
      </div>
    </div>
  );
};

export default App;
