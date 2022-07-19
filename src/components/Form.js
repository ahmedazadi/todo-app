// import ID generator
import IdGen from "../utility/IdGen";

function Form(prop) {
  return (
    <>
      <form
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
          e.target.text.value = "";
        }}
      >
        <input type="text" name="text" />
        <input type="submit" />
      </form>
    </>
  );
}

export default Form;
