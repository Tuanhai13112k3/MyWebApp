import { useTaskDispatch, useTaskState } from "../hooks/useTaskContext.jsx";
import { ACTION_TYPES } from "../store/constants.js";

const TaskList = () => {
    const tasks = useTaskState();
    const dispatch = useTaskDispatch();
    const handleEdit = (task) => {
        const newTask = window.prompt("Sửa task", task.text);
        if (newTask && newTask !== task.text) {
            dispatch({
                type: ACTION_TYPES.EDIT,
                payload: { id: task.id, text: newTask }
            });
        }
    };
    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li
                        onDoubleClick={() => handleEdit(task)}
                        key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                        {task.text}
                        <button onClick={() => dispatch({ type: ACTION_TYPES.TOGGLE, payload: task.id })}>
                            Xong
                        </button>
                        <button onClick={() => dispatch({ type: ACTION_TYPES.DELETE, payload: task.id })}>
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default TaskList;