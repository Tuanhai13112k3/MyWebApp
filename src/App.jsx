import { useForm } from "react-hook-form";
import './App.css';


function App() {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4" >
        {/**Đăng ký input với validation cơ bản của HTMl */}
        <div>
          <label>Tên đăng nhập:</label>
          <input
            {...register("username", { required: "Tên đăng nhập không được để trống" })}
            className="border p-2"
          />
          {/**Hiển thị lỗi */}
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email không được để trống",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email không đúng định dạng"
              }
            })}
            className="border p-2"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2"
        >Submit</button>
      </form>
    </>
  );
};

export default App
