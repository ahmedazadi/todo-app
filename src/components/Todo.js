// use state to toggle between line-through and no-underline
import { useState } from "react";
// import bootsstrap icons from reac-incon
import { FaCheck, FaRegTimesCircle } from "react-icons/fa";

function Todo(prop) {
  const [lineThrough, setLineThrough] = useState("no-underline");
  return (
    <div className="bg-black h-10 flex items-center text-white px-4 my-1">
      <p className={lineThrough + " flex-grow"}>{prop.text}</p>

      {/* buttons */}
      <div className=" justify-self-end w-fit inline-block h-full self-end">
        {/* Complete button */}
        <button
          className=" hover:text-white h-full px-1"
          onClick={() => {
            setLineThrough(
              lineThrough === "no-underline" ? " line-through" : "no-underline"
            );
          }}
        >
          <FaCheck />
        </button>

        {/* delete button */}
        <button
          className=" hover:text-white w-fit h-full px-1 "
          onClick={() => {
            // get this element and store it inside of a variable
            const thisElement = prop.todoList.filter(
              (todo) => todo.id !== prop.id
            );

            prop.setTodoList(thisElement);
          }}
        >
          <FaRegTimesCircle />
        </button>
      </div>
    </div>
  );
}

export default Todo;
