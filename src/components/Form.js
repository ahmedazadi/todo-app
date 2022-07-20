// import ID generator
import IdGen from "../utility/IdGen";
// import useState for input with text type
import { useState } from "react";
// import plus icon front fontawsome
import { FaPlus } from "react-icons/fa";

function Form(prop) {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <form
        className=" h-10 flex w-full"
        // when usubmit button is clicked
        onSubmit={(e) => {
          // prevent page from reloading
          e.preventDefault();

          if (inputText !== "") {
            // leave currnet value of [todoList]array as it is and add a new item to it
            prop.setTodoList((currentValue) => {
              return [...currentValue, { id: IdGen(), text: inputText }];
            });
          }

          // empty the form
          e.target.text.value = "";
        }}
      >
        <input
          className=" h-full focus:border-none flex-grow self-start focus:bg-gray-300 placeholder-gray-500 text-black block  bg-white border-black border-2 px-4"
          type="text"
          name="text"
          placeholder="write you todo here...."
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        {/* <input value={} /> */}
        <button
          className=" p-0 duration-30 text-white hover:bg-gray-900 px-4 h-full block w-fit  cursor-pointer bg-black"
          type="submit"
        >
          <FaPlus className="" />
        </button>
      </form>
    </>
  );
}

export default Form;
