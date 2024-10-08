import React from "react";

const AddToDo = ({ title = "", onTitleChange, onSubmit }) => {
  return (
    <form>
      <input value={title} onChange={onTitleChange} />
      <button onClick={onSubmit}>Add</button>
    </form>
  );
};

export default AddToDo;