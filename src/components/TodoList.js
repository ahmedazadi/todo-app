import Todo from "./Todo";

function TodoList(prop) {
  return (
    <ul className="mt-4">
      {prop.todoList.map((value) => {
        return (
          <Todo
            id={value.id}
            text={value.text}
            setTodoList={prop.setTodoList}
            todoList={prop.todoList}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
