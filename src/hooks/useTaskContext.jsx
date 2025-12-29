import { createContext, useContext } from "react";

//1. Tạo Context
export const TaskStateContext = createContext();
export const TaskDispatchContext = createContext();

//3. Custom Hooks (Best Practice)
//Giúp việc gọi context gọn gàng hơn và kiểm tra lỗi nếu dùng sai chỗ
export const useTaskState = () => {
    const context = useContext(TaskStateContext);
    if (context === undefined) {
        throw new Error("useTaskState phải được dùng bên trong TaskProvider");
    }
    return context;
};

export const useTaskDispatch = () => {
    const context = useContext(TaskDispatchContext);
    if (context === undefined) {
        throw new Error("useTaskDispatch phải được dùng bên trong TaskProvider");
    }
    return context;
};
