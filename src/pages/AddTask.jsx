import { useState } from "react";
import { useTaskDispatch } from "../hooks/useTaskContext.jsx";
import { ACTION_TYPES } from "../store/constants.js";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch(); //Lấy dispatch từ kho

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: ACTION_TYPES.ADD, payload: text });
    setText("");
  };
  console.log("AddTask render");
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button>Thêm</button>
    </form>
  );
};
export default AddTask;
