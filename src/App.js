import { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import IdGen from "./utility/IdGen";

function App() {
  const [todoList, setTodoList] = useState([
    { id: IdGen(), text: "one", isDone: false },
    { id: IdGen(), text: "two", isDone: false },
  ]);

  return (
    <>
      {/* we pass in todoList vlaue for component to be able access list 
      and setTodoList function for component to be able change value */}
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
