function Todo(prop) {
  return (
    <div className="bg-sky-700 my-1 ">
      <p className=" w-8/12 inline-block">{prop.text}</p>
      <button
        className="w-2/12"
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
        className=" w-2/12"
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
