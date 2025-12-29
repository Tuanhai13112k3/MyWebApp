import { useTaskDispatch, useTaskState } from "../hooks/useTaskContext.jsx";

const TaskList = () => {
    const tasks = useTaskState();
    const dispatch = useTaskDispatch();

    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li
                        key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                        {task.text}
                        <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
                            Xong
                        </button>
                        <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default TaskList;