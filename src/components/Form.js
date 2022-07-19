// import ID generator
import IdGen from "../utility/IdGen";

function Form(prop) {
  return (
    <>
      <form
        className=" h-8"
        // when usubmit button is clicked
        onSubmit={(e) => {
          // prevent page from reloading
          e.preventDefault();
          // leave currnet value of [todoList]array as it is and add a new item to it
          prop.setTodoList((currentValue) => {
            return [
              ...currentValue,
              { id: IdGen(), text: e.target.text.value, isDone: false },
            ];
          });

          // empty the form
          // e.target.text.value = "";
        }}
      >
        <input
          className=" h-full inline-block w-9/12"
          type="text"
          name="text"
          onChange={() => {
            console.log(this.value);
          }}
        />
        <input
          className="h-full inline-block w-3/12 cursor-pointer bg-slate-200"
          type="submit"
        />
      </form>
    </>
  );
}

export default Form;
