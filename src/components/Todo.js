// use state to toggle between line-through and no-underline
import { useState } from "react";
// import bootsstrap icons from reac-incon
import { BsFillHandThumbsUpFill, BsFillXSquareFill } from "react-icons/bs";

function Todo(prop) {
  const [lineThrough, setLineThrough] = useState("no-underline");
  return (
    <div className="bg-cyan-800 h-10 text-cyan-200 pl-4 py-0 rounded-lg my-1">
      <p className={lineThrough + " w-10/12 inline-block"}>{prop.text}</p>

      {/* buttons */}
      <div className=" justify-self-end inline-block h-full self-end">
        {/* Complete button */}
        <button
          className=" hover:text-white h-full px-1"
          onClick={() => {
            setLineThrough(
              lineThrough === "no-underline" ? " line-through" : "no-underline"
            );
          }}
        >
          <BsFillHandThumbsUpFill />
        </button>

        {/* delete button */}
        <button
          className=" hover:text-white h-full px-1 "
          onClick={() => {
            // get this element and store it inside of a variable
            const thisElement = prop.todoList.filter(
              (todo) => todo.id !== prop.id
            );

            prop.setTodoList(thisElement);
          }}
        >
          <BsFillXSquareFill />
        </button>
      </div>
    </div>
  );
}

export default Todo;
