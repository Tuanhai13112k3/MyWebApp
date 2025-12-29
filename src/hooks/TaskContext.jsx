import { useReducer } from "react";
import { initialState, taskReducer } from "./taskReducer";
import { TaskStateContext, TaskDispatchContext } from "./useTaskContext";

//2.Tạo Provider
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  return (
    //Truyền cả state và dispatch xuống dưới
    <TaskDispatchContext.Provider value={dispatch}>
      <TaskStateContext.Provider value={tasks}>
        {children}
      </TaskStateContext.Provider>
    </TaskDispatchContext.Provider>
  );
};

