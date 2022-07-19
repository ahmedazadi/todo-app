import { useState } from "react";
// css
import "./index.css";
// components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
// id generator
import IdGen from "./utility/IdGen";

function App() {
  const [todoList, setTodoList] = useState([
    // { id: IdGen(), text: "one", isDone: false },
    // { id: IdGen(), text: "two", isDone: false },
  ]);

  return (
    <div className=" max-w-md bg-slate-500 m-auto mt-24 p-8">
      {/* we pass in todoList vlaue for component to be able access list 
      and setTodoList function for component to be able change value */}
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
