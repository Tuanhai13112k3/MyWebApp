import { useState } from "react";
import { useTaskDispatch } from "../hooks/useTaskContext.jsx";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch(); //Lấy dispatch từ kho

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TASK", payload: text });
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
