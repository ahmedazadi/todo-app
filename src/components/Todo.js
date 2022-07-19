function Todo(prop) {
  return (
    <div>
      <p>some text{prop.text}</p>
      <button
        onClick={() => {
          // set a new value to TodoList
          prop.setTodoList(
            prop.todoList.map((item) => {
              // map through the items
              if (item.id === prop.id) {
                // if the item is found the return below object
                return {
                  // leave everything as they are
                  ...item,

                  // change the value of is done to the opposite of the current one
                  isDone: !item.isDone,
                };
              }
              // if the item we are checking is not what we're looking for then return it as it is
              return item;
            })
          );
        }}
      >
        done
      </button>
      <button
        onClick={() => {
          prop.setTodoList(prop.todoList.filter((todo) => todo.id !== prop.id));
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Todo;
