// import ID generator
import IdGen from "../utility/IdGen";

function Form(prop) {
  return (
    <>
      <form
        className=" h-10"
        // when usubmit button is clicked
        onSubmit={(e) => {
          // prevent page from reloading
          e.preventDefault();

          if (e.target.text.value !== "") {
            // leave currnet value of [todoList]array as it is and add a new item to it
            prop.setTodoList((currentValue) => {
              return [
                ...currentValue,
                { id: IdGen(), text: e.target.text.value },
              ];
            });
          }

          // empty the form
          // e.target.text.value = "";
        }}
      >
        <input
          className=" h-full active:outline-none placeholder-cyan-200 text-white inline-block w-9/12 bg-cyan-500 rounded-l-lg px-4"
          type="text"
          name="text"
          placeholder="write you todo here...."
          onChange={() => {
            console.log(this.value);
          }}
        />
        <input
          className="duration-30 text-white hover:bg-cyan-900  px-4 h-full inline-block w-3/12 cursor-pointer bg-cyan-700 rounded-r-lg"
          type="submit"
        />
      </form>
    </>
  );
}

export default Form;
