// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from "react-hook-form";
// import { z } from 'zod';
import { BsListCheck } from "react-icons/bs";
import { MdAddCircleOutline, MdOutlineNavigateNext } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";


import './App.css';

import { useState } from "react";
import MyButton from './components/button/MyButton';
import MyInput from './components/input/MyInput';
import FormAdd from "./pages/form/FormAdd";
import MyTodoList from "./pages/listTodo/MyTodoList";

//1. Định nghĩa Schema
// const schema = z.object({
//   age: z.coerce.number({ error: "Tuổi phải là số" })
//     .min(1, "Tuổi không được để trống")
//     .min(18, "Phải trên 18 tuổi")
//     .max(65, "Không được quá tuôi lao động cho phép"),
//   password: z.string().min(1, "Mật khẩu không được để trống").min(6, "Mặt khẩu tối thiểu 6 ký tự")
// })

function App() {
  const [isFormVisible, setVisible] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Do something', priority: 'high', date: '2025-12-24T20:20', status: 'todo' },
    { id: 11, title: 'Task 11', description: 'Do something', priority: 'high', date: '2025-12-24T20:20', status: 'todo' },
    { id: 111, title: 'Task 111', description: 'Do something', priority: 'high', date: '2025-12-24T20:20', status: 'todo' },
    { id: 1111, title: 'Task 1111', description: 'Do something', priority: 'high', date: '2025-12-24T20:20', status: 'todo' },
    { id: 11111, title: 'Task 11111', description: 'Do something', priority: 'high', date: '2025-12-24T20:20', status: 'todo' },
    { id: 111111, title: 'Task 111111', description: 'Do something', priority: 'high', date: '2025-12-24T20:20', status: 'todo' },
    { id: 2, title: 'Task 2', description: 'Continue work', priority: 'med', date: '2025-12-24T20:20', status: 'inProgres' },
    { id: 22, title: 'Task 22', description: 'Continue work', priority: 'med', date: '2025-12-24T20:20', status: 'inProgres' },
    { id: 222, title: 'Task 222', description: 'Continue work', priority: 'med', date: '2025-12-24T20:20', status: 'inProgres' },
    { id: 333, title: 'Task 333', description: 'Continue work', priority: 'med', date: '2025-12-24T20:20', status: 'inProgres' },
    { id: 2222, title: 'Task 2222', description: 'Continue work', priority: 'med', date: '2025-12-24T20:20', status: 'inProgres' },
    { id: 22222, title: 'Task 22222', description: 'Continue work', priority: 'med', date: '2025-12-24T20:20', status: 'inProgres' },
    { id: 3, title: 'Task 3', description: 'Finish project', priority: 'low', date: '2025-12-24T20:20', status: 'completed' },
    { id: 33, title: 'Task 33', description: 'Finish project', priority: 'low', date: '2025-12-24T20:20', status: 'completed' },
    { id: 3333, title: 'Task 3333', description: 'Finish project', priority: 'low', date: '2025-12-24T20:20', status: 'completed' },
    { id: 33333, title: 'Task 33333', description: 'Finish project', priority: 'low', date: '2025-12-24T20:20', status: 'completed' },
    { id: 333333, title: 'Task 333333', description: 'Finish project', priority: 'low', date: '2025-12-24T20:20', status: 'completed' },
    { id: 33333333, title: 'Task 3333333', description: 'Finish project', priority: 'low', date: '2025-12-24T20:20', status: 'completed' },
    { id: 333333333, title: 'Task 33333333', description: 'Finish project', priority: 'low', date: '2025-12-24T20:20', status: 'completed' },
  ]);

  const handleFormSubmit = (data) => {
    if (editTask) {
      setTasks(tasks.map(t =>
        t.id === editTask.id ? { ...t, ...data } : t
      ));
      console.log('Edited task:', { ...editTask, ...data });
    } else {
      const newTask = { ...data, id: Date.now() };
      setTasks([...tasks, newTask]);
      console.log('New task:', newTask);
    }
    setVisible(false);
    setEditTask(null);
  }

  const handleFormClose = () => {
    setVisible(false);
    setEditTask(null);
  }

  const handleCardDoubleClick = (item) => {
    console.log(item);
    setEditTask(item);
    setVisible(true);
  }

  const handleAddNew = () => {
    setEditTask(null);
    setVisible(true);
  }

  const filteredTasks = tasks.filter(task => {
    const matchSearch = searchText === '' ||
      task.title.toLowerCase().includes(searchText.toLowerCase()) ||
      task.description.toLowerCase().includes(searchText.toLowerCase());

    const matchDate = filterDate === '' ||
      task.date.startsWith(filterDate);

    return matchSearch && matchDate;
  });

  const fields = [
    { key: 'todo', label: 'Todo' },
    { key: 'inProgres', label: 'In Progress' },
    { key: 'completed', label: 'Completed' },
  ]
  return (
    <div className='bg-[#202D48] w-full h-full fixed text-white flex'>
      {/*Sidebar*/}
      <div className='h-full min-w-72 flex flex-col items-start mt-12 ml-8 gap-8'>
        <p className='text-3xl'>TODO</p>
        <div className="flex items-center gap-2 text-xl  p-2 rounded-md w-[90%] hover:bg-[#334977]">
          <RxDashboard />
          <p>Dashboard</p>
        </div>
      </div>
      {/*Content*/}
      <div className='flex-1 bg-white mt-5 mr-5 rounded-t-md text-black pl-10 pr-10 pt-12'>
        {/*Content_NavBar */}
        <div className="flex gap-8 pb-4 border-b-2 text-black/50">
          <BsListCheck className="text-2xl" />
          <MdOutlineNavigateNext className="text-2xl" />
          <p>Dashboard</p>
          <MdOutlineNavigateNext className="text-2xl" />
          <p className="text-black p-1 rounded-md bg-gray-100">Overview</p>
        </div>
        {/*Content_Header */}
        <div className="flex justify-between mt-8">
          <p className="text-2xl">My Todo</p>
          <div className="flex gap-4">
            <MyButton type="primary" size="lg" handleClick={handleAddNew}>
              <div className="flex items-center gap-2">
                <MdAddCircleOutline className="text-2xl" />
                <p>New task</p>
              </div>

            </MyButton>
            <img src="https://www.creativefabrica.com/wp-content/uploads/2023/05/20/User-icon-Graphics-70077892-1-1-580x387.jpg" className="w-14 h-10" />
          </div>
        </div>
        {/*Content_Button */}
        <div className="flex justify-between mt-2 mb-4">
          <MyInput
            type="text"
            placeHolder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <MyInput
            type="date"
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <MyTodoList fields={fields} data={filteredTasks} handleDoubleClick={handleCardDoubleClick}></MyTodoList>
        {isFormVisible && <FormAdd handleFormSubmit={handleFormSubmit} task={editTask} handleFormClose={handleFormClose} />}
      </div>
    </div>
  );
};
export default App
